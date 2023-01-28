import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaSearchPlus } from 'react-icons/fa';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { createContext } from 'react';
import HomePage from './HomePage';

export const global_data = createContext([]);

const Header = () => {
    const [data, setdata] = useState([]);
    const [value_search,setvalue_search] = useState();

    useEffect(() => {
        axios.get('https://dummyjson.com/products/categories')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])

    const navi = useNavigate();

    function changecatagory(product) {
        // alert(product);
        navi(`/Catagory/${product}`);
        window.location.reload();
    }


    function funsearch(search) {
        if (search == '') {
            navi('/');
        }
        else {
            navi(`/Search/${search}`);
        }
        setvalue_search(search);
    }

    function searchbtn() {
        if(value_search=='')
        {
            navi('/');
        }
        else
        {
            setvalue_search();
            window.location.reload();
        }
    }

    return (
        <>
            <div className="p-md-3">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-2 col-5 d-flex justify-content-center align-items-center">
                            <Link to='/' className='logo d-flex text-decoration-none text-dark fs-4'>
                                <div className="dummy">dummy</div>
                                <div className="JSON fw-bolder">JSON</div>
                            </Link>
                        </div>
                        <div className="py-1 col-md-6 col-7 d-flex justify-content-center align-items-center">
                            <div className="col-9 d-flex justify-content-end position-relative">
                                <input type="text" name="SearchBar" id="searchbar" placeholder='Search Here...' className='ps-3 pe-5 py-1 w-100 rounded-5 fs-5 text-truncate' onKeyUp={((e) => { funsearch(e.target.value) })} autoComplete='off'></input>
                                <div className="searchbtn border border-2 border-dark d-flex align-items-center justify-content-center rounded-start rounded-5 px-3 py-2 text-center fs-5 position-absolute top-0 right-0 h-100" style={{ width: 'fit-content' }} title='Search' onClick={searchbtn}>
                                    <FaSearch className='text-white' />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-12 d-flex d-sm-flex-direction-center justify-content-center align-items-center">
                            <div className="mainmenu d-flex justify-content-end flex-sm-row flex-column">
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link to='/' className='ahover position-relative d-block px-4 py-2 text-dark fw-bold'>Home</Link>
                                        <div className="submenu shadow-lg" style={{ backgroundColor: "#F0F0F0" }}>
                                            {
                                                data.map((item, i) => {
                                                    return (
                                                        <ul key={i}>
                                                            <li>
                                                                {/* to={`/Catagory/${item}`} */}
                                                                <Link onClick={() => { changecatagory(item) }} className='shover position-relative d-block px-5 py-1 text-dark fw-bold text-capitalize text-nowrap'>{item}</Link>
                                                            </li>
                                                        </ul>
                                                    )
                                                })
                                            }
                                        </div>
                                    </li>
                                </ul>
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link className='ahover position-relative d-block px-4 py-2 text-dark'>Docs</Link>
                                    </li>
                                </ul>
                                <ul className=''>
                                    <li className='position-relative'>
                                        <Link className='ahover position-relative d-block px-4 py-2 text-dark'>GitHub</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;