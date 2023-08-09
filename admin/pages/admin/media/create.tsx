import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { MediaForm } from '../../../components/forms/MediaForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create media
			</SlotSources.Title>
			<CreateScope entity="Media" redirectOnSuccess="admin/media/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create media" labelSaved="Create media" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/media/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Media
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<MediaForm />
				</>
			</CreateScope>
		</>
	)
}
