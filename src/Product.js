import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaGripLinesVertical } from "react-icons/fa";
import { AiFillStar, AiOutlineCaretLeft, AiOutlineDoubleLeft, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa'
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "./Header";

const Product = () => {
    const { id } = useParams();

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    const b = [], c = [], h = [];
    var fu = 0, ha = 0, no = 0, norepat = 1;
    for (var i = 0; i < 6; i++) {

        if (data.rating <= i) {
            c[no++] = i;
        }
        else if ((data.rating * 10) % 10 != 0 && norepat == 1 && data.rating <= 6) {
            h[ha++] = i;
            norepat++;
        }
        else {
            b[fu++] = i;
        }
    }
    const contentStyle = {
        height: '70vh',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    const navi = useNavigate();

    function backfunction() {
        navi(-1);
    }

    return (
        <>
            <Header />
            <div className="fixed-header">
                <Header />
            </div>
            
            <Link onClick={backfunction}>
                <div className="go-back" title='Go_Back'>
                    <div className="text position-relative">
                        <FaGripLinesVertical className='second d-none d-md-block' />
                        <AiOutlineCaretLeft className='first d-none d-md-block' />
                        <div className='d-sm-block d-md-none' style={{ transition: '.5s' }}>B</div>
                    </div>
                </div>
            </Link>

            <div className="text-bg-dark p-md-5 p-sm-4 p-1">
                <div className="container">
                    <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center text-break">

                        <div className="col-xxl-12 col-lg-12 col-md-12">
                            <div className="d-flex m-2 rounded-3 overflow-hidden flex-wrap border border-3 border-warning" style={{ backgroundColor: '#3C3E44' }}>
                                <div className="col-sm-12 col-12">
                                    {
                                        data != ''
                                            ? <OwlCarousel className='owl-theme' loop margin={10} autoplay autoplayTimeout={1500} title={data.title} responsive={{
                                                0: {
                                                    items: 1
                                                },
                                                600: {
                                                    items: 2
                                                },
                                                1000: {
                                                    items: 3
                                                }
                                            }}>
                                                {
                                                    data.images.map((item, i) => {
                                                        return (
                                                            <div class='item imgsize' key={i}>
                                                                <img src={item} alt="" className='rounded-5 border border-top-0 border-end-0 border-start-0 border-5 border-warning' style={{ width: '100%', height: '100%' }} title={data.title} />
                                                            </div>

                                                        )
                                                    })
                                                }
                                                <div class='item imgsize'>
                                                    <img src={data.thumbnail} alt="" className='rounded-5 border border-top-0 border-end-0 border-start-0 border-5 border-warning' style={{ width: '100%', height: '100%' }} title={data.title} />
                                                </div>
                                            </OwlCarousel>
                                            : console.log()
                                    }
                                </div>
                                {/* <div className="col-sm-12 col-12">
                                    {
                                        data != ''
                                            ? data.images.map((item) => {
                                                return (
                                                    <>
                                                        <div class='item imgsize' key={i}>
                                                            <img src={item} alt="" className='rounded-5 border border-top-0 border-end-0 border-start-0 border-5 border-warning' style={{ width: '100%', height: '100%' }} title={data.title} />
                                                        </div>
                                                    </>
                                                )
                                            })
                                            : console.log()
                                    }
                                </div> */}
                                <div className="col-sm-12 col-12 px-3">
                                    <div className="top py-2">
                                        <a href="#" className='text-capitalize text-decoration-underline text-center fw-bolder fs-3 location_hover'>
                                            <div className='pb-3'>{data.category}</div>
                                        </a>
                                        <div className="fw-bold text-capitalize">
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>Product-Id</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3'>
                                                    <div>{data.id}</div>
                                                </a>
                                            </div>
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>title</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3'>
                                                    <div>{data.title}</div>
                                                </a>
                                            </div>
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>brand</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3'>
                                                    <div>{data.brand}</div>
                                                </a>
                                            </div>
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>category</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3'>
                                                    <div>{data.category}</div>
                                                </a>
                                            </div>
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>stock</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3'>
                                                    <div>{data.stock}</div>
                                                </a>
                                            </div>
                                            <div className="row text-capitalize">
                                                <div className="col-sm-6 col-12 fw-bolder d-flex align-items-center justify-content-between pe-4" style={{ color: '#9E9E9E' }}>
                                                    <span>discountPer</span>
                                                    <span className='d-sm-block d-none'>:</span>
                                                </div>
                                                <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                    <div>{data.discountPercentage} <span className="fs-4">%</span></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="middle">
                                        <div className="row text-capitalize">
                                            <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4 align-items-center" style={{ color: '#9E9E9E' }}>
                                                <span>price</span>
                                                <span className='d-sm-block d-none'>:</span>
                                            </div>
                                            <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                <div>{data.price} <span className="fs-4">₹</span></div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="row text-capitalize">
                                            <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4 align-items-center" style={{ color: '#9E9E9E' }}>
                                                <span>description</span>
                                                <span className='d-sm-block d-none'>:</span>
                                            </div>
                                            <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                <div>{data.description}</div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row text-capitalize py-2">
                                        <div className="col-sm-6 col-12 fw-bolder d-flex justify-content-between pe-4 align-items-center" style={{ color: '#9E9E9E' }}>
                                            <span>rate</span>
                                            <span className='d-sm-block d-none'>:</span>
                                        </div>
                                        <a href="#" className='col-sm-6 col-12 location_hover ps-lg-0 ps-md-3 fs-4'>
                                            <div>
                                                {
                                                    b.map((star) => {
                                                        return (
                                                            <>
                                                                <AiFillStar style={{ color: '#FF9816' }} />
                                                            </>
                                                        )
                                                    })
                                                }
                                                {
                                                    h.map((star) => {
                                                        return (
                                                            <>
                                                                <FaStarHalfAlt style={{ color: '#FF9816' }} />
                                                            </>
                                                        )
                                                    })
                                                }
                                                {
                                                    c.map((star) => {
                                                        return (
                                                            <>
                                                                <AiOutlineStar style={{ color: '#FF9816' }} />
                                                            </>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Product;