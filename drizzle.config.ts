import type { Config } from 'drizzle-kit'
import { join } from 'node:path'

export default {
    out: 'server/db/migrations',
    schema: 'server/db/schema.ts',
    driver: process.env.NODE_ENV === 'development' ? 'better-sqlite' : 'turso',
    dbCredentials: {
        url: process.env.NODE_ENV === 'development' ? join(process.cwd(), './.data/db.sqlite3') : process.env.TURSO_DB_URL as string,
        authToken: process.env.NODE_ENV === 'development' ? '' : process.env.TURSO_DB_AUTH_TOKEN,
    },
    strict: true,
    verbose: true,
} satisfies Config