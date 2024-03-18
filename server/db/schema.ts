import {
    sqliteTable,
    text,
    integer,
} from 'drizzle-orm/sqlite-core'

export const product = sqliteTable('product', {
    id: integer('id').primaryKey(),
    name: text('name').notNull(),
    description: text('description').notNull(),
});