import React from 'react';
import './CapsTemplate.css';

const CapsTemplate = ({ src, title, values, theme, gradient, ico }) => {
    // Split values into groups of 4
    const valueChunks = [];
    for (let i = 0; i < values.length; i += 4) {
        valueChunks.push(values.slice(i, i + 4));
    }

    return (
        <div className='caps-template'>
            <div
                className='caps-template-bg'
                style={{
                    backgroundImage: `url(${src})`,
                }}
            />
            <div className='caps-marginal'>
                <div className='caps-main-title'>
                    <h1>{title}</h1>
                    <h2 className='capitalh2'>Capital</h2>
                    <div className='cap-icon'>
                        <img src={ico} alt="" />
                    </div>
                </div>
            </div>
            <div className='cap-values-overlay' style={{
                backgroundImage: `linear-gradient(to right, transparent, ${gradient})`
            }}>
                <div className='cap-data'>
                    <h3 className='cap-data-title'>Value created and distributed</h3>
                    <div className='cap-data-row'>
                        {valueChunks.map((chunk, chunkIndex) => (
                            <div key={chunkIndex} className='cap-data-column'>
                                {chunk.map((value, index) => (
                                    <div key={index} className='cap-data-cell'>
                                        <h2 className='cap-val' style={{ backgroundColor: theme }}>{value.val1}</h2>
                                        <p className='cap-desc'>{value.val2}</p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CapsTemplate;
