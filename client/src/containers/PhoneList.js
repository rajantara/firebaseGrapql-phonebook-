import React, { Component } from 'react';
import { connect } from 'react-redux';


class PhoneList extends Component {   
    render() {           
        return(
            <table className="table table-striped my-3">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">User Name</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>      
                </tbody>
            </table>

        )
    }

}

export default connect(
)(PhoneList)