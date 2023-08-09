import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { SocialMediaPostForm } from '../../../components/forms/SocialMediaPostForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create social media post
			</SlotSources.Title>
			<CreateScope entity="SocialMediaPost" redirectOnSuccess="admin/socialMediaPost/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create social media post" labelSaved="Create social media post" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/socialMediaPost/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Social media posts
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<SocialMediaPostForm />
				</>
			</CreateScope>
		</>
	)
}
