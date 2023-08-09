import { EditScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlatformForm } from '../../../components/forms/PlatformForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Edit platform
			</SlotSources.Title>
			<EditScope entity="Platform(id=$id)" redirectOnSuccess="admin/platform/detail(id: $entity.id)">
				<SlotSources.Back>
					<LinkButton to="admin/platform/detail(id: $entity.id)" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Detail
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<PersistButton />
				</SlotSources.Actions>
				<PlatformForm />
			</EditScope>
		</>
	)
}
