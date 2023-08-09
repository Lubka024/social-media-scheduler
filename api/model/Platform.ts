import { SchemaDefinition as def } from '@contember/schema-definition'

import { SocialMediaPost } from './SocialMediaPost'

@def.Unique('name')
export class Platform {
	name = def.stringColumn()
	posts = def.oneHasMany(SocialMediaPost, 'platform')
}
