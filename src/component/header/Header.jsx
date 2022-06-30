import React from 'react'
import './header.css'

const Header =() =>{
    return(
        <header className='header'>
            <div className='header-wrapper'>
                <span className='dot dot1'></span>
                <span className='dot dot2'></span>
                <span className='dot dot3'></span>
                <span className='dot dot4'></span>
                <span className='dot dot5'></span>
                <div className='content-wrapper'>
                <h3 className='title-support'>Our Blog</h3><br></br>
                <div className='title'>
                    <h1>Resources for makers & creative  to learn & grow</h1>
                </div>
                <p className='p'>
                    Explor the new era of bloging & join the run
                </p>
                <div className='buttons'>
                    <a href='#'>Get Started</a>
                    <a href='#'>View Pricing</a>
                </div>
            </div>
                
            </div>
        </header>
    )
}
export default Header