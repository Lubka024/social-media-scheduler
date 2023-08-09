import { Component, DateTimeField, SelectField, TextField } from '@contember/admin'

export const SocialMediaPostForm = Component(() => <>
	<TextField field="title" label="Title" />
	<TextField field="content" label="Content" />
	<SelectField
		field="state"
		label="State"
		options={[{ value: 'draft', label: 'draft' }, { value: 'pendingApproval', label: 'pendingApproval' }, { value: 'approved', label: 'approved' }]}
		allowNull
	/>
	<DateTimeField field="scheduledDate" label="Scheduled date" />
	<SelectField field="platform" label="Platform" lazy options="Platform.name" allowNull />
</>)
