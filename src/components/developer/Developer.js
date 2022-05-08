import React from 'react'
import './Developer.css'
import Terminal from '../../assets/terminal.png'

const Developer = () => {
    return (
        <div className='developers'>
            <div className="container">
                <div className="left">
                    <h2>Superpowers for any Fit Human</h2>
                    <p>Checkout the <span className="blue">Training  </span>regime <span className="blue">for </span> a man must dream of being the strongest man alive</p>
                </div>
                <div className="right">
                    <div className="img-container">
                        <img src={Terminal} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developer
