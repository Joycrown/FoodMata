import React, {useState} from 'react'
import styles from '../../styles/Logistics.module.css'
import { RiSearchLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { BsArrowDown } from "react-icons/bs";
import { BsArrowUp } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";
import { AiOutlineExpand } from "react-icons/ai";
import pic from '../../public/img/Ellipse 260.png'
import Image from 'next/image';
import Sidebar2 from './sidebar2'


// const [currentLink, setCurrentLink] = useState()

const Dashboard = () => {


const [withdrawalView, setWithdrawalView] = useState(styles.noView)
const [otherView, setOtherView] = useState(styles.view)

const withdrawalClick =() =>{
    setWithdrawalView(styles.view)
    setOtherView(styles.noView)
}
const otherClick =() =>{
    setWithdrawalView(styles.noView)
    setOtherView(styles.view)
}

const [allDisplay, setAllDisplay] = useState(styles.underline)
const [pendingDisplay, setPendingDisplay] = useState("")
const [activeDisplay, setActiveDisplay] = useState("")
const [completedDisplay, setCompletedDisplay] = useState("")

const [allView, setAllView] = useState(styles.view)
const [pendingView, setPendingView] = useState(styles.noView)
const [activeView, setActiveView] = useState(styles.noView)
const [completedView, setCompletedView] = useState(styles.noView)
const[buttonView, setButtonView] = useState(styles.view)

const allClick =() =>{
    setAllDisplay(styles.underline);
    setPendingDisplay("");
    setActiveDisplay("");
    setCompletedDisplay("")
    setAllView(styles.view)
    setPendingView(styles.noView)
    setActiveView(styles.noView)
    setCompletedView(styles.noView)
   
}
const pendingClick =() =>{
    setAllDisplay("");
    setPendingDisplay(styles.underline);
    setActiveDisplay("");
    setCompletedDisplay("")
    setAllView(styles.noView)
    setPendingView(styles.view)
    setActiveView(styles.noView)
    setCompletedView(styles.noView)
    
}
const activeClick =() =>{
    setAllDisplay("");
    setPendingDisplay("");
    setActiveDisplay(styles.underline);
    setCompletedDisplay("")
    setAllView(styles.noView)
    setPendingView(styles.noView)
    setActiveView(styles.view)
    setCompletedView(styles.noView)
    
}
const completedClick =() =>{
    setAllDisplay("");
    setPendingDisplay("");
    setActiveDisplay("");
    setCompletedDisplay(styles.underline)
    setAllView(styles.noView)
    setPendingView(styles.noView)
    setActiveView(styles.noView)
    setCompletedView(styles.view)
    
}


const [dropdownItem, setDropdownItem] = useState(false)
const [dropdownItem2, setDropdownItem2] = useState(false)
const [dropdownItem3, setDropdownItem3] = useState(false)
const [dropdownItem4, setDropdownItem4] = useState(false)
const [toggle, setToggle] = useState(false)
const [toggle2, setToggle2] = useState(false)
const [toggle3, setToggle3] = useState(false)
const [toggle4, setToggle4] = useState(false)

const handleClick =() =>{
    setDropdownItem(!dropdownItem)
}
const handleClick2 =() =>{
    setDropdownItem2(!dropdownItem2)
}
const handleClick3 =() =>{
    setDropdownItem3(!dropdownItem3)
}
const handleClick4 =() =>{
    setDropdownItem4(!dropdownItem4)
}
const handleToggle =() =>{
    setToggle(!toggle)
    setDropdownItem(!dropdownItem)
    setButtonView(!buttonView)
}
const handleToggle2 =() =>{
    setToggle2(!toggle2)
    setDropdownItem2(!dropdownItem2)
    setButtonView(!buttonView)
}
const handleToggle3 =() =>{
    setToggle3(!toggle3)
    setDropdownItem3(!dropdownItem3)
    setButtonView(!buttonView)
    
}
const handleToggle4 =() =>{
    setToggle4(!toggle4)
    setDropdownItem4(!dropdownItem4)
    setButtonView(!buttonView)
    
}
  return (
    <div className={styles.body}>
        <div className={`${styles.headcontainer}`}>
            <div className={`${styles.headwrapper}`}>
                <div className={`${styles.title}`}>
                    <div className ={`${styles.search}`}>
                        <RiSearchLine style={{width:"25px", color:' #3A3A3A',paddingTop:'2px'}}/>
                        <h3 className=''> Search</h3>
                        <IoPerson style={{marginLeft:"32rem"}}/>
                        <h3 className='ps-3'>ABC Logistics</h3>
                        < IoMdNotifications style={{marginLeft:"2rem"}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles.content} pt-5`}>
            <div className={`${styles.heading} `}>
                <h2 className='font-main'>Logistics Dashboard</h2>
                <h3 className='font-main'>Welcome back, ABC logistics</h3>
            </div>
            <div className=' d-flex justify-content-between pt-4'>
                <div className={`${styles.account} `}>
                    <h3 className=' ps-4 pe-3 pb-3 pt-1'>Account <br/>Balance</h3>
                    <h2 className={`${styles.line}`}></h2>
                    <h2 className='ps-3 pe-4 pb-3 pt-2'>N 130, 500</h2>
                </div>
                <div className='' style={{display: buttonView ? 'block' : 'none'}}>
                    <div className={` ${styles.button}  d-flex`} >
                        <div className ={`${styles.btn} d-flex ps-2 text-white`}>
                            < BsArrowDown style={{color: '#ffff', fontSize:"1.1rem",marginTop:"0.7rem", marginRight:"1rem"}}/>
                            <button type='button' onClick={otherClick} classname='btn text-white font-main'>Deposit</button>
                        </div>
                        <div className ={`${styles.btn2} d-flex ps-2 text-white`}>
                            < BsArrowUp style={{color: '#ffff', fontSize:"1.1rem",marginTop:"0.7rem",marginRight:"1rem"}}/>
                            <button type='button' onClick={withdrawalClick} classname='btn '>Withdraw</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${otherView}`}>
                <div className='d-flex pt-5'>
                    <div className={`${styles.month} d-flex `}>
                        <h1 className='ps-3 pe-3 pt-2 pb-1 text-white'>This Month</h1>
                        <h3 className='ps-3 pe-3 pt-2 pb-1'>This Week</h3>
                        <h2 className={`${styles.line}`}></h2>
                        <h3 className='ps-3 pe-3 pt-2 pb-1'>Today</h3>
                    </div>
                    <div className={`${styles.calender} d-flex ps-3 pe-3 pt-2 pb-1`}>
                        <FaCalendar/>
                        <h3 className='ps-2'>Select date</h3>
                    </div>
                </div>
                <div className={`${styles.requested} pt-5 d-flex justify-between`}>
                    <div className={`${styles.total} ps-3 pb-2 pt-2`}>
                        <h1 className=' pt-1'>Total request</h1>
                        <h2 className=' pt-1'> 1, 500</h2>
                        <div className={`${styles.subtotal} d-flex `}>
                            < BsArrowUp style={{color:"#00AA25", width:"13px"}}/>
                            <h2 className='ps-1'>11.5%</h2>
                            <h3 className='ps-2 pe-3'>Last month</h3>
                        </div>
                    </div>
                    <div className={`${styles.completed} ps-3 pb-2 pt-2`}>
                        <h1 className=' pt-1 pe-2'>Completed request</h1>
                        <h2 className=' pt-1'> 1, 400</h2>
                        <div className={`${styles.subcompleted} d-flex`}>
                            < BsArrowUp style={{color:"#00AA25", width:"13px"}}/>
                            <h2 className='ps-1'>11.5%</h2>
                            <h3 className='ps-2 pe-3'>Last month</h3>
                        </div>
                    </div>
                    <div className={`${styles.declined} ps-3 pb-2 pt-2`}>
                        <h1 className=' pt-1 pe-2'>Completed request</h1>
                        <h2 className=' pt-1'> 100</h2>
                        <div className={`${styles.subdeclined} d-flex`}>
                            <  BsArrowDown style={{color:"#FF0000", width:"13px"}}/>
                            <h2 className='ps-1'>2.5%</h2>
                            <h3 className='ps-2 pe-3'>Last month</h3>
                        </div>
                    </div>
                </div>
                < div className='pt-5'>
                    <div className={`${styles.delivery}`}>
                        <h2>Recent Deliveries</h2>
                    </div>
                    <div className={`${styles.orders} d-flex justify-between  pt-3`}>
                        <h3 className={`${allDisplay}`} onClick={allClick}>All</h3>
                        <h3 className={`${pendingDisplay}`} onClick={pendingClick}>Pending Orders</h3>
                        <h3 className={`${activeDisplay}`} onClick={activeClick}>Active Orders</h3>
                        <h3 className={`${completedDisplay}`} onClick={completedClick}>Completed Orders</h3>
                    </div>
                    <div className=''>
                        <h2 className={`${styles.border}`}></h2>
                    </div>
                    {/* ALL SECTION */}
                    <div className={`${allView} ${styles.all}`} >
                        <div className={`${styles.card} d-flex justify-between pt-4`}>
                            <h3>ORDER STATUS</h3>
                            <h3>RIDER</h3>
                            <h3>PICKUP DETAILS</h3>
                            <h3>DESTINATION DETAILS </h3>
                            <h3>DATE AND TIME</h3>
                        </div>
                        <div className=''>
                            <div className='pt-3'>
                                <div className={`${styles.details} pt-2 pb-3`}>
                                    <div className={`${styles.info} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>completed</h1>
                                        <div className={`${styles.info} pt-1 pe-4 d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup} pe-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1>Reece James (08123457839)</h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>18th, Oct. 2022</h1>
                                            <h2 className='pt-1'>12:50pm</h2>
                                        </div>
                                        <div className={`${styles.expand} pt-2`}>
                                            <AiOutlineExpand style={{ fontSize:"1rem"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 pb-3'>
                                <div className={`${styles.details} pt-2 pb-3`}>
                                    <div className={`${styles.info} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>completed</h1>
                                        <div className={`${styles.info} pt-1 pe-4 d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup} pe-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1>Reece James (08123457839)</h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>18th, Oct. 2022</h1>
                                            <h2 className='pt-1'>12:50pm</h2>
                                        </div>
                                        <div className={`${styles.expand} pt-2`}>
                                            <AiOutlineExpand style={{ fontSize:"1rem"}}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* PENDING SECTION */}
                    <div className={`${pendingView} ${styles.pending}`}>
                        <div className={`${styles.card} d-flex justify-between pt-4`}>
                            <h3 className={styles.status}>ORDER STATUS</h3>
                            <h3 className={styles.rider}>RIDER</h3>
                            <h3 className={styles.pickup}>PICKUP DETAILS</h3>
                            <h3 className={styles.destination}>DESTINATION DETAILS </h3>
                            <h3 className={styles.fee}>DELIVERY FEE</h3>
                        </div>
                        <div className=''>
                            <div className='pt-3'>
                                <div className={`${styles.details2} pt-2 pb-3`}>
                                    <div className={`${styles.info2} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>pending</h1>
                                        <div className={`${styles.info} pt-1 pe-4 d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup} pe-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1 >Reece James (08123457839) </h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                        <div className={`${styles.expand} pt-2`}>
                                            <AiOutlineExpand onClick={handleToggle} style={{ fontSize:"1rem", cursor:"pointer"}} />
                                        </div>
                                    </div>
                                    <div className='' style={{display: toggle ? 'block' : 'none'}}>
                                        <div className={`${styles.detailsExpand} d-flex pt-4`} >
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown} dropdown-toggle ps-3 pt-2`}  onClick={handleClick}>
                                                Order Items
                                                </h3>
                                            </div>
                                            
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown2} dropdown-toggle pt-2 pb-2 ps-3 pe-3`} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Dispatch Rider
                                                </h3>
                                                <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className={`${styles.buttonDropdown} d-flex justify-content-around text-center ps-3 pt-1 ml-5 pe-3`}>
                                                <div className=''>
                                                    <button type='button' classname='btn pt-4 ps-2 pe-2 pb-2'>Accept Order</button>
                                                </div>
                                            </div>
                                            <div className={`${styles.buttonDropdown2} d-flex justify-content-around font-bold text-center ps-3 pt-1 ml-5 pe-3`}>
                                                <div className=''>
                                                    <button type='button' classname='btn pt-2 ps-2  pe-2 pb-2'>Reject Order</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={` ${styles.dropdownItem} ps-3 pt-2`} style={{display: dropdownItem ? 'block' : 'none'}}>
                                            <h3 className=''>Shawarma, Fried rice, Coke, ice Cream, Cat Fish BBQ.</h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className='pt-3 pb-3'>
                                <div className={`${styles.details2} pt-2 pb-3`}>
                                    <div className={`${styles.info2} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>pending</h1>
                                        <div className={`${styles.info} pt-1 pe-4 d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup} pe-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1 >Reece James (08123457839) </h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                        <div className={`${styles.expand} pt-2`}>
                                            <AiOutlineExpand onClick={handleToggle2} style={{ fontSize:"1rem", cursor:"pointer"}} />
                                        </div>
                                    </div>
                                    <div className='' style={{display: toggle2 ? 'block' : 'none'}}>
                                        <div className={`${styles.detailsExpand} d-flex pt-4`} >
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown} dropdown-toggle ps-3 pt-2`}  onClick={handleClick2}>
                                                Order Items
                                                </h3>
                                            </div>
                                            
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown2} dropdown-toggle pt-2 pb-2 ps-3 pe-3`} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Select Dispatch Rider
                                                </h3>
                                                <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className={`${styles.buttonDropdown} d-flex justify-content-around text-center ps-3 pt-1 ml-5 pe-3`}>
                                                <div className=''>
                                                    <button type='button' classname='btn pt-4 ps-2 pe-2 pb-2'>Accept Order</button>
                                                </div>
                                            </div>
                                            <div className={`${styles.buttonDropdown2} d-flex justify-content-around font-bold text-center ps-3 pt-1 ml-5 pe-3`}>
                                                <div className=''>
                                                    <button type='button' classname='btn pt-2 ps-2  pe-2 pb-2'>Reject Order</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={` ${styles.dropdownItem} ps-3 pt-2`} style={{display: dropdownItem2 ? 'block' : 'none'}}>
                                            <h3 className=''>Shawarma, Fried rice, Coke, ice Cream, Cat Fish BBQ.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* ACTIVE SECTION */}
                    <div className={`${activeView} ${styles.active}`}>
                        <div className={`${styles.card2} d-flex justify-between pt-4`}>
                            <h3 className={styles.status}>ORDER STATUS</h3>
                            <h3 className={styles.pickup}>PICKUP DETAILS</h3>
                            <h3 className={styles.destination}>DESTINATION DETAILS </h3>
                            <h3 className={styles.fee}>DELIVERY FEE</h3>
                        </div>
                        <div className=''>
                            <div className='pt-3'>
                                <div className={`${styles.details2} pt-2 pb-3`}>
                                    <div className={`${styles.info3} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>Active</h1>
                                        
                                        <div className={`${styles.pickup} ps-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} ps-5 pt-1`}>
                                            <h1 >Reece James (08123457839) </h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                        <div className={`${styles.expand} pe-2 pt-2`}>
                                            <AiOutlineExpand onClick={handleToggle3} style={{ fontSize:"1rem", cursor:"pointer"}} />
                                        </div>
                                    </div>
                                    <div className='' style={{display: toggle3 ? 'block' : 'none'}}>
                                        <div className={`${styles.detailsExpand} d-flex pt-4`} >
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown} dropdown-toggle ps-3 pt-2`}  onClick={handleClick3}>
                                                Order Items
                                                </h3>
                                            </div>
                                            <div className={`${styles.pickupTime} ps-5`}>
                                                <h3>Pickup Time</h3>
                                                <h2>3:07pm</h2>
                                            </div>
                                            <div className={`${styles.info} pt-1 ps-5 d-flex`}>
                                                <Image src={pic} alt='img'  ></Image>
                                                <h2 className='pt-2 ps-2'>John Bull</h2>
                                            </div>
                                            
                                            <div className="dropdown pt-1">
                                                <h3 className={`${styles.dropdown3} dropdown-toggle pt-2 pb-2 ps-3 pe-3`} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Change Dispatch Rider
                                                </h3>
                                                <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className={`${styles.pickupTime} d-flex pt-2 ps-4`}>
                                                <h2>Pickup code: </h2>
                                                <h4 className='ps-2'>98XZ</h4>
                                            </div>
                                        </div>
                                        <div className={`${styles.dropdownItem} ps-3 pt-4`} style={{display: dropdownItem3 ? 'block' : 'none'}}>
                                            <div className='pb-4'>
                                                <h2 className={`${styles.border2} `}></h2>
                                            </div>
                                            <h3 className=''>Shawarma, Fried rice, Coke, ice Cream, Cat Fish BBQ.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 pb-3'>
                                <div className={`${styles.details2} pt-2 pb-3`}>
                                    <div className={`${styles.info3} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>Active</h1>
                                        
                                        <div className={`${styles.pickup} ps-5 pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} ps-5 pt-1`}>
                                            <h1 >Reece James (08123457839) </h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                        <div className={`${styles.expand} pe-2 pt-2`}>
                                            <AiOutlineExpand onClick={handleToggle4} style={{ fontSize:"1rem", cursor:"pointer"}} />
                                        </div>
                                    </div>
                                    <div className='' style={{display: toggle4 ? 'block' : 'none'}}>
                                        <div className={`${styles.detailsExpand} d-flex pt-4`} >
                                            <div className="dropdown">
                                                <h3 className={`${styles.dropdown} dropdown-toggle ps-3 pt-2`}  onClick={handleClick4}>
                                                Order Items
                                                </h3>
                                            </div>
                                            <div className={`${styles.pickupTime} ps-5`}>
                                                <h3>Pickup Time</h3>
                                                <h2>3:07pm</h2>
                                            </div>
                                            <div className={`${styles.info} pt-1 ps-5 d-flex`}>
                                                <Image src={pic} alt='img'  ></Image>
                                                <h2 className='pt-2 ps-2'>John Bull</h2>
                                            </div>
                                            
                                            <div className="dropdown pt-1">
                                                <h3 className={`${styles.dropdown3} dropdown-toggle pt-2 pb-2 ps-3 pe-3`} id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Change Dispatch Rider
                                                </h3>
                                                <ul className={`${styles.dropdownMenu} dropdown-menu`} aria-labelledby="dropdownMenuButton1">
                                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                                </ul>
                                            </div>
                                            <div className={`${styles.pickupTime} d-flex pt-2 ps-4`}>
                                                <h2>Pickup code: </h2>
                                                <h4 className='ps-2'>98XZ</h4>
                                            </div>
                                        </div>
                                        <div className={`${styles.dropdownItem} ps-3 pt-4`} style={{display: dropdownItem4 ? 'block' : 'none'}}>
                                            <div className='pb-4'>
                                                <h2 className={`${styles.border2} `}></h2>
                                            </div>
                                            <h3 className=''>Shawarma, Fried rice, Coke, ice Cream, Cat Fish BBQ.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* COMPLETED SECTION */}
                    <div className={`${completedView} ${styles.complete}`}>
                        <div className={`${styles.card3} d-flex justify-between pt-4`}>
                            <h3>ORDER STATUS</h3>
                            <h3>RIDER</h3>
                            <h3>PICKUP DETAILS</h3>
                            <h3>DESTINATION DETAILS </h3>
                            <h3>DATE AND TIME</h3>
                            <h3>DELIVERY FEE</h3>
                        </div>
                        <div className=''>
                            <div className='pt-3'>
                                <div className={`${styles.details3} pt-2 pb-3`}>
                                    <div className={`${styles.info} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>completed</h1>
                                        <div className={`${styles.info} pt-1  d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup}  pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1>Reece James (08123457839)</h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1 pe-3`}>
                                            <h1>18th, Oct. 2022</h1>
                                            <h2 className='pt-1'>12:50pm</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='pt-3 pb-3'>
                                <div className={`${styles.details3} pt-2 pb-3`}>
                                    <div className={`${styles.info} d-flex justify-between`}>
                                        <h1 className='pt-1 ps-2'>completed</h1>
                                        <div className={`${styles.info} pt-1  d-flex justify-between`}>
                                            <Image src={pic} alt='img'  ></Image>
                                            <h2 className='pt-2 ps-2'>John Bull</h2>
                                        </div>
                                        <div className={`${styles.pickup}  pt-1`}>
                                            <h1>Shoprite</h1>
                                            <h2 className='pt-1'>100, alagbka</h2>
                                        </div>
                                        <div className={`${styles.destination} pt-1`}>
                                            <h1>Reece James (08123457839)</h1>
                                            <h2 className='pt-1'>100, Greenville, Akure</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1 pe-3`}>
                                            <h1>18th, Oct. 2022</h1>
                                            <h2 className='pt-1'>12:50pm</h2>
                                        </div>
                                        <div className={`${styles.date} pt-1`}>
                                            <h1>N500</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-3 pb-3 '>
                        <div className={styles.button2}>
                            <button type='button' className='btn text-white' >See More</button>
                        </div>
                    </div>
                </div>
                <Sidebar2/>
            </div>
            {/* WITHDRAWAL SECTION */}
            <div className ={`${withdrawalView}`}>
                <div className={`${styles.withdrawlT} pt-5`}>
                    <div className={`${styles.withdrawal} text-center`}>
                        <div className={`${styles.withdrawalHead} pt-5 pb-5`}>
                            <h3>Withdrawal</h3>
                            <p>Complete the form below to process withdrawals</p>
                        </div>
                        <div className={`${styles.form} ml-5 pt-3`}>
                            <div className="mb-3 d-flex">
                                <label className="col-sm-2 col-form-label">Select Bank:</label>
                                <div class="col-sm-10 ps-2">
                                    <select class="form-select w-50" aria-label="Default select example">
                                        {/* <option selected>Open this select menu</option> */}
                                        <option value="1"> Bank One</option>
                                        <option value="2"> Bank Two</option>
                                        <option value="3">Bank Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="mb-3 d-flex">
                                <label className="col-sm-2 col-form-label">Enter Account Number:</label>
                                <div class="col-sm-10 ps-2">
                                    <input type="text" className="form-control w-50 " />
                                </div>
                            </div>
                            <div class="mb-3 d-flex">
                                <label className="col-sm-2 col-form-label">Enter Account Name:</label>
                                <div class="col-sm-10 ps-2">
                                    <input type="text" className="form-control w-50" />
                                </div>
                            </div>
                            <div class="mb-3 d-flex">
                                <label className="col-sm-2 col-form-label">Enter Amount:</label>
                                <div class="col-sm-10 ps-2">
                                    <input type="text" className="form-control w-50" />
                                </div>
                            </div>
                        </div>
                        <div className='pt-4 pb-3 '>
                            <div className={`${styles.button3} ps-2`}>
                                <button type='button' className='btn text-white'>Request Withdrawal</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.sidebar2}>
                    <Sidebar2/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard