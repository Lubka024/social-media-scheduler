import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { SocialMediaPostForm } from '../../../components/forms/SocialMediaPostForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit social media post
			</SlotSources.Title>
			<EditScope entity="SocialMediaPost(id=$id)" redirectOnSuccess="admin/socialMediaPost/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton
						to="admin/socialMediaPost/detail(id: $entity.id)"
						size="small"
						className="mr-2"
						distinction="outlined"
					>
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<SocialMediaPostForm />
			</EditScope>
		</>
	)
}
