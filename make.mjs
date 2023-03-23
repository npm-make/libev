export default {
    async generate(builder, project, config) {
        const libev = project.createTarget('libev', 'LIBRARY')
            .addExportIncludeDirectory('.')
    }
}
