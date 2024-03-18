import type { Config } from 'drizzle-kit'

export default {
    out: 'server/db/migrations',
    schema: 'server/db/schema.ts',
    driver: 'turso',
    dbCredentials: {
        url: process.env.TURSO_DB_URL || '',
        authToken: process.env.TURSO_DB_AUTH_TOKEN || '',
    }
} satisfies Config