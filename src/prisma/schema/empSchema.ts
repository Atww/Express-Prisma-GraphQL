import {
    objectType,
} from 'nexus'
import { TUsrMForeman } from './foremanSchema'

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
        t.string('XVEmpLastName')
        t.string('XVFrmCode')
        t.field('TUsrMForeman', {
            type: 'TUsrMForeman',
            resolve: (parent, _, context) => {
                return context.prisma.tUsrMEmployee
                    .findUnique({
                        where: { XVEmpCode: parent.XVEmpCode },
                    })
                    .TUsrMForeman()
            },
        })
    },
})

export default {
    QueryEmployee,
    TUsrMEmployee,
}