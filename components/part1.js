import React from 'react'
import Image from 'next/Image'
import headimage from '../public/img/g10.png'
import bike from '../public/img/Icon (1).png'
import restuarant from '../public/img/Vector (6).png'

const Part1 = () => {
  return (
    <div className='body1'>
        <div className='desktop'>
            <div className='d-flex justify-content-around'>
                <div className='pt-5'>
                    <div className=''>
                        <h3 className='text-orange head-text-1'>Are you starving<br/> and desire a good treat?</h3>
                        <h3 className='sub-head-1 pt-4'>Within a few clicks, find meals that are accesible near you.</h3>
                        <h3 className='sub-head-1'>Search for your favorite food or restuarants in your area.</h3>
                    </div>
                    <div className='sub-body pt-2'>
                        <div className='container pt-5 ps-5'>
                            <div className='d-flex'>
                                <div className='delivery d-flex'>
                                    <div className=''>
                                        <Image src={bike} alt='' ></Image>
                                    </div>
                                    <div className='ps-2'>
                                        <h3 className='text-orange delivery-text'>Delivery</h3>  
                                    </div>
                                </div>
                                <div className='d-flex ps-5'>
                                    <div className=''>
                                        <Image src={restuarant} alt='' width={15} height={15} ></Image>
                                    </div>
                                    <div className='ps-2'>
                                        <h3 className='delivery-text'>Restuarant</h3>  
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex pt-5'>
                                <select className="form-select" aria-label="Default select example" id='location'>
                                    <option selected>Akure</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div className='wrapper'>
                                    <form className="ps-5">
                                        <div className='search-box'>
                                            <input className="form-control me-2 inpu" type="search" placeholder="Search food" id='search2' aria-label="Search"/>
                                        </div>
                                        <div className=''>
                                            <button type="button" className="btn search-btn text-white">Search</button> 
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pt-5 head-image-1'>
                    <Image src={headimage} alt='' width={500} height={500} className = ''></Image>
                </div>
            </div>
        </div>
        
        {/* MOBILE */}
        <div className='mobile'>
            <div className='text-center'>
                <div className='pt-5'>
                    <Image src={headimage} alt='' width={250} height={260} className = ''></Image>
                </div>
                <div className='pb-5'>
                    <h3 className='text-orange head-text-1-mob'>Are you starving<br/> and desire a good treat?</h3>
                    <h3 className='sub-head-1-mob pt-4'>Within a few clicks, find meals that are accesible near you.</h3>
                    <h3 className='sub-head-1-mob pt-2'>Search for your favorite food or restuarants in your area.</h3>
                </div>
                <div className='wrapper-mob'>
                    <div className=''>
                        <select className="form-select" aria-label="Default select example" id='locationmob'>
                            <option selected>Akure</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </select>
                    </div>
                    <div className='pt-5'>
                        <button type="button" className="btn search-btn-mob text-white">Search for food</button> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Part1