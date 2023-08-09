import { SchemaDefinition as def } from '@contember/schema-definition'


export const PostState = def.createEnum('draft', 'pendingApproval', 'approved')
