import {
    objectType,
} from 'nexus'

export const QueryEmployee = objectType({
    name: 'Query',
    definition(t) {
        t.nonNull.list.nonNull.field('allEmp', {
            type: 'TUsrMEmployee',
            resolve: (_parent, _args, context) => {
                return context.prisma.tUsrMEmployee.findMany()
            },
        })
    },
})

export const TUsrMEmployee = objectType({
    name: 'TUsrMEmployee',
    definition(t) {
        t.nonNull.string('XVEmpCode')
        t.string('XVEmpFirstName')
    },
})

export default {
    QueryEmployee,
    TUsrMEmployee
}