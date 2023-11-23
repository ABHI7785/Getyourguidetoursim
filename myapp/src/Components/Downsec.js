import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsMailbox, BsTwitter } from 'react-icons/bs';
function Downsec() {
  return (
    <div className='foot-sec'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'>
                   

                </div>
                <div className='col-md-6'>
                    <ul>
                        <li>Copyright @ 2023 Get Your Guide</li>
                    </ul>
                    


                </div>
                <div className='col-md-4'>
                    <ul>
                        <li><BsMailbox /></li>
                    <li><BsFacebook /></li>
                    <li><BsTwitter /> </li>
                    <li><BsInstagram/></li>
                    <li>< BsLinkedin/></li>
                    </ul>
               

                </div>

            </div>

        </div>



    </div>
  )
}

export default Downsec