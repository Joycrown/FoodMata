import React from 'react'
import Image from 'next/image'
import captain from '../public/img/captain.jpeg'
import shoprite from '../public/img/shoprite.png'
import crunchies from '../public/img/crunchies.jpeg'
import tantalizer from '../public/img/tantalizer.jpg'
import fried from '../public/img/fried.png' 
import ice from '../public/img/ice cream.png' 
import spag from '../public/img/spag.png' 
import french from '../public/img/french.png' 
import fried2 from '../public/img/Rectangle 357 (3).png'
import spag2 from '../public/img/Rectangle 358 (2).png'



const Part3 = () => {
  return (
    <div>
        <div className='desktop container size-3'>
            <div className='text-center'>
                <h2 className='head-text-3 pt-5 pb-5'>Featured Restuarants</h2>
            </div>
            <div className='container'>
                <div className='row'>
                    <div className='col-3 pt-3'>
                        <div className='featured'>
                            <div className='text-center'>
                                <Image src={captain} width={150} height={100} alt='' ></Image>
                                <Image src ={fried} width={200} height={190} alt='' className='second-image pt-5'></Image>
                                <h3 className='image-text pt-2'>100</h3>
                            </div>
                            <div className='d-flex justify-content-center ps-2 pt-5'>
                                <h3 className='open text-center pt-2'>Open Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='featured'>
                            <div className='text-center'>
                                <Image src={crunchies} width={150} height={160} alt='' ></Image>
                                <Image src ={spag} width={265} height={165} alt='spag' className='second-image-1'></Image>
                            </div>
                            <div className='text-center star-text'>
                                <h3 className='image-text-1 ps-3'>50</h3>
                            </div>
                            <div className='d-flex justify-content-center ps-2 pt-5'>
                                <h3 className='open text-center pt-2'>Open Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3 pt-3'>
                        <div className='featured'>
                            <div className='text-center'>
                                <Image src={tantalizer} width={110} height={110} alt='' ></Image>
                                <Image src ={ice} width={205} height={200} alt='spag' className='second-image pt-4'></Image>
                            </div>
                            <div className='text-center star-text'>
                                <h3 className='image-text-1 ps-3'>30</h3>
                            </div>
                            <div className='d-flex justify-content-center ps-2 pt-5'>
                                <h3 className='open text-center pt-2'>Open Now</h3>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='featured'>
                            <div className='text-center pb-1'>
                                <Image src={shoprite} width={120} height={110} alt=''></Image>
                            </div>
                            <div className='text-center pt-1'>
                                <Image src ={french} width={70} height={110} alt='spag' className='second-image pt-5 mb-5'></Image>
                                <h3 className='image-text-2 ps-3 pt-2 combine'>50</h3>
                            </div>
                            <div className='d-flex justify-content-center ps-2 pt-5'>
                                <h3 className='open text-center pt-2'>Open Now</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobile'>
            <div className='text-center'>
                <div className=''>
                    <h2 className='head-text-3-mob pt-5 pb-5'>Featured Restuarants</h2>     
                </div>
                <div className='d-flex justify-content-center'>
                    <div className='row justify-content-evenly'>
                        <div className='col-4'>
                            <div className='bg-3-mobile'>
                                <div className=''>
                                    <div className='text-center'>
                                        <Image src={captain} width={90} height={60} alt='' ></Image>
                                        <Image src ={fried} width={1000} height={1000} alt='' className='second-image-mob pt-2'></Image>
                                    </div>
                                    <div className='d-flex justify-content-center ps-2 pt-5'>
                                        <h3 className='image-text-mob pt-3 ps-5'>100</h3>
                                    </div>
                                    <div className='text-center button-mob'>
                                        <button className='open-mob text-center' type='button'>Open Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 button-mob pt-2'>
                            <div className='bg-3-mobile'>
                                <div className=''>
                                    <div className='text-center'>
                                        <Image src={crunchies} width={100} height={110} alt='' ></Image>
                                        <Image src ={spag} width={1600} height={1600} alt='' className='second-image-mob button-mob pt-3'></Image>
                                    </div>
                                    <div className='d-flex justify-content-center ps-2 pt-4'>
                                        <h3 className='image-text-mob pt-3 ps-5'>50</h3>
                                    </div>
                                    <div className='text-center button-mob'>
                                        <button className='open-mob text-center' type='button'>Open Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='container pt-5 pb-3'>
                    <div className='row justify-content-evenly'>
                        <div className='col-4'>
                            <div className='bg-3-mobile'>
                                <div className=''>
                                    <div className='text-center'>
                                        <Image src={tantalizer} width={90} height={60} alt='' ></Image>
                                        <Image src ={ice} width={1000} height={1000} alt='' className='second-image-mob '></Image>
                                    </div>
                                    <div className='d-flex justify-content-center ps-2 mt-2 pt-5'>
                                        <h3 className='image-text-mob pt-3 ps-5'>30</h3>
                                    </div>
                                    <div className='text-center button-mob'>
                                        <button className='open-mob text-center' type='button'>Open Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-4 button-mob pt-2'>
                            <div className='bg-3-mobile'>
                                <div className=''>
                                    <div className='text-center pb-5 mb-4'>
                                        <Image src={shoprite} width={90} height={90} alt='' ></Image>
                                        <Image src ={french} width={50} height={50} alt='' className='second-image-mo'></Image>
                                    </div>
                                    <div className='d-flex justify-content-center ps-2 pt-4'>
                                        <h3 className='image-text-mob pt-3 ps-5'>50</h3>
                                    </div>
                                    <div className='text-center button-mob '>
                                        <button className='open-mob text-center' type='button'>Open Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Part3