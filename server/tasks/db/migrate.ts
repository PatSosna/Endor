/* import { LibSQLDatabase } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator" */
import { migrateDb } from "~/server/utils/db"

export default defineTask({
    async run () {
        if (process.env.NODE_ENV === 'development') {
            migrateDb()
            // await migrate(useDB as LibSQLDatabase, { migrationsFolder: '/server/db/migrations' })
        }

        return { result: "Database migrated successfully!" }
    }
})