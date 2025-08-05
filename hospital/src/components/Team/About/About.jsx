import React from 'react'

import { FaCartPlus,FaRegStar  } from "react-icons/fa6";
import { AiFillFileAdd } from "react-icons/ai";
import { AiFillCarryOut } from "react-icons/ai";
import { TiHomeOutline  } from "react-icons/ti";
import img1 from "./images/1.jpeg"
import img2 from "./images/2.jpeg"
import img3 from "./images/3.jpeg"
import img4 from "./images/4.jpeg"
import img5 from "./images/Doctors/WhatsApp Image 2025-08-04 at 6.18.12 PM.jpeg"
import img6 from "./images/Doctors/WhatsApp Image 2025-08-04 at 6.19.00 PM.jpeg"

import './About.css'
export default function About() {
  const PatientsSaying = [
  { id: 1, img: img1},
  { id: 2, img: img2},
  { id: 3, img: img3},
  { id: 4, img: img4},
  { id: 5, img: img5},
  { id: 6, img: img6},

];

  return (
    <>
    <section>
<div>
  <div >
<h1 className='address text-center'>About us</h1>
  </div>
  <div className='text-center'>
<div className="btn-group btngroup " role="group" aria-label="Basic example">
  <button type="button" className="btn btn-primary "><a className='text-light text-decoration-none' href="/"><TiHomeOutline color="white" size={20}/> Home</a></button>
  <button type="button" className="btn btn-primary mx-0 disabled">/</button>
  <button type="button" className="btn btn-primary mx-0 disabled">About us</button>
</div>
</div>
     
  <div className="container my-4 rounded-5">
    <div className="images-grid mb-auto mt-5">
      <img className='img1 mt-5 rounded-5' src={img1} height={200} width={250} alt="" />
      <img className='img2 rounded-5' src={img2} height={250} width={250} alt="" />
      <img className='img1 rounded-5' src={img3} height={270} width={250} alt="" />
      <img className='img2 rounded-5' src={img4} height={300} width={250} alt="" />
    </div>
    {/* images */}

    <div className="info-section mx-5 mt-4">
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
       <br /><br /><br />

       <div className='text-center'>
      <button type="button" className="btn btn-success my-5">  Read More</button>

       </div>
       
    </div>
    {/* info about */}
  </div>
</div>
</section>
{/* Section 1 */}

<section className='con2'>
  <div className='d-flex justify-content-around '>

<div className="card rounded-5  my-5">
  <div className="content">
    <h1 className="heading text-danger">120</h1>
    <h5 className="para"> Years With You </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">400</h1>
    <h5 className="para"> Awards </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">250</h1>
    <h5 className="para"> Doctors </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
<div className="card rounded-5 my-5">
  <div className="content">
    <h1 className="heading text-danger">800</h1>
    <h5 className="para"> Satisfied Client </h5>
    <p className="para para-sm">Etiam ante ante, molestie vitae cursus ac, pharetra euismod libero.</p>
  </div>
</div>
</div>
</section>
{/* Section 2 */}

{/* <section className='my-3'>
<p className='text-center pdoc fs-4 '>Our Doctors</p>
<h1 className='text-center hdoc  '>Meet Best Doctors </h1>

 
  </section>


<section className='my-3'>
<p className='text-center pdoc fs-4 '>Testimonial</p>
<h1 className='text-center hdoc  '>See What Are The Patients <br /> Saying About us</h1>
     
<div className="diagram-container">
      <div className="center-shape"></div>
      {PatientsSaying.map((Patients, index) => (
        <div key={Patients.id} className={`Patients-circle position-${index + 1} `}>
          <img className='rounded-5' key={index} src={Patients.img} width={70} alt="" />
          
        </div>
))}
    </div>

</section> */}



    </>
  )
}
