import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postUser } from '../actions'

class PhoneForm extends Component {
    constructor (props){
        super(props)
        console.log('props', this.props)
        this.state = {
            Id: "",
            Name: "",
            Phone: ""
        }

        this.handleIdChange = this.handleIdChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleButtonSearch = this.handleButtonSearch.bind(this)
        this.handleButtonCancel = this.handleButtonCancel.bind(this)
    }

    handleIdChange(event){
        this.setState({Id: event.target.value})
    }

    handleNameChange(event){
        this.setState({Name: event.target.value})
    }
    handlePhoneChange(event){
        this.setState({Phone: event.target.value})
    }
    handleSubmit(event){
        if(this.state.Id && this.state.Name && this.state.Phone){
            this.props.postUser(this.state.Id, this.state.Name, this.state.Phone)
            this.setState({Id: "", Name:"", Phone:""});
        }
    }

    //tambahan
    handleButtonSearch() {
        this.setState({
            search: true
        })
    }

    handleButtonCancel() {
        this.setState({
            search: false
        })
        //this.props.searchContactReset()
    }

    render(){
        return (
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
                                    <input type="text" name="id" value={this.state.Id} onChange={this.handleIdChange}  className="form-control" placeholder="Username Here" required />
                                </div>
                                <div className="col-3">
                                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleNameChange} className="form-control" placeholder="Full Name Here" required />
                                </div>
                                <div className="col-3">
                                    <input type="number" name="Number" value={this.state.Phone} onChange={this.handlePhoneChange} className="form-control" placeholder="Your Phone Number Here" required />
                                </div>
                                <button type="submit" className="btn mr-2"> <i className="fas fa-save"></i> Save</button>
                                <button type="button" onClick={this.handleButtonCancel} className="btn" data-toggle="collapse" data-target="#addForm" aria-expanded="false" aria-controls="addForm"><i className="fas fa-times"></i> Cancel</button>
                            </div>
                        </div>
                    </div>

                    <div className="collapse mt-3" id="searchForm">
                        <h5 className="card-header">Search Contact</h5>
                        <div className="card card-body">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                            <span className="input-group-text" id="basic-addon2" htmlFor="inlineFormInputGroup"><i
                                                className="fas fa-user"></i></span>
                                        </div>
                                        <input type="text" id="inlineFormInputGroup" className="form-control" placeholder="Name / Phone Number" value={this.state.value} onChange={this.handleFilterChange} />
                                    </div>
                                </div>
                                <div className="form-group mr-2">
                                    <button type="button" onClick={this.handleReset} className="btn "><i className="fas fa-undo"></i> Reset</button>
                                </div>
                                <div className="form-group">
                                    <button type="button" onClick={this.handleButtonCancel} className="btn" data-toggle="collapse" data-target="#searchForm" aria-expanded="false" aria-controls="searchForm"><i className="fas fa-times"></i> Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </form>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    postUser: (Id, Name, Phone) => dispatch(postUser(Id, Name, Phone))
})

export default connect(
    null,
    mapDispatchToProps
)(PhoneForm)