import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';


export default class PhoneBox extends Component {
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="container card">
                    <div className="card-header text-center">
                        <h1> <i className="fa fa-address-book"></i> 𝓟𝓱𝓸𝓷𝓮𝓼 𝓑𝓸𝓸𝓴 𝓐𝓹𝓹𝓼</h1>
                    </div>
                    <div className="card-body">
                    <PhoneList />   
                    </div>
                    <div className="card-footer text-center">
                        <i className="far fa-copyright"></i> 𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝖇𝖞 𝕷𝖆 𝖔𝖉𝖊 𝖗𝖆𝖏𝖆𝖓𝖙𝖆𝖗𝖆
                    </div>

                </div>

            </div>
        )
    }
}