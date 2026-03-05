import { pgTable, text, real, integer, timestamp } from 'drizzle-orm/pg-core';

export const companies = pgTable('companies', {
    id: text('id').primaryKey(),
    name: text('name').notNull(),
    subscriptionPlan: text('subscription_plan').notNull(),
    complianceSettings: text('compliance_settings').notNull(), // stored as JSON string
});

export const employees = pgTable('employees', {
    id: text('id').primaryKey(),
    companyId: text('company_id').references(() => companies.id).notNull(),
    fullName: text('full_name').notNull(),
    role: text('role').notNull(),
    email: text('email').notNull().unique(),
    baseSalary: real('base_salary').notNull(),
});

export const attendances = pgTable('attendances', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    clockIn: text('clock_in').notNull(),
    clockOut: text('clock_out'),
    source: text('source').notNull(), // App or Fingerprint
    status: text('status'), // On Time, Late, etc.
});

export const payrolls = pgTable('payrolls', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    period: text('period').notNull(), // e.g., '2024-10'
    totalAmount: real('total_amount').notNull(),
    status: text('status').notNull(), // Draft, Paid
});

export const performanceReviews = pgTable('performance_reviews', {
    id: text('id').primaryKey(),
    employeeId: text('employee_id').references(() => employees.id).notNull(),
    reviewerId: text('reviewer_id').notNull(),
    score: integer('score').notNull(),
    feedback: text('feedback'),
});

// Better Auth Required Tables
export const user = pgTable("user", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    emailVerified: text("emailVerified").notNull(),
    image: text("image"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
    role: text("role"),
    banned: text("banned"),
    banReason: text("banReason"),
    banExpires: timestamp("banExpires")
});

export const session = pgTable("session", {
    id: text("id").primaryKey(),
    expiresAt: timestamp("expiresAt").notNull(),
    token: text("token").notNull().unique(),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull(),
    ipAddress: text("ipAddress"),
    userAgent: text("userAgent"),
    userId: text("userId").notNull().references(() => user.id)
});

export const account = pgTable("account", {
    id: text("id").primaryKey(),
    accountId: text("accountId").notNull(),
    providerId: text("providerId").notNull(),
    userId: text("userId").notNull().references(() => user.id),
    accessToken: text("accessToken"),
    refreshToken: text("refreshToken"),
    idToken: text("idToken"),
    accessTokenExpiresAt: timestamp("accessTokenExpiresAt"),
    refreshTokenExpiresAt: timestamp("refreshTokenExpiresAt"),
    scope: text("scope"),
    password: text("password"),
    createdAt: timestamp("createdAt").notNull(),
    updatedAt: timestamp("updatedAt").notNull()
});

export const verification = pgTable("verification", {
    id: text("id").primaryKey(),
    identifier: text("identifier").notNull(),
    value: text("value").notNull(),
    expiresAt: timestamp("expiresAt").notNull(),
    createdAt: timestamp("createdAt"),
    updatedAt: timestamp("updatedAt")
});
