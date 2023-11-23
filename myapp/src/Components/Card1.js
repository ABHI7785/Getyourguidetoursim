import React from 'react'
import img0 from "./images/100.webp"
import img1 from './images/68.webp'
import img2 from './images/69.webp'
import img3 from './images/63.webp'
import img4 from './images/64.webp'
import img5 from './images/65.webp'
import img6 from './images/66.webp'
import img7 from './images/67.webp'


const Card1 = () => {
  return (
    <div>
       
           
              
                    
                    <div className='col-12' style={{display:"flex"}}>
                        <div className='one' >
                        <img src={img0} alt='' className='hover-effect' />
                            <h4>Travelers<br></br> Recommend</h4>
                        </div>
                        <div className='one'>
                        <img src={img1} alt='' className='hover-effect' />
                            <h4>Guided Tours</h4>
                        </div>
                        <div className='one'>
                        <img src={img2} alt='' className='hover-effect' />
                            <h4>Private Tours</h4>
                        </div>
                        <div className='one'>
                        <img src={img3} alt='' className='hover-effect' />
                            <h4>Solo Travellers <br></br>Tours</h4>
                        </div>
                        <div className='one'>
                        <img src={img4} alt='' className='hover-effect' />
                            <h4>Religious and<br></br>Spiritual Activities</h4>
                        </div>
                        <div className='one'>
                        <img src={img5} alt='' className='hover-effect' />
                            <h4>Castle and<br></br>Palace Tours</h4>
                        </div>
                        <div className='one'>
                        <img src={img6} alt='' className='hover-effect' />
                            <h4>Cruises and<br></br>Boat Tours</h4>
                        </div>
                        <div className='one'>
                        <img src={img7} alt='' className='hover-effect' />
                            <h4>Site Seeing<br></br>On Wheels</h4>
                        </div>
                        


                    

            

            </div>

        
    </div>
  )
}

export default Card1