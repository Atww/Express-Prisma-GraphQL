import {
    makeSchema,
    asNexusMethod,
} from 'nexus'
import { GraphQLDateTime } from 'graphql-iso-date'
import { QueryEmployee, TUsrMEmployee } from './schema/empSchema'
export const DateTime = asNexusMethod(GraphQLDateTime, 'date')



export const schema = makeSchema({
    types: [
        QueryEmployee,
        TUsrMEmployee
    ],
    outputs: {
        schema: __dirname + '/../../schema.graphql',
        typegen: __dirname + '/generated/nexus.ts',
    },
    contextType: {
        module: require.resolve('./context'),
        export: 'Context',
    },
    sourceTypes: {
        modules: [
            {
                module: '@prisma/client',
                alias: 'prisma',
            },
        ],
    },
})
