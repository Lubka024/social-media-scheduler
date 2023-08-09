import { Box, DetailScope, DisplayTextField, Divider, LinkButton, Stack } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Media detail
			</SlotSources.Title>
			<DetailScope entity="Media(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/media/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Media
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/media/edit(id: $entity.id)">
						Edit media
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="xlarge">
					<Box data-elevated>
						<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="description" label="Description" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="file.name" label="File" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="post.title" label="Social media post" labelPosition="labelLeft" />
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
