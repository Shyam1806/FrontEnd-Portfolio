'use client'
import React from 'react'
import Head from "next/head";
import Header from '../components/header'
import Footer from '../components/footer'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function skills() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <Head>
        <title>Skills - FrontEnd Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta content="Frontend Portfolio" name="author" />
        </Head>
      <Header />
      <section className="professional">
        <div className="container">
          <h5 className="text-[22px] text-slate-600">SKILLS</h5>
          <h2 className="font-bold text-[52px] ">My Profesional Stack</h2>
          <p className="text-[19px] mb-8">I like to take responsibility to craft aesthetic user experience using <br /> modern frontend architecture.</p>
          <div className="professional-skill-parent flex flex-wrap justify-between p-2  mt-2 mb-8">

            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle	">
              <img src="./img/html.png" alt="js-logo" />
            </div>
            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle">
              <img src="./img/css.png" alt="js-logo" />
            </div>
            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle">
              <img src="./img/js.png" alt="js-logo" />
            </div>
            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle">
              <img src="./img/jquery.png" alt="js-logo" />
            </div>
            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle">
              <img src="./img/sass.png" alt="js-logo" />
            </div>
            <div className="professional-skill bg-white columns-3 text-center pt-2 pb-2 mt-2 flex align-middle">
              <img src="./img/bootstrap.png" alt="js-logo" />
            </div>
          </div>
        </div>
      </section>
      <section className="libraries mt-4 mb-4">
        <div className="container">
          <h3 className="font-bold text-[20px] mt-2 text-slate-600">Libraries and Frameworks</h3>
          <div className="libraries-parent mt-2">
            <Slider {...settings}>
              <div className="professional-skill">
                <img src="./img/react.png" alt="react-logo" />
              </div>
              <div className="professional-skill">
                <img src="./img/nextjs.png" alt="nextjs-logo" />
              </div>
              <div className="professional-skill">
                <img src="./img/tailwind.png" alt="tailwind-logo" />
              </div>
              <div className="professional-skill">
                <img src="./img/ant-design.png" alt="ant-design-logo" />
              </div>
              <div className="professional-skill">
                <img src="./img/material-design-logo.png" alt="material-design-logo" />
              </div>
            </Slider>
          </div>
        </div>
      </section>
      <section className="professional-tools mt-10 mb-10">
        <div className="container">
          <div className="tools-parent">
            <h3 className="font-bold text-[20px] mt-2 mb-4 text-slate-600">Tools I Use</h3>
          </div>
          <div className="tools-logo flex flex-wrap justify-between " >
            <div className="professional-skill">
              <img src="./img/vs-code.png" alt="vs-code-logo" />
            </div>
            <div className="professional-skill postman">
              <img src="./img/postman.png" alt="postman-api-logo" />
            </div>
            <div className="professional-skill">
              <img src="./img/vercel.png" alt="vercel-logo" />
            </div>
            <div className="professional-skill">
              <img src="./img/github.png" alt="github-logo" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default skills