import React, { Component } from 'react';
import Phone from './PhoneActive';
import { connect } from 'react-redux';
import { loadContact } from '../actions';
import PhoneEditFrom from './PhoneEditFrom';


class PhoneList extends Component {

    componentDidMount() {
        this.props.loadContact();
    }

    render() {
        console.log(this.props, 'ini list men')
        const contact = this.props.data.map((item, index) => {
            return (
                (item.onEdit ?
                    <PhoneEditFrom
                        key={index}
                        Id={item.Id}
                        Name={item.Name}
                        Phone={item.Phone}
                        sent={item.sent} />
                    :
                    <Phone
                        key={index}
                        Id={item.Id}
                        Name={item.Name}
                        Phone={item.Phone}
                        sent={item.sent} />
                )
            )
        })

        return (
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col">User ID</th>
                        <th scope="col">Users Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {contact}
                </tbody>
            </table>

        )
    }

}

const mapStateToProps = (state) => ({
    data: state.users
})


const mapDispatchToProps = (dispatch) => ({
    loadContact: () => dispatch(loadContact())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneList)