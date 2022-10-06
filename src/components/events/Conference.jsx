/* eslint-disable react/jsx-no-target-blank */
import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

import IMG4 from "../../assets/img4.jpeg"
import IMG5 from "../../assets/img5.jpeg"
import IMG6 from "../../assets/img6.jpeg"
import IMG7 from "../../assets/img7.jpeg"

const data = [
    {
        img: IMG4,
        date: "30 oct",
        link: "https://zu.ac.ae"
    },
    {
        img: IMG5,
        date: "30 oct",
        link: "https://zu.ac.ae"
    },
    {
        img: IMG6,
        date: "30 oct",
        link: "https://zu.ac.ae"
    },
    {
        img: IMG7,
        date: "30 oct",
        link: "https://zu.ac.ae"
    }
]


const Conference = () => {
  return (
    <div className="conferences">
        <div className='events__header'>
            <h2>CONFERENCES</h2>
        </div>
        <div className='conferences__block'>
            <Carousel>
            {
                data.map(({img, date, link}, index) => {
                    return (
                        <a href={link} target="_blank" >
                            <Carousel.Item interval={1000} key={index}>
                                <img
                                className="d-block w-100"
                                src={img}
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3>{date}</h3>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </a>
                    )
                })
            }
            </Carousel> 
        </div>
    </div> 
  )
}

export default Conference