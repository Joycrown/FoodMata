import React from 'react'
import Image from 'next/Image'
import img1 from '../public/img/Ellipse 8.png'
import img2 from '../public/img/Ellipse 9.png'
import img3 from '../public/img/Ellipse 10.png'
import img4 from '../public/img/Ellipse 11.png'
import img5 from '../public/img/Group 33816.png'


const Part5 = () => {
  return (
    <div>
        <div className='desktop'>
            <div className=''>
                <div className='text-center pt-5'>
                    <div className=''>
                        <h3 className='head-text-5 '>Search by Food</h3>
                    </div>
                    <div className='d-flex justify-content-end'>
                        <div className='view-5'>
                            <button type="button" class="btn view5-btn text-center text-white">view all</button> 
                        </div>
                    </div>
                </div>
            </div>
            <div className='container text-center pt-5 pb-3'>
                <div className='row'>
                    <div className='col-3'>
                        <Image src={img1} width={210} height={210} alt=''className=''></Image>
                        <h3 className='tag-text text-center pt-3'>French Fries</h3>
                    </div>
                    <div className='col-3'>
                        <Image src={img2} width={210} height={210} alt=''className=''></Image>
                        <h3 className='tag-text text-center ps-3 pt-3'>Pasta</h3>
                    </div>
                    <div className='col-3'>
                        <Image src={img3} width={210} height={210} alt=''className=''></Image>
                        <h3 className='tag-text text-center ps-3 pt-3'>Burger</h3>
                    </div>
                    <div className='col-3'>
                        <Image src={img4} width={210} height={210} alt=''className=''></Image>
                        <h3 className='tag-text text-center ps-3 pt-3'>Chicken</h3>
                    </div>
                </div>
            </div>
            <div className='text-center'>
                <div className='head2-text-5 pt-5'>
                    <h3 className=''>What Our Customer Says?</h3>
                </div>
            </div>
            <div className='pb-5 ps-5'>
                <div className='container pt-5'>
                    <div className='row'>
                        <div className='col-3 customer-card pt-5'>
                            <div className='d-flex container'>
                                <div className=''>
                                    <h3 className='sub-text-5'>Lawrence</h3>
                                    <h3 className='sub2-text-5'>Student</h3>
                                </div>
                                <div className='ps-5'>
                                    <Image src={img5} alt='' className='' ></Image>
                                </div>
                            </div>
                            <div className='sub3-text-5 pt-3 ps-4'>
                                <h3 className=''>Amazing  customer service, now I can<br/> schedule foods for my kid</h3>
                            </div>
                        </div>
                        <div className='col-3 customer-card pt-5'>
                            <div className='d-flex container'>
                                <div className=''>
                                    <h3 className='sub-text-5'>Benedicta</h3>
                                    <h3 className='sub2-text-5'>Entrepreneur</h3>
                                </div>
                                <div className='ps-5'>
                                    <Image src={img5} alt='' className='' ></Image>
                                </div>
                            </div>
                            <div className='sub3-text-5 pt-3 ps-4'>
                                <h3 className=''>Amazing Food recommendation</h3>
                            </div>
                        </div>
                        <div className='col-3 customer-card pt-5'>
                            <div className='d-flex container'>
                                <div className=''>
                                    <h3 className='sub-text-5'>James</h3>
                                    <h3 className='sub2-text-5'>Student</h3>
                                </div>
                                <div className='ps-5'>
                                    <Image src={img5} alt='' className='' ></Image>
                                </div>
                            </div>
                            <div className='sub3-text-5 pt-3 ps-4'>
                                <h3 className=''>Amazing Food and services, got my <br/>food delivered less than 30 minutes</h3>
                            </div>
                        </div>
                        <div className='col-3 customer-card pt-5'>
                            <div className='d-flex container'>
                                <div className=''>
                                    <h3 className='sub-text-5'>Samuel</h3>
                                    <h3 className='sub2-text-5'>Artist</h3>
                                </div>
                                <div className='ps-5'>
                                    <Image src={img5} alt='' className='' ></Image>
                                </div>
                            </div>
                            <div className='sub3-text-5 pt-3 ps-4'>
                                <h3 className=''>Great serices and got what I <br/>ordered.</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='mobile pt-5'>
            <div className='container'>
                <div className='d-flex justify-content-around'>
                    <div className='text-center'>
                        <h3 className='head-text-5-mob'>Search by Food</h3>
                    </div>
                    <div className=''>
                        <button type="button" class="btn view5-btn-mob text-center">View all</button> 
                    </div>
                </div>
                <div className='container text-center pt-5'>
                    <div className='row'>
                        <div className='col-4'>
                            <Image src={img1} alt='' className='' width={100} height={100}></Image>
                            <h3 className='tag-text-mob text-center pt-3'>French Fries</h3>
                        </div>
                        <div className='col-4'>
                            <Image src={img4} alt='' className='' width={100} height={100}></Image>
                            <h3 className='tag-text-mob text-center pt-3'>Chicken</h3>
                        </div>
                        <div className='col-4'>
                            <Image src={img3} alt='' className='' width={100} height={100}></Image>
                            <h3 className='tag-text-mob text-center pt-3'>Burger</h3>
                        </div>
                    </div>
                </div>
                <div className='text-center pt-5'>
                    <h3 className='head2-text-5-mob'>What Our Customer Says?</h3>
                </div>
                <div className='pt-5 pb-5'>
                    <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div className='d-flex justify-content-center'>
                                    <div className='customer-card-mob'>
                                        <div className='d-flex container'>
                                            <div className=''>
                                                <h3 className='sub-text-5-mob'>Lawrence</h3>
                                                <h3 className='sub2-text-5-mob'>Student</h3>
                                            </div>
                                            <div className='ps-5'>
                                                <Image src={img5} alt='' className='' ></Image>
                                            </div>
                                        </div>
                                        <div className='sub3-text-5-mob pt-3 ps-2'>
                                            <h3 className=''>Amazing  customer service, now I can<br/> schedule foods for my kid</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div className='d-flex justify-content-center'>
                                    <div className='customer-card-mob'>
                                        <div className='d-flex container'>
                                            <div className=''>
                                                <h3 className='sub-text-5-mob'>Benedicta</h3>
                                                <h3 className='sub2-text-5-mob'>Entrepreneur</h3>
                                            </div>
                                            <div className='ps-5'>
                                                <Image src={img5} alt='' className='' ></Image>
                                            </div>
                                        </div>
                                        <div className='sub3-text-5-mob pt-3 ps-2'>
                                            <h3 className=''>Amazing Food recommendation</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div className='d-flex justify-content-center'>
                                    <div className='customer-card-mob'>
                                        <div className='d-flex container'>
                                            <div className=''>
                                                <h3 className='sub-text-5-mob'>James</h3>
                                                <h3 className='sub2-text-5-mob'>Student</h3>
                                            </div>
                                            <div className='ps-5'>
                                                <Image src={img5} alt='' className='' ></Image>
                                            </div>
                                        </div>
                                        <div className='sub3-text-5-mob pt-3 ps-2'>
                                            <h3 className=''>Amazing Food and services, got my <br/>food delivered less than 30 minutes</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item ">
                                <div className='d-flex justify-content-center'>
                                    <div className='customer-card-mob'>
                                        <div className='d-flex container'>
                                            <div className=''>
                                                <h3 className='sub-text-5-mob'>Samuel</h3>
                                                <h3 className='sub2-text-5-mob'>Artistcut</h3>
                                            </div>
                                            <div className='ps-5'>
                                                <Image src={img5} alt='' className='' ></Image>
                                            </div>
                                        </div>
                                        <div className='sub3-text-5-mob pt-3 ps-2'>
                                            <h3 className=''>Great serices and got what I <br/>ordered.</h3>
                                        </div>
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

export default Part5