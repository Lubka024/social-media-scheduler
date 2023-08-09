import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MediaForm } from '../../../components/forms/MediaForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit media
			</SlotSources.Title>
			<EditScope entity="Media(id=$id)" redirectOnSuccess="admin/media/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/media/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<MediaForm />
			</EditScope>
		</>
	)
}
