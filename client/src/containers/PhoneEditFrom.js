import React from 'react';
import { connect } from 'react-redux';
import { updateUser, updateOFF } from '../actions';


class PhoneEditFrom extends React.Component {
    constructor(props) {
        super(props)
        console.log('props', this.props)
        this.state = {
            Id: props.Id,
            Name: props.Name,
            Phone: props.Phone
        }
        
        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this)
        this.handlePhoneChange = this.handlePhoneChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleIdChange(event){
        this.setState({Id: event.target.value})
    }

    handleNameChange(event) {
        this.setState({
            Name: event.target.value,
            IsValid: true
        })
    }

    handlePhoneChange(event) {
        this.setState({
            Phone: event.target.value,
            IsValid: true
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        this.props.updateUser(this.state.Name, this.state.Id, this.state.Phone)
    }

    render() {
        console.log(this.state.Id === this.props.Id, this.state.Name === this.props.Name , this.state.Phone === this.props.Phone, 'ini state dan rops')
        return (
            <tr>
                <th scope="row">{this.props.index}</th>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="text" className="form-control" name="Name" value={this.state.Id}disabled={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="text" className="form-control" name="Name" value={this.state.Name} onChange={this.handleNameChange} required={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <form className="form-row" onSubmit={this.handleSubmit}>
                        <div className="col-8">
                            <input type="text" className="form-control" name="Name" value={this.state.Phone} onChange={this.handlePhoneChange} required={true} />
                        </div>
                    </form>
                </td>
                <td>
                    <button type="submit" className="btn  mr-2" onClick={this.handleSubmit}><i className="fas fa-check"></i> Save</button>
                    <button type="button" className="btn " onClick={() => this.props.onCancel()}><i className="fas fa-times"></i> Cancel</button>
                </td>
            </tr>
        )
    }


}


const mapDispatchToProps = (dispatch, ownProps) => ({
    onCancel: () => dispatch(updateOFF(ownProps.Id)),
    updateUser: (Name, Id, Phone) => {
        dispatch(updateUser(Name, Id, Phone))
        dispatch(updateOFF(ownProps.Id))
    }
})


export default connect(
    null,
    mapDispatchToProps
)(PhoneEditFrom)