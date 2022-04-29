import React from 'react'
import logo from '../public/img/FoodMata_Logo.png'
import cart from '../public/img/Vector (5).png'
// import searchIcon from '../public/img/Icon.png'
import Image from 'next/Image'


const Navbar = () => {
  return (
    // DESKTOP NAVBAR
    <div className=''>
        <div className='desktop'>
          <nav class="navbar navbar-expand-lg navbar-light navbar-bg bg-light">
            <div class="container-fluid nav">
              <Image src={logo} alt='logo' width={180} height={70} className=''></Image>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse ps-5 pt-3" id="navbarSupportedContent">
              <ul class="navbar-nav  mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-4" href="#">Restuarants</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-4" href="#">Foods</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link ps-4" href="#">Logistics</a>
                </li>
              </ul>
              <form class="d-flex ps-5">
                <div className='search-box'>
                  <input class="form-control me-2 input" type="search" placeholder="Search food" id='search' aria-label="Search"/>
                </div>
              </form>
              <div className='cart-body ml-5'>
                <Image src={cart} alt='cart' className='ps-2 pt-1'></Image>
              </div>
              <div className='ps-4 text-white'>
                <button class="btn get-btn text-white" type="submit">Get Started</button>
              </div>
            </div>
          </div>
        </nav>
        </div>
        {/* MOBILE NAVBAR */}
        <div className='mobile'>
          <nav class="navbar navbar-expand-lg navbar-light navbar-bg bg-light">
            <div class="container-fluid">
              <Image src={logo} alt='logo' width={100} height={40} className=''></Image>
            <button class="navbar-toggler" id='toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse pt-3" id="navbarSupportedContent">
              <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link-mob active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link-mob " href="#">Restuarants</a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link-mob " href="#">Foods</a>
                </li>
                <li class="nav-item pt-2">
                  <a class="nav-link-mob " href="#">Logistics</a>
                </li>
              </ul>
              <form class="d-flex">
                <div className='search-box'>
                  <input class="form-control me-2 input" type="search" placeholder="Search food" id='searchmob' aria-label="Search"/>
                </div>
                <div className='ps-1 text-white'>
                  <button class="btn get-btn2-mob text-white" type="submit">Get Started</button>
                </div>
                {/* <div className='cart-body'>
                  <Image src={cart} alt='cart' className=' pt-1'></Image>
                </div> */}
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
    
  )
}

export default Navbar