import { Box, DataGrid, DateCell, DeleteEntityButton, DetailScope, DisplayTextField, Divider, EnumCell, GenericCell, Heading, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Platform detail
			</SlotSources.Title>
			<DetailScope entity="Platform(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/platform/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Platforms
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/platform/edit(id: $entity.id)">
						Edit platform
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="xlarge">
					<Box data-elevated>
						<DisplayTextField field="name" label="Name" labelPosition="labelLeft" />
					</Box>
					<Box data-elevated>
						<Stack horizontal justify="space-between" align="center">
							<Heading depth={2} size="small">
								Social media posts
							</Heading>
							<LinkButton to="admin/socialMediaPost/create">
								Create new social media post
							</LinkButton>
						</Stack>
						<Divider gap={false} />
						<DataGrid entities="SocialMediaPost[platform.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/socialMediaPost/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
							<EnumCell
								options={{ draft: 'draft', pendingApproval: 'pendingApproval', approved: 'approved' }}
								field="state"
								header="State"
							/>
							<DateCell field="scheduledDate" header="Scheduled date" />
							<GenericCell shrunk canBeHidden={false}>
								<DeleteEntityButton immediatePersist />
							</GenericCell>
						</DataGrid>
					</Box>
				</Stack>
			</DetailScope>
		</>
	)
}
