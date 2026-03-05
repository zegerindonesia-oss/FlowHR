import { sqliteTable, text, real, integer } from 'drizzle-orm/sqlite-core';

export const companies = sqliteTable('companies', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    subscriptionPlan: text('subscription_plan').notNull(),
    complianceSettings: text('compliance_settings').notNull(), // stored as JSON string
});

export const employees = sqliteTable('employees', {
    id: text('id').primaryKey(),
    companyId: text('company_id').references(() => companies.id).notNull(),
    fullName: text('full_name').notNull(),
    role: text('role').notNull(),
    email: text('email').notNull().unique(),
    baseSalary: real('base_salary').notNull(),
    passwordHash: text('password_hash').notNull(), // added for Auth
});

export const attendances = sqliteTable('attendances', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    clockIn: text('clock_in').notNull(),
    clockOut: text('clock_out'),
    source: text('source').notNull(), // App or Fingerprint
    status: text('status'), // On Time, Late, etc.
});

export const payrolls = sqliteTable('payrolls', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    period: text('period').notNull(), // e.g., '2024-10'
    totalAmount: real('total_amount').notNull(),
    status: text('status').notNull(), // Draft, Paid
});

export const performanceReviews = sqliteTable('performance_reviews', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    reviewerId: text('reviewer_id').notNull(),
    score: integer('score').notNull(),
    feedback: text('feedback'),
});
