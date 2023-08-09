import { DataGridScope, DateCell, DeleteEntityButton, EnumCell, GenericCell, HasOneSelectCell, LinkButton, TextCell } from '@contember/admin'
import { Directive } from '../../../components/Directives'
import { SlotSources } from '../../../components/Slots'

export default () => {
	return (
		<>
			<SlotSources.Title>
				Social media posts
			</SlotSources.Title>
			<SlotSources.Actions>
				<LinkButton to="admin/socialMediaPost/create">
					Create new social media post
				</LinkButton>
			</SlotSources.Actions>
			<Directive name="content-max-width" content={null} />
			<DataGridScope entities="SocialMediaPost" itemsPerPage={50}>
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
				<HasOneSelectCell field="platform" header="Platform" options="Platform.name" />
				<GenericCell shrunk canBeHidden={false}>
					<DeleteEntityButton immediatePersist />
				</GenericCell>
			</DataGridScope>
		</>
	)
}
