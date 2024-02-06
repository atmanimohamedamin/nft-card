import React from 'react'
import './Card.css'
import TopLogo from './../../assets/img/image-equilibrium.jpg'
import icon1 from './../../assets/img/icon-ethereum.svg'
import icon2 from './../../assets/img/icon-clock.svg'
import bottomLogo from './../../assets/img/image-avatar.png'
import topLogo2 from './../../assets/img/icon-view.svg'

export default function 
() {
  return (
    
    <div className='container'>
        <div className='card'>
            <div className='divTop'>
                <div className='divTopLogo'>
                    <img className='TopLogo' src={TopLogo} alt="" />
                <div className='divLogo2'>
                    <img src={topLogo2} alt="" />
                </div>
                </div>
            </div>
            <div className='divMid'>
                <div className='middleText'>
                    <h4 className='titleMid'>Equilibrium #3429</h4>
                    <p className='textMid'>Our Equilibrium collection promotes
                     balance and calm</p>
                </div>
                <div className='divStats'>
                    <p className='leftText'>
                     <img src= {icon1} alt="" />   0.041ETH
                    </p>
                    <p className='rightText'>
                       <img src={icon2} alt="" /> 3 days left
                    </p>
                </div>
            </div>
            <div className='divBottom'>
                <div className='bottomContainer'>
                    <img className='bottomLogo' src={bottomLogo} alt="" /> <p className='textBottom'>creation of <span>Jules Wyvern</span></p>
                </div>
            </div>
        </div>
    </div>
  )
}
