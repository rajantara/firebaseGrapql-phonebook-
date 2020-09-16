import { connect } from 'react-redux'
import { deleteContact, resendUser} from '../actions'
import Phone from '../components/Phone'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteContact(ownProps.Id)),
    resend: () => dispatch(resendUser(ownProps.Id, ownProps.Name, ownProps.Phone))
    
})

export default connect(
    null,
    mapDispatchToProps
)(Phone)