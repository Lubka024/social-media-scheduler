import { Box, DataGrid, DeleteEntityButton, DetailScope, DisplayTextField, Divider, GenericCell, Heading, LinkButton, Stack, TextCell } from '@contember/admin'
import { SlotSources } from '../../../components/Slots'
import { ArrowLeftIcon } from 'lucide-react'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Social media post detail
			</SlotSources.Title>
			<DetailScope entity="SocialMediaPost(id=$id)">
				<SlotSources.Back>
					<LinkButton to="admin/socialMediaPost/list" size="small" className="mr-2" distinction="outlined">
						<Stack horizontal gap="small">
							<ArrowLeftIcon />
							Social media posts
						</Stack>
					</LinkButton>
				</SlotSources.Back>
				<SlotSources.Actions>
					<LinkButton to="admin/socialMediaPost/edit(id: $entity.id)">
						Edit social media post
					</LinkButton>
				</SlotSources.Actions>
				<Stack gap="xlarge">
					<Box data-elevated>
						<DisplayTextField field="title" label="Title" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="content" label="Content" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="state" label="State" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="scheduledDate" label="Scheduled date" labelPosition="labelLeft" />
						<Divider gap={false} />
						<DisplayTextField field="platform.name" label="Platform" labelPosition="labelLeft" />
					</Box>
					<Box data-elevated>
						<Stack horizontal justify="space-between" align="center">
							<Heading depth={2} size="small">
								Media
							</Heading>
							<LinkButton to="admin/media/create">
								Create new media
							</LinkButton>
						</Stack>
						<Divider gap={false} />
						<DataGrid entities="Media[post.id=$id]">
							<GenericCell shrunk canBeHidden={false}>
								<LinkButton to="admin/media/detail(id: $entity.id)">
									Open detail
								</LinkButton>
							</GenericCell>
							<TextCell field="title" header="Title" />
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
