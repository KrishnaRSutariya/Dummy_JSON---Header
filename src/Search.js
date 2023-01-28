import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { createGlobalState } from 'react-hooks-global-state';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Header from './Header';

const Search = () => {

    const { search } = useParams();

    const [data, setdata] = useState([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/products/search?q=${search}`)
            .then((res) => {
                console.log(res.data.products);
                setdata(res.data.products);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <>
            <Header />
            <div className="fixed-header">
                <Header />
            </div>

            <div className="text-bg-dark p-md-5 p-sm-4 p-1">
                <div className="container">
                    <div className="row d-flex justify-content-xxl-start justify-content-xl-between align-items-center text-break">
                        {
                            (data != '')
                                ? data && data.map((item, z) => {
                                    const b = [], c = [], h = [];
                                    var fu = 0, ha = 0, no = 0, norepat = 1;
                                    for (var i = 0; i < 6; i++) {

                                        if (item.rating <= i) {
                                            c[no++] = i;
                                        }
                                        else if ((item.rating * 10) % 10 != 0 && norepat == 1 && item.rating <= 6) {
                                            h[ha++] = i;
                                            norepat++;
                                        }
                                        else {
                                            b[fu++] = i;
                                        }
                                    }
                                    return (
                                        <div className="col-xxl-4 col-lg-6 col-md-12" key={z}>
                                            <div className="d-flex m-2 rounded-3 overflow-hidden flex-wrap border border-3 border-warning" style={{ backgroundColor: '#3C3E44' }}>
                                                <div className="col-sm-6 col-12">
                                                    <Link to={`/Product/${item.id}`}>
                                                        <img src={item.images[0]} alt="" className='borderremove border border-top-0 border-start-0 border-5 border-warning' style={{ width: '100%', height: '100%' }} title={item.title} />
                                                    </Link>
                                                </div>
                                                <div className="col-sm-6 col-12 px-3">
                                                    <div className="top py-2">
                                                        <a href="#" className='text-capitalize fw-bolder fs-3 location_hover'>
                                                            <div>{item.category}</div>
                                                        </a>
                                                        <div className="fw-bold text-capitalize">
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    title :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.title}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    brand :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.brand}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    category :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.category}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                                    stock :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
                                                                    <div>{item.stock}</div>
                                                                </a>
                                                            </div>
                                                            <div className="row text-capitalize">
                                                                <div className="col-lg-6 col-md-12 fw-bolder d-flex align-items-center" style={{ color: '#9E9E9E' }}>
                                                                    discountPer :
                                                                </div>
                                                                <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                                    <div>{item.discountPercentage} <span className="fs-4">%</span></div>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="middle">
                                                        <div className="row text-capitalize">
                                                            <div className="col-lg-6 col-md-12 fw-bolder d-flex align-items-center" style={{ color: '#9E9E9E' }}>
                                                                price :
                                                            </div>
                                                            <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3 d-flex align-items-center'>
                                                                <div>{item.price} <span className="fs-4">₹</span></div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="bottom">
                                                        <div className="fw-bolder text-capitalize" style={{ color: '#9E9E9E' }}>description :</div>
                                                        <div className='text-capitalize'>{item.description}</div>
                                                    </div>
                                                    <div className="row text-capitalize py-2">
                                                        <div className="col-lg-6 col-md-12 fw-bolder" style={{ color: '#9E9E9E' }}>
                                                            rate :
                                                        </div>
                                                        <a href="#" className='col-6 location_hover ps-lg-0 ps-md-3'>
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
                                    )
                                })
                                : <>
                                    <div className="col-12 text-center">
                                        <h1>Sorry ! Data [ <u className='fw-bolder'>{search}</u> ] Does Not Founded ...</h1>
                                    </div>
                                </>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;