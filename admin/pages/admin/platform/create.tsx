import { CreateScope, LinkButton, PersistButton, Stack } from '@contember/admin'
import { PlatformForm } from '../../../components/forms/PlatformForm'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Create platform
			</SlotSources.Title>
			<CreateScope entity="Platform" redirectOnSuccess="admin/platform/detail(id: $entity.id)">
				<SlotSources.Actions>
					<PersistButton labelSave="Create platform" labelSaved="Create platform" />
				</SlotSources.Actions>
				<SlotSources.Back>
					<LinkButton to="admin/platform/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Platforms
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<>
					<PlatformForm />
				</>
			</CreateScope>
		</>
	)
}
