import React from 'react'

import { FaCartPlus,FaRegStar  } from "react-icons/fa6";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";
import img1 from "./images/1.jpeg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import './About.css'
export default function About() {
  return (
    <>
<div>
       
  <div className="container">
    <div className="images-grid mt-5">
      <img className='img1 mt-5 rounded-3' src={img1} height={200} width={250} alt="" />
      <img className='img2 rounded-5' src={img2} height={200} width={300} alt="" />
      <img className='img1 rounded-4' src={img3} height={370} width={300} alt="" />
      <img className='img2 rounded-5' src={img4} height={400} width={250} alt="" />
    </div>
    {/* images */}

    <div className="info-section mt-4">
   <h3 className='h3about'> About Us</h3><br /><br />
      <div className="about-us">
        <h1 className='h1about'>The Great Place Of Medical Hospital Center </h1>
 <p>We Provide Special Tips and Advices Of Health Care Treatment and High Level Of Best Technology Involved In Our Hospital</p>
      </div><br /><br /><br />
       <FaCartPlus color='blue'   size={25} /><span className='fa1'> Emergency help </span> 
        <AiFillFileAdd color='green' size={25} /> Qualified doctors
        <br/><br/><br /><br />
       <FaRegStar color='red' size={25} />  <span className='fa2'>Best professionals</span>
       <AiFillCarryOut color='darkorchid' size={25} /> Medical Treatment
       <br /><br /><br /><br />

       <div className='text-center'>
      <button type="button" className="btn btn-success my-5">  Read More</button>

       </div>
       
    </div>
    {/* info about */}
  </div>
</div>


    </>
  )
}
