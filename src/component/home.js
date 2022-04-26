import { useState } from 'react';
import { Link } from 'react-router-dom'
import React from 'react';
import './../Styles/main.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from './../Images/logo.png';
import c1 from './../Images/c1.jpeg';
import c2 from './../Images/c2.jpeg';
import c3 from './../Images/c3.jpeg';


const responsiveNews = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};


function Home() {

    const clothData = {
        Armani: [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Armani%20Clothes%2F1.jpeg?alt=media&token=1f88bef5-e05e-471e-af9a-8800d924efd2",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Armani%20Clothes%2F2.jpeg?alt=media&token=cee25e98-ba35-4e23-b024-056250da1937",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }

        ],

        Miscellaneous: [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Other%20Clothes%2F1.jpeg?alt=media&token=68ace956-c4bf-4dd5-b29d-3c0284b3475a",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Other%20Clothes%2F2.jpeg?alt=media&token=187b6eb0-795e-4306-a6c6-fd276a26637e",
                detail1: "2lorem1",
                detail2: "2lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Other%20Clothes%2F3.jpeg?alt=media&token=963ed99e-5b63-4e3c-b9ac-1ed5ff83c0d1",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }
        ],

    };

    const bagData = {
        Gucci: [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Gucci%20Bags%2F1.jpeg?alt=media&token=d5ef6f9b-24c5-4400-8485-d8cd985813c0",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Gucci%20Bags%2F2.jpeg?alt=media&token=5611ba70-6938-40ab-a6e7-655995d3650e",
                detail1: "2lorem1",
                detail2: "2lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Gucci%20Bags%2F3.jpeg?alt=media&token=fe2a8476-a38d-4088-b99b-6fd59f929e14",
                detail1: "2lorem1",
                detail2: "2lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Gucci%20Bags%2F4.jpeg?alt=media&token=586c1280-161b-45fa-878f-2788338dafde",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }

        ],

        Brand2: [
            {
                image: "#",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "#",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }
        ],

        Miscellaneous: [
            {
                image: "#",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "#",
                detail1: "2lorem1",
                detail2: "2lorem2000"
            }
        ]
    };

    const accessData = {
        Chanel: [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Chanel%20Watch%2F2.jpeg?alt=media&token=019d9a02-e6cb-4cf1-a99e-a7e82ed366c8",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Chanel%20Watch%2F1.jpeg?alt=media&token=6c45f508-8433-4c60-9254-8f8e3608e9a7",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }

        ],

        Dolce: [
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Dolce%20and%20gabbana%20accessories%2F2.jpeg?alt=media&token=b566719d-84ad-4f79-adc6-1d58d665de00",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "https://firebasestorage.googleapis.com/v0/b/afflux-4f4ae.appspot.com/o/Dolce%20and%20gabbana%20accessories%2F1.jpeg?alt=media&token=ca565b3c-ba4f-4950-9277-c63d9c8cab12",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }
        ],

        Miscellaneous: [
            {
                image: "#1",
                detail1: "lorem1",
                detail2: "lorem2"
            },
            {
                image: "#2",
                detail1: "2lorem1",
                detail2: "2lorem2"
            }
        ]
    }





    const [Cloth, setCloth] = useState(clothData);


    const handleCloth = () => {
        setCloth(clothData);
    }

    const handleAccess = () => {
        setCloth(accessData);
    }

    const handleBags = () => {
        setCloth(bagData);
    }



    return (
        <div className="App">
            <div className='cont1' >
                <center>
                    <img className='logo' src={img1} />
                </center>
            </div>
            {/* <div>
        <h2 className='header1' >WHY BUY WHEN YOU CAN RENT?</h2>
      </div> */}



            <center>
                <Carousel responsive={responsiveNews} className='caro' >
                    <img src={c1} alt="news" />
                    <img src={c3} alt="news" />
                    <img src={c2} alt="news" />

                </Carousel>
            </center>



            <div className="outer">
                <div className="inner">
                    <button className="Btn" onClick={handleCloth} >Cloths</button>
                </div>
                <div className="inner">
                    <button className="Btn" onClick={handleAccess} >Accessories</button>
                </div>
                <div className="inner">
                    <button className="Btn" onClick={handleBags} >Bags</button>
                </div>
            </div>



            {Cloth && (Object.entries(Cloth).map(brand => {
                // console.log(item)
                return (
                    <div>
                        <div className='brand-box'>

                            <h2 className='brand-name' >{brand[0]}</h2>

                        </div>
                        <div className='mainCont'>
                            {brand[1].map(({ image, detail1, detail2 }) => (


                                <container className='items'>
                                    <card className='item-card'>
                                        <center> <img className='item-image'
                                            src={image} />
                                        </center>
                                        <p className='detail1'>{detail1} </p>
                                        <p className='detail2'>{detail2} </p>
                                        <center>

                                            <Link to={{
                                                pathname: "/form",
                                                stat: { image }
                                            }}>
                                                <button className='Btn2' >Rent Now</button>
                                            </Link>
                                        </center>

                                    </card>
                                </container>

                            )
                            )}     </div>;
                    </div>
                )
            }))}



            <br /><br />
        </div >
    );
}
export default Home;

