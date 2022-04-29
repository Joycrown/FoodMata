import React from 'react'
import Image from 'next/image'
import ft from '../public/img/FoodMata_Logo_OrangeMata 3.png'


const Footer = () => {
  return (
    <div>
        <div className='desktop'>
            <div className=' footer-bg ps-5 pb-3'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className=''>
                                <div className=''>
                                    <Image src={ft} alt='' className='' ></Image>
                                </div>
                                <div className='pt-3 ps-3'>
                                    <p className='ft-text'>Your Food really does matter, because you really do matter ;<br/> 
                                    FoodMata is a one stop Food partner 
                                    to cater for your food<br/> needs. We are committed to getting you your 
                                    food from <br/>any restaurant of your choice,
                                    at your convenient time and to <br/> any location within our coverage.</p>
                                </div>
                                <div className='pt-5 ps-3 mt-4'>
                                    <p className='ft-text'>© FoodMata 2022, All Rights Reserved</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='pt-2'>
                                <div className=''>
                                   <h3 className='ft2-text'>Contact Us</h3>
                                   <h3 className='pt-3 ft2-sub-text'>Food Mata</h3>
                                </div>
                                <div className='pt-3'>
                                    <p className='ft-text'>Head-office, 11 Adekunle Plaza, FUTA <br/> N.Gate Akure, Ondo State Nigeria.</p>
                                </div>
                                <div className='pt-1'>
                                    <h3 className='pt-3 ft2-sub-text'>Help Line</h3>
                                    <p className='ft-text pt-2'>+2348168100310</p>
                                </div>
                                <div className='pt-1'>
                                    <h3 className='pt-3 ft2-sub-text'>Email</h3>
                                    <p className='ft-text pt-2'>hqfoodmata@gmail.com</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-4'>
                            <div className='pt-2'>
                                <div className=''>
                                   <h3 className='ft2-text'>Quick Link</h3>
                                </div>
                                <div className='pt-3'>
                                    <p className='ft-text'>Home</p>
                                </div>
                                <div className='pt-3'>
                                    <p className='ft-text'>Resturants</p>
                                </div>
                                <div className='pt-3'>
                                    <p className='ft-text'>Foods</p>
                                </div>
                                <div className='pt-3'>
                                    <p className='ft-text'>Get started</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobile'>
            <div className='footer-bg pt-3 container ps-4'>
                <div className=''>
                    <Image src={ft} alt='logo' width={100} height={50} className=''></Image>
                </div>
                <div className=''>
                    <p className='ft-text-mob ps-2 pt-2'>Your Food really does matter, because you really do matter ;<br/> 
                    FoodMata is a one stop Food partner 
                    to cater for your food<br/> needs. We are committed to getting you your 
                    food from <br/>any restaurant of your choice,
                    at your convenient time and to <br/> any location within our coverage.</p>
                </div>
                <div className='pt-5 ps-1'>
                    <div className=''>
                        <h3 className='ft2-text-mob'>Contact Us</h3>
                        <h3 className='pt-3 ft2-sub-text-mob'>Food Mata</h3>
                    </div>
                    <div className='pt-3'>
                        <p className='ft-text-mob'>Head-office, 11 Adekunle Plaza, FUTA <br/> N.Gate Akure, Ondo State Nigeria.</p>
                    </div>
                    <div className='pt-1'>
                        <h3 className='pt-3 ft2-sub-text-mob'>Help Line</h3>
                        <p className='ft-text-mob pt-2'>+2348168100310</p>
                    </div>
                    <div className='pt-1'>
                        <h3 className='pt-3 ft2-sub-text-mob'>Email</h3>
                        <p className='ft-text-mob pt-2'>hqfoodmata@gmail.com</p>
                    </div>
                </div>
                <div className='text-center pt-5 pb-4'>
                    <p className='ft-text-mob'>© FoodMata 2022, All Rights Reserved</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer