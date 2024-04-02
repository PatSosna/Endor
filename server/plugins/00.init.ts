export default defineNitroPlugin(async () => {
    if (process.env.NODE_ENV === 'development') {
        console.group('> Task', 'db:migrate')
        const task = await runTask('db:migrate')
        console.group(task.result)
    }
});