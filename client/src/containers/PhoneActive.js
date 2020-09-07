import { connect } from 'react-redux'
import { deleteContact } from '../actions'
import Phone from '../components/Phone'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onDelete: () => dispatch(deleteContact(ownProps.Id)),
    
})

export default connect(
    null,
    mapDispatchToProps
)(Phone)