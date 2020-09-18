import { connect } from 'react-redux'
import { deleteContact, resendUser, updateON} from '../actions'
import Phone from '../components/Phone'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteContact(ownProps.Id)),
    resend: () => dispatch(resendUser(ownProps.Id, ownProps.Name, ownProps.Phone)),
    onEdit: () => dispatch(updateON(ownProps.Id))
    
})

export default connect(
    null,
    mapDispatchToProps
)(Phone)