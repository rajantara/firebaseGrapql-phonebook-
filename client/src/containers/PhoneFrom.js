import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postContact } from '../actions'

class PhoneForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Id: "",
            Name: "",
            Phone: "",
            value: '',
        }
        this.handleIDchange = this.handleIDchange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        //this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.handleFilterChange = this.handleFilterChange.bind(this)
        this.handleReset = this.handleReset.bind(this)
        //this.handleButtonSearch = this.handleButtonSearch.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
    
    }



    handleIDchange(event) {
        this.setState({ Id: event.target.value });
    }

   
    handleNameChange(event) {
        this.setState({ Name: event.target.value });
    }

    handlePhoneChange(event) {
        this.setState({ Phone: event.target.value });
    }

    handleSubmit(event) {
        if (this.state.Id && this.state.Name && this.state.Phone) {
            this.props.postContact(this.state.Id, this.state.Name, this.state.Phone)
            this.setState({ Id: "", Name: "", Phone: "" });
        }
        event.preventDefault();
    }


    handleButtonCancel() {
        this.setState({
            search: false
        })
        //this.props.searchContactReset()
    }


    handleReset(event) {
        event.preventDefault();
        this.setState({
            value: ''
        })
        this.props.searchContactReset()
    }

    render(){
        return(
            <div>

            <form className="footer" onSubmit={this.handleSubmit}>

                <p>
                    <button className="btn mr-2" type="button" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm">
                        <i className="fas fa-plus"></i> Add
                    </button>
                    <button className="btn my-4 mr-2" onClick={this.handleButtonSearch} type="button" data-toggle="collapse" data-target="#searchForm" aria-expanded="false" aria-controls="searchForm">
                        <i className="fas fa-search"></i> Search
                    </button>
                </p>

                <div className="collapse" id="addForm">
                    <div className="card card-header">
                        <h5 className="card-text">Add Contact</h5>
                    </div>
                    <div className="card card-body">
                        <div className="row">
                        <div className="col-3">
                                    <input type="text" name="id" value={this.state.Id} onChange={this.handleIDchange} className="form-control" placeholder="ID Here" required />
                                </div>
                            <div className="col-3">
                                <input type="text" name="Name" value={this.state.Name} onChange={this.handleNameChange} className="form-control" placeholder="Users Name Here" required />
                            </div>
                            <div className="col-3">
                                <input type="Phone" name="Phone" value={this.state.Phone} onChange={this.handlePhoneChange} className="form-control" placeholder="Your Phone Number Here" required />
                            </div>
                            <button type="submit" className="btn mr-2"> <i className="fas fa-save"></i> Save</button>
                            <button type="button" onClick={this.handleButtonCancel} className="btn" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm"><i className="fas fa-times"></i> Cancel</button>
                        </div>
                    </div>
                </div>

               

            </form>

        </div>
        )
    }
}




const mapDispatchToProps = dispatch => ({
    postContact: (Id, Name, Phone) => dispatch(postContact(Id, Name, Phone))
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneForm)