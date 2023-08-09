import { SchemaDefinition as def } from '@contember/schema-definition'

import { PostState } from './enum'
import { Platform } from './Platform'
import { Media } from './Media'

export class SocialMediaPost {
	title = def.stringColumn()
	content = def.stringColumn()
	state = def.enumColumn(PostState)
	scheduledDate = def.dateTimeColumn()
	platform = def.manyHasOne(Platform, 'posts')
	media = def.oneHasMany(Media, 'post')
}
