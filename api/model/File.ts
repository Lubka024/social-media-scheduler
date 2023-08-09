import { SchemaDefinition as def } from '@contember/schema-definition'

import { Media } from './Media'

export class File {
	url = def.stringColumn().notNull()
	size = def.intColumn()
	type = def.stringColumn()
	name = def.stringColumn()
	createdAt = def.dateTimeColumn().notNull().default('now')
	mediaFiles = def.oneHasMany(Media, 'file')
}
