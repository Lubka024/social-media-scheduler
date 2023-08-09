import { Component, HasRole, Menu } from '@contember/admin'
import { ImageIcon, MessageSquareIcon, ShareIcon } from 'lucide-react'

export const Navigation = Component(() => <Menu>
	<HasRole role={roles => roles.has('admin') || roles.size === 0}>
		<Menu.Item icon={<MessageSquareIcon />} title="Social Media Posts" to="admin/socialMediaPost/list" />
		<Menu.Item icon={<ShareIcon />} title="Platforms" to="admin/platform/list" />
		<Menu.Item icon={<ImageIcon />} title="Media" to="admin/media/list" />
	</HasRole>
</Menu>)
