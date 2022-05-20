import Image from 'next/image'
import React from 'react'
import styles from '../../styles/Logistics.module.css'
import pic from '../../public/img/Ellipse 260.png'
import pic1 from '../../public/img/Ellipse 257.png'
import pic2 from '../../public/img/Ellipse 259.png'

const Sidebar2 = () => {
  return (
      <>
        <div className={styles.headcontainer2}>
            <div className={`${styles.activity} ps-3`}>
                <div className={`${styles.log} pt-4`}>
                    <h2 className='pb-4'>Activity Log</h2>
                    <h2 className={`${styles.line2}`}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex justify-between`}>
                    <div className=''>
                        <Image src={pic1} width={35} height={35} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} `}>
                        <h2>John Bull</h2>
                        <h3>Accepted a request</h3>
                    </div>
                    <div className={`${styles.logtime} pe-4`}>
                        <h3>7 mins ago </h3>
                    </div>
                </div>
                <div className='pb-2'>
                    <h2 className={`${styles.line2} `}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex justify-between`}>
                    <div className=''>
                        <Image src={pic} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} ps-1`}>
                        <h2>Praise Mata</h2>
                        <h3>Delivery Completed</h3>
                    </div>
                    <div className={`${styles.logtime} pe-4`}>
                        <h3>30 mins ago </h3>
                    </div>
                </div>
                <div className='pb-2'>
                    <h2 className={`${styles.line2} `}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex justify-between`}>
                    <div className=''>
                        <Image src={pic2} width={30} height={30} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} ps-2`}>
                        <h2>James Garner</h2>
                        <h3>Arrived Delivery Location</h3>
                    </div>
                    <div className={`${styles.logtime} pe-4`}>
                        <h3>2 hrs ago </h3>
                    </div>
                </div>
                <div className='pb-2'>
                    <h2 className={`${styles.line2} `}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex justify-between`}>
                    <div className=''>
                        <Image src={pic} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} `}>
                        <h2>Praise Mata</h2>
                        <h3>Picked up an item</h3>
                    </div>
                    <div className={`${styles.logtime} pe-4`}>
                        <h3>30 mins ago </h3>
                    </div>
                </div>
                <div className='pb-2'>
                    <h2 className={`${styles.line2} `}></h2>
                </div>
            </div>
        </div>
        <div className={styles.headcontainer3}>
            <div className={`${styles.riders} ps-3 `}>
                <div className={`${styles.log} pt-4 `}>
                    <h2 className='pb-4'>Riders Status</h2>
                    <h2 className={`${styles.line2}`}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex`}>
                    <div className=''>
                    <Image src={pic1} width={35} height={35} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} ps-4`}>
                        <h2>John Bull</h2>
                        <h3>Online</h3>
                    </div>
                       
                </div>
                <div className=''>
                    <h2 className={`${styles.line2} `}></h2>
                </div>
                <div className={`${styles.logdetails} pt-4 pb-2 d-flex`}>
                    <div className=''>
                        <Image src={pic} alt='image'></Image>
                    </div>
                    <div className={`${styles.logdetails} ps-4 `}>
                        <h2>Praise Mata</h2>
                        <h3>Last seen  30 mins ago</h3>
                    </div>
                    {/* <div className={`${styles.logtime} pe-4`}>
                        <h3>30 mins ago </h3>
                    </div> */}
                </div>
            </div>
        </div>
      </> 
  )
}

export default Sidebar2