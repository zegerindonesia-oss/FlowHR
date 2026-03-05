import { db } from './index';
import * as schema from './schema';
import { companies, employees } from './schema';
import { auth } from '../auth';
import { eq } from 'drizzle-orm';

async function seed() {
    console.log('Seeding database...');

    try {
        // 1. Create a dummy company
        const companyId = 'comp-123';
        await db.insert(companies).values({
            id: companyId,
            name: 'AntiGravity Inc.',
            subscriptionPlan: 'Enterprise',
            complianceSettings: JSON.stringify({ timezone: 'Asia/Jakarta' })
        }).onConflictDoNothing({ target: companies.id });

        console.log('Inserted company.');

        // 2. Create the dummy Admin user via Better Auth
        const adminEmail = 'admin@flowhr.com';
        const adminPassword = 'Password123!';

        let adminUserArr = await db.select().from(schema.user).where(eq(schema.user.email, adminEmail)).limit(1);
        let adminUser = adminUserArr[0];
        if (!adminUser) {
            const res = await auth.api.signUpEmail({
                body: {
                    email: adminEmail,
                    password: adminPassword,
                    name: 'System Administrator',
                }
            });
            if (res.user) {
                await db.update(schema.user).set({ role: 'admin' }).where(eq(schema.user.id, res.user.id));
                await db.insert(employees).values({
                    id: res.user.id,
                    companyId: companyId,
                    fullName: 'System Administrator',
                    role: 'admin',
                    email: adminEmail,
                    baseSalary: 10000000,
                }).onConflictDoNothing({ target: employees.id });
                console.log('Inserted admin user via Better Auth.');
            }
        } else {
            console.log('Admin user already exists.');
        }

        // 3. Create the dummy Employee user via Better Auth
        const empEmail = 'employee@flowhr.com';
        const empPassword = 'Password123!';

        let empUserArr = await db.select().from(schema.user).where(eq(schema.user.email, empEmail)).limit(1);
        let empUser = empUserArr[0];
        if (!empUser) {
            const res = await auth.api.signUpEmail({
                body: {
                    email: empEmail,
                    password: empPassword,
                    name: 'Employee User',
                }
            });
            if (res.user) {
                await db.update(schema.user).set({ role: 'employee' }).where(eq(schema.user.id, res.user.id));
                await db.insert(employees).values({
                    id: res.user.id,
                    companyId: companyId,
                    fullName: 'Employee User',
                    role: 'employee',
                    email: empEmail,
                    baseSalary: 5000000,
                }).onConflictDoNothing({ target: employees.id });
                console.log('Inserted employee user via Better Auth.');
            }
        } else {
            console.log('Employee user already exists.');
        }

        console.log('Seeding complete!');
        process.exit(0);
    } catch (err) {
        console.error('Error seeding DB:', err);
        process.exit(1);
    }
}

seed();
