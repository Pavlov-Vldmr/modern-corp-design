import React, { Component } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styles from "./carousel.module.css";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }
  

export default class Responsive extends Component {
    render() {
      var settings = {
        className: "slider variable-width",
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        initialSlide: 0,
        // variableWidth: true,
        // centerMode: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (

          <Slider className={styles.slider} {...settings}>
            <div style={{ width: 130 }} className={styles.slide}>
              <img src="./images/home-page-icons/Logo.png" alt="" />
            </div>
            <div style={{ width: 100 }} className={styles.slide}>
              <img src="./images/home-page-icons/Logo-1.png" alt="" />
            </div>
            <div style={{ width: 225 }} className={styles.slide}>
              <img src="./images/home-page-icons/Logo-2.png" alt="" />
            </div>
            <div style={{ width: 100 }} className={styles.slide}>
              <img src="./images/home-page-icons/Logo-3.png" alt="" />
            </div>
            <div style={{ width: 130 }} className={styles.slide}>
              <img src="./images/home-page-icons/Logo-4.png" alt="" />
            </div>
           
          </Slider>

      );
    }
  }