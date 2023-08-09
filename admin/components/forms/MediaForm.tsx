import { AnyUploadField, Component, SelectField, TextField } from '@contember/admin'

export const MediaForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="description" label="Description" />
	<AnyUploadField baseEntity="file" urlField="url" fileNameField="name" fileTypeField="type" label="File" />
	<SelectField field="post" label="Post" lazy options="SocialMediaPost.title" allowNull />
</>)
