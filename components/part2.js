import Image from 'next/image'
import React from 'react'
import location from '../public/img/Map Marker.png'
import order from '../public/img/Group 44.png'
import pay from '../public/img/Group 46.png'
import meal from '../public/img/Group 47.png'
import pasta from '../public/img/pasta_2.png'
import stars from '../public/img/Group 50.png'
import egusi from '../public/img/egusi.png'
import SHAWARMA from '../public/img/SHAWARMA.png'
import french from '../public/img/french.png'





const Part2 = () => {
  return (
    <div>
        <div className='desktop'>
            <div className='text-center'>
                <h3 className='head-text-2 head-text-2-mob pt-5'>How it Works</h3>
            </div>
            <div className='bd-2'>
                <div className='container d-flex justify-content-center'>
                    <div className='row pt-5 pb-5'>
                        <div className='col-lg-3 text-center'>
                            <div className=''>
                                <Image src={location} width={70} height={90} alt='img' ></Image>
                                <h3 className='head2-text-2 text-center'>Select location</h3>
                                <h3 className='text-center sub-text-2 pt-2'>Choose the location where your food will be delivered.</h3>
                            </div>
                        </div>
                        <div className='col-lg-3 text-center'>
                            <Image src={order} width={70} height={90} alt='img' ></Image>
                            <h3 className='head2-text-2 text-center'>Choose order</h3>
                            <h3 className='text-center sub-text-2 pt-2'>Check over hundreds of menus to pick your favorite food</h3>
                        </div>
                        <div className='col-lg-3 text-center'>
                            <Image src={pay} width={70} height={90} alt='img' ></Image>
                            <h3 className='head2-text-2 text-center'>Pay advanced</h3>
                            <h3 className='text-center sub-text-2 pt-2'>Its quick, safe and simple. Select several methods of payment</h3>
                        </div>
                        <div className='col-lg-3 text-center'>
                            <Image src={meal} width={70} height={90} alt='img' ></Image>
                            <h3 className='head2-text-2 text-center'>Enjoy meals</h3>
                            <h3 className='text-center sub-text-2 pt-2'>Food is made and delivered directly to your home.</h3>
                        </div>
                   </div>
                </div>
                <div className='text-center'>
                    <h3 className='head-text2-2 pt-5'>Popular dishes</h3>
                </div>
                <div className='container d-flex justify-content-center pt-5 pb-3'>
                    <div className='row'>
                        <div className='col-3 text-center dish me-5'>
                            <div className=''>
                                <Image src={pasta} width={180} height={120}  alt='img' ></Image>
                                <h3 className='dish-text text-center pb-3'>Pasta</h3>
                                <Image src={stars} alt='stars' className=''></Image>
                                <h3 className='text-center dish-sub-text pt-2'> Pasta is a type of food typically<br/> made from unleavened dough</h3>
                            </div>
                            <div className='d-flex justify-content-between pt-4'>
                                <div className='text-black me-1'>
                                    <h3 className='price-text'>₦ 1,500</h3>
                                </div>
                                <div className='text-center ml-2'>
                                    <button className="btn add-btn text-white" type="submit">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 text-center dish me-3'>
                            <div className=''>
                                <Image src={egusi} width={180} height={110}  alt='img' ></Image>
                                <h3 className='dish-text text-center pb-3 pt-2'>Egusi Soup</h3>
                                <Image src={stars} alt='stars' className=''></Image>
                                <h3 className='text-center dish-sub-text pt-2'>Egusi soup is made from Egusi melon<br/> seeds and is choleterol free</h3>
                            </div>
                            <div className='d-flex justify-content-between pt-4'>
                                <div className='text-black me-1'>
                                    <h3 className='price-text'>₦ 3,500</h3>
                                </div>
                                <div className='text-center ml-2'>
                                    <button className="btn add-btn text-white" type="submit">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 text-center dish ps-3'>
                            <div className=''>
                                <Image src={SHAWARMA} width={180} height={120}  alt='img' ></Image>
                                <h3 className='dish-text text-center pb-3'>Shawarma</h3>
                                <Image src={stars} alt='stars' className=''></Image>
                                <h3 className='text-center dish-sub-text pt-2'> Shawarma is all about the delicious<br/>sauces that accompany the name</h3>
                            </div>
                            <div className='d-flex justify-content-between pt-4'>
                                <div className='text-black me-1'>
                                    <h3 className='price-text'>₦ 2,000</h3>
                                </div>
                                <div className='text-center ml-2'>
                                    <button className="btn add-btn text-white" type="submit">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-3 text-center dish ps-5'>
                            <div className=''>
                                <Image src={french} width={130} height={120}  alt='img' ></Image>
                                <h3 className='dish-text text-center pb-3'>French</h3>
                                <Image src={stars} alt='stars' className=''></Image>
                                <h3 className='text-center dish-sub-text pt-2'>French Fries contain more acrylamides<br/>than just about any other food</h3>
                            </div>
                            <div className='d-flex justify-content-between pt-4'>
                                <div className='text-black me-1'>
                                    <h3 className='price-text'>₦ 2,000</h3>
                                </div>
                                <div className='text-center ml-2'>
                                    <button className="btn add-btn text-white" type="submit">Add To Cart</button>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

            </div>
        </div>
        <div className='bg-2-mobile mobile'>
            <div className='text-center'>
                <h3 className='head-text-2-mob pt-4 pb-5'>How it Works</h3>
            </div>
            <div className=''>
                <div className=''>
                    <div className='row justify-content-around text-center'>
                        <div className='bd-how col-4'>
                            <div className='pt-3'>
                                <Image src={location} width={40} height={50} alt='img' ></Image>
                                <h3 className='head2-text-2-mob'>Select location</h3>
                                <h3 className='sub-text-2-mob pt-2'>Choose the location where your food will be delivered.</h3>
                            </div>
                        </div>
                        <div className='bd-how col-4'>
                            <div className='pt-3'>
                                <Image src={order} width={40} height={50} alt='img' ></Image>
                                <h3 className='head2-text-2-mob text-center'>Choose order</h3>
                                <h3 className='text-center sub-text-2-mob pt-2'>Check over hundreds of menus to pick your favorite food</h3>
                            </div>
                        </div>
                    </div>
                    <div className='row justify-content-around text-center pt-5'>
                        <div className='bd-how col-4'>
                            <div className='pt-3'>
                                <Image src={pay} width={40} height={50} alt='img' ></Image>
                                <h3 className='head2-text-2-mob'>Pay advanced</h3>
                                <h3 className='sub-text-2-mob pt-2'>Its quick, safe, and simple. Select several methods of payment.</h3>
                            </div>
                        </div>
                        <div className='bd-how col-4'>
                            <div className='pt-3'>
                                <Image src={meal} width={40} height={50} alt='img' ></Image>
                                <h3 className='head2-text-2-mob text-center'>Enjoy meals</h3>
                                <h3 className='text-center sub-text-2-mob pt-2'>Food is made and delivered directly to your home.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Part2