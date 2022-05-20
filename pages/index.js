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
       
      </Head>
      {/* <Navbar/>
      <Part1/>
      <Part2/>
      <Part3/>
      <Part4/>
      <Part5/>
      <Footer/> */}
      
    </div>
  )
}
