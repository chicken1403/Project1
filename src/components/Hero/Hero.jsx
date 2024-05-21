import { Link } from "react-router-dom";
import { useState } from "react";
import bkgImg from "../../assets/hero-wallpaper.jpg";
import Img from "../../assets/code9.png";
import pfp from "../../assets/pfp.jpg";
import manas from "../../assets/manas.png";
import rahul from "../../assets/rahul.png";
import kawa from "../../assets/kawa.png";
import Navbar from "../Header/Navbar";
import LoggingPopupLayout from "../Auth/SigninLayout";
import Calendar from "./calendar.jsx";

const Hero = () => {
  // State for popup
  const [popup, setpopup] = useState(false);

  return (
    <>
      <Navbar pagination={false} setpopup={setpopup} />
      <div className="bg-[#1f2420]">
        <div
          className="hero w-screen h-screen px-0"
          style={{
            backgroundImage: `url(${Img})`,
            placeItems: screenLeft,
          }}
        >
          <div className="hero-overlay  z-0 "></div>
          <div
            className="hero-content text-center text-neutral-content z-0 absolute top-16 "
            style={{ alignItems: screenLeft, textAlign: screenLeft }}
          >
            <div className="max-w-md">
              <h1 className="mb-5 text-6xl font-bold text-blue-400 ">
                Become a True Programming Master
              </h1>
              <p className="mt-48 ">
                Elite Code is the best platform to help you enhance your skills,
                expand your knowledge and prepare for technical interviews.
              </p>

              <Link to="/ProblemSet">
                <button
                  className="btn btn-primary mt-3"
                  // onClick={() => {
                  //   setpopup((prevState) => !prevState);
                  // }}
                >
                  Start Coding
                </button>
              </Link>

              {/* {youtubePlayer.isOpen && (<signin/>)} */}
            </div>
          </div>
        </div>

        <div className="flex p-4 m-2 relative bg-black">
          <div className="p-2">
            <div className="card" style={{ width: "25rem", height: "150px" }}>
              <img src={pfp} className="card-img-top" alt="..." />
              <div className="card-body bg-black text-left">
                <h5 className="card-title text-white">User Profile</h5>
                <a
                  className="card-text text-white"
                  href="https://codeforces.com/blog/entry/91363 "
                >
                  Blog
                </a>
                <p className="card-text text-white">Submission:</p>
                <p className="card-text text-white">Bookmark:</p>
                <Link to="/ProblemSet">
                  <button className="btn btn-primary m-3 w-64">
                    Visit ProblemSet
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-black">
            <button className="btn btn-primary m-3 w-64">
              Upcoming Contests
            </button>
            <Calendar />
          </div>
        </div>

        <div className="bg-black mt-[10px] pt-3 pb-3">
          <div className="container marketing relative">
            <div className="row">
              <div className="col-lg-4 p-4">
                <img
                  src={manas}
                  className="bd-placeholder-img rounded-circle w-[140px] h-[140px] ml-[155px]"
                ></img>
                <h2 className="fw-normal m-3 text-white">Manas Kumar Sinha</h2>
                <p className="text-white">IIT Guwahati CSE 26</p>
                <p className="text-white">Bolo Tararara</p>
                <p>
                  <Link to="https://www.linkedin.com/in/manas-sinha-b4454324b/">
                    <button className="btn btn-primary m-3 w-64">
                      View Details
                    </button>
                  </Link>
                </p>
              </div>

              <div className="col-lg-4 p-4">
                <img
                  src={rahul}
                  className="bd-placeholder-img rounded-circle w-[140px] h-[140px] ml-[155px] "
                ></img>
                <h2 className="fw-normal m-3 text-white">Rahul Singh</h2>
                <p className="text-white">IIT Guwahati Mech 26</p>
                <p className="text-white">Bolo Tararara</p>
                <p>
                  <Link to="https://www.linkedin.com/in/rahul-singh-7a5a62257/">
                    <button className="btn btn-primary m-3 w-64">
                      View Details
                    </button>
                  </Link>
                </p>
              </div>

              <div className="col-lg-4 p-4">
                <img
                  src={kawa}
                  className="bd-placeholder-img rounded-circle w-[140px] h-[140px] ml-[155px]"
                ></img>
                <h2 className="fw-normal m-3 text-white">Rishi Kawa</h2>
                <p className="text-white">IIT Guwahati Mech 26</p>
                <p className="text-white">Bolo Tararara</p>
                <p>
                  <Link to="https://www.linkedin.com/in/rishi-kawa-154a80260/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                    <button className="btn btn-primary m-3 w-64">
                      View Details
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container bg-black h-64 font-bold">
          <div className="container p-4 bg-black mt-3 mx-auto flex justify-center space-x-4">
            <Link to="/">
              <p className="p-[19px] text-white">Home</p>
            </Link>
            {/* <p className="p-[19px] text-white">Home</p> */}
            <p className="p-[19px] text-white">Features</p>
            <p className="p-[19px] text-white">FAQ</p>
            <p className="p-[19px] text-white">ContactUs</p>
          </div>
          <div className="container p-4 bg-black mt-24 text-center text-white">
            © 2024 Company, Inc
          </div>
        </div>

        {popup && <LoggingPopupLayout popup={popup} setpopup={setpopup} />}
      </div>
    </>
  );
};

export default Hero;
