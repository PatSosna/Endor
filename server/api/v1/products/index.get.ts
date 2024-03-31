import { product } from "~/server/db/schema"

export default defineEventHandler(async () => {
    return orm.select().from(product).all()
})