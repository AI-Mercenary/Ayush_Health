import React from 'react'
import { Link } from 'react-router-dom'
import '../css/header/MiddleBar.css'
import { FaSearch } from "react-icons/fa";

const MidHeader = () => {
  return (
    <>
     <div className="containermidhead">
        <div className="rowmidhead">
            <div className="col1midhead">
                <img alt="Government Emblem"  src="/img/archeologo.png" />
            </div>
            <div className="col2midhead">
                <h3 style={{color:"#040d4a"}}>Ayush NGO Portal</h3>
            </div>
            <div className="col3midhead">
                <Link><FaSearch size={25} className='searchicon'/></Link>
                <Link className="user-manual" href="#">USER MANUAL</Link>
            </div>
            <div className="col4midhead">
            <img alt="Ayush Grid Logo"  src="/img/logoright.png" width="80" />
            </div>
        </div>
     </div>
    </>
  )
}

export default MidHeader
