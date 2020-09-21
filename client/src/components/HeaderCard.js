
import React from 'react';
import Clock from 'react-live-clock';

function HeaderCard() {

    return (
        <div className="card-header text-center">
            <h1> <i className="fa fa-address-book"></i> 𝓟𝓱𝓸𝓷𝓮𝓼 𝓑𝓸𝓸𝓴 𝓐𝓹𝓹𝓼</h1>
            <Clock format={'MMMM Mo YYYY, HH:mm:ss'} ticking={true} timezone={'Asia/Jakarta'} style={{ fontSize: '20px' }} />
        </div>

    )

}

export default HeaderCard;

