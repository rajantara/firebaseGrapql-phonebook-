import React, { Component } from 'react';
import Phone from './PhoneActive';
import { connect } from 'react-redux';
import { loadContact } from '../actions';


class PhoneList extends Component {

    componentDidMount() {
        this.props.loadContact();
    }

    render() {
        console.log(this.props, 'ini list men')
        const contact = this.props.data.map((item, index) => {
            return (

                <Phone
                    key={index}
                    index={index + 1}
                    Name={item.Name}
                    Phone={item.Phone}
                    sent={item.sent} />

            )
        })

        return (
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col">No</th>
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