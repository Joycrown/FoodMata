import Head from 'next/head'
import Footer from '../components/footer'
import Navbar from '../components/Navbar'
import Part1 from '../components/part1'
import Part2 from '../components/part2'
import Part3 from '../components/part3'
import Part4 from '../components/part4'
import Part5 from '../components/part5'



export default function Home() {
  return (
    <div >
      <Head>
        <title>FoodMata</title>
        <meta name="description" content="Food Ordering App!" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500&display=swap" rel="stylesheet"></link>
      </Head>
      <Navbar/>
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Footer/>
      
    </div>
  )
}
