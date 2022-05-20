import React from 'react'
import styles from '../../styles/Logistics.module.css'
import logo from '../../public/img/FoodMata_Logo.png'
import Image from 'next/image';
import { RiDashboardFill } from "react-icons/ri";
import { IoMdFlower } from "react-icons/io";
import { IoIosPeople } from "react-icons/io";
import { IoLogOutOutline } from "react-icons/io5";
import { FaHandHolding } from "react-icons/fa"

const Sidebar = () => {
  return (
    <div className ={styles.navcontainer}>
      <div className={styles.logo}>
        <Image src={logo} alt='logo'></Image>
      </div>
      <div className={styles.wrapper}>
        <ul>
          <li>
            <RiDashboardFill style={{width:"25px", cursor:"pointer"}}/>
            <a  href='#'>Dashboard</a>
          </li>
          <li>
            <FaHandHolding style={{width:"25px", cursor:"pointer"}}/>
            <a href='#' className='pt-1'>Service Fee</a>
          </li>
          <li>
            <IoIosPeople style={{width:"25px", cursor:"pointer"}}/>
            <a href='#'>Dispatchers</a>
          </li>
          <li>
            <IoMdFlower style={{width:"25px", cursor:"pointer"}}/>
            <a href='#'>Settings</a>
          </li>
          <li>
            <IoLogOutOutline style={{width:"25px", cursor:"pointer"}}/>
            <a href='#'>Log Out</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default  Sidebar