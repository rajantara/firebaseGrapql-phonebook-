import React, { Component } from 'react';
import PhoneList from '../containers/PhoneList';
import PhoneForm from '../containers/PhoneFrom';
import HeaderCard from './HeaderCard';


export default class PhoneBox extends Component {
    render() {
        return (
            <div className="container-fluid my-5">
                <div className="container card">
                    <HeaderCard />
                    <div className="card-body">
                        <PhoneForm />
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