import { db } from './index';
import { companies, employees } from './schema';

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
        }).onConflictDoNothing();

        console.log('Inserted company.');

        // 2. Create the dummy Admin user (admin / 123)
        await db.insert(employees).values({
            id: 'usr-admin',
            companyId: companyId,
            fullName: 'System Administrator',
            role: 'admin',
            email: 'admin',        // match the dummy front-end logic (using 'admin' as email/username here)
            baseSalary: 10000000,
            passwordHash: '123'    // dummy plain-text password check
        }).onConflictDoNothing();

        console.log('Inserted admin user.');

        // 3. Create the dummy Employee user (employee / 123)
        await db.insert(employees).values({
            id: 'usr-employee-1',
            companyId: companyId,
            fullName: 'Employee User',
            role: 'employee',
            email: 'employee',
            baseSalary: 5000000,
            passwordHash: '123'
        }).onConflictDoNothing();

        console.log('Inserted employee user.');

        console.log('Seeding complete!');
    } catch (err) {
        console.error('Error seeding DB:', err);
    }
}

seed();
