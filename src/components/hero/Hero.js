import React from 'react'
import MainVideo from '../../assets/video.mp4'
import './Hero.css'

const hero = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={MainVideo} type='video/mp4'/>
            </video>
            <div className="hero-text">
                <h1>Decentralized</h1>
                <h1><span className="blue">Training</span> Perfection</h1>
                <p>Gain or Loss weight with Fitness Care</p>
                <div className="btn-group">
                    <button className="btn">Use Fitness Care</button>
                    {/* <button className="btn btn-outline">Documentation</button> */}
                    <button className="btn btn-outline">FAQ</button>
                </div>
            </div>
            <div className="bottom-text">
                <h2>Total Clients Secured: 783,662</h2>
            </div>
        </div>
    )
}

export default hero
