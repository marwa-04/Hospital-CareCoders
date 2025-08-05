import React from "react";
import headerimg from '../../images/header_files/doctor.7c2bc96d67d3eba1d64a.png';
import './Home.css';

const Home = () =>{
    return(
    <header>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-lg-8">
                    <h5>We Provide All Health Care Solution</h5>
                    <h2>Protect Your Health And Take Care To Of Your Health</h2>
                    <button><a href="##">Read More</a></button>
                </div>
                <div className="col-md-4 col-lg-4">
                    <img src={headerimg} alt="headerimg"/>
                </div>
            </div>
        </div>
    </header>
    )
}
export default Home;