import React from 'react'
import Image from 'next/image'
import bike from '../public/img/Group 33848.png'
import man from '../public/img/Group 33864.png'

const Part4 = () => {
  return (
    <div>
      <div className='desktop'>
        <div className='bg-4 pb-5'>
          <div className='container'>
            <div className='text-center'>
              <h3 className='head-text-4 pt-5 pb-5'>Trending Offers!!!</h3>
            </div>
            <div className='row justify-content-evenly'>
              <div className='col-4'>
                <div className='bg-4-1'>
                  <div className='container d-flex justify-content-evenly'>
                    <div className=''>
                      <div className='location-png'>
                        <div className='bg-4-2'>
                          <div className=' pt-3 mt-5 ps-3 pb-3 pe-3'>
                            <h3 className='sub-text-4'>Free</h3>
                            <h3 className='sub-text-4-1'>delivery</h3>
                            <h3 className='sub-text-4-2 pt-1'>Akure & Abeokuta</h3>
                          </div>
                        </div>
                      <div className='bg-4-2-1 mt-5'>
                        <h3 className='text-center sub-text-4-2 pt-3 pb-2'>10% Off</h3>
                      </div>
                      </div>
                    </div>
                    <div className='pt-5 mt-2 ps-5'>
                      <div className=''>
                        <h3 className='text-white text-center sub-text2-4'>Food World </h3>
                        <h3 className='text-white sub-text2-4 ps-3'>Logistics company</h3>
                      </div>
                      <div className='pt-5'>
                        <Image src={bike} alt='' className=''></Image>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='bg2-4-1'>
                  <div className='container d-flex justify-content-evenly'>
                    <div className='pt-5 pb-4 pe-3'>
                      <Image src={man} alt='' width={140} height={180} className=''></Image>
                    </div>
                    <div className='pt-5 mt-5'>
                      <h3 className='sub-text3-4'>Hire Your<br/>Best Chef!</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mobile'>
        <div className='text-center'>
          <div className='bg-4'>
            <div className=''>
              <h3 className='head-text-4-mob pt-5'> Trending Offers!!!</h3>
            </div>
            <div className='pt-5'>
              <div id="carouselExampleSlidesOnly" classNmae="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className='d-flex justify-content-center'>
                      <div className='bg-4-1-mob'>
                        <div className=' d-flex justify-content-center pt-3 pb-5'>
                          <div className='bg-4-2-mob pt-3 pb-4 mt-5'>
                            <h3 className='sub-text-4-mob pe-5 me-3'>Free</h3>
                            <h3 className='sub-text-4-1-mob pe-5 me-3'>delivery</h3>
                            <h3 className='sub-text-4-2-mob ps-2 pt-1'>Akure & Abeokuta</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item ">
                    <div className='d-flex justify-content-center'>
                      <div className='bg2-4-1-mob'>
                        <div className=' d-flex justify-content-center pt-3 pb-5'>
                          <div className='bg2-4-2-mob pt-3 pb-4 mt-5'>
                            <h3 className='sub2-text-4-mob'>Hire Your <br/> Best Chef</h3>
                            {/* <h3 className='sub-text-4-1-mob pe-5 me-3'>delivery</h3>
                            <h3 className='sub-text-4-2-mob ps-2 pt-1'>Akure & Abeokuta</h3> */}
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
      </div>
    </div>
  )
}

export default Part4