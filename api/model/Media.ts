import { SchemaDefinition as def } from '@contember/schema-definition'

import { File } from './File'
import { SocialMediaPost } from './SocialMediaPost'

export class Media {
	title = def.stringColumn()
	description = def.stringColumn()
	file = def.manyHasOne(File, 'mediaFiles').setNullOnDelete()
	post = def.manyHasOne(SocialMediaPost, 'media')
}
