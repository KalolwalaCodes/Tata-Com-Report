import React from 'react';
import './CapsTemplate.css';

const CapsTemplate = ({ src, title }) => {
    return (
        <div
            className='caps-template'
            style={{ backgroundImage: `url(${src})` }}
        >
            <div className='caps-marginal'>
                <div>
                    <h1>{title}</h1>
                    <h2>Capital</h2>
                    {/* <img src="" alt="" /> */}
                </div>
                
            </div>
            <div className='cap-values-overlay'>
                    <div></div>
                </div>
        </div>
    );
};

export default CapsTemplate;
