// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import '../css/header/TopBar.css';
import Grid from '@mui/material/Grid2'

const Header = () => {



  return (
   <>
     <>
     <div className="containerhead">
        <div className="rowhead">
            <div className="col1head">
                <img alt="Indian Flag" height="20" src="/img/flag.png" width="20"/>
                <Link href="https://www.india.gov.in/"  target='_blank' className='toplink'>भारत सरकार | Government of India</Link>
            </div>
            <div className="col2head">
                <Link to="/registration" className='topbtn'>Register Now</Link>
                <span className="divider">|</span>
                <Link to="/login" className='topbtn'>Login</Link>
            </div>
            <div className="col3head">
                <Link href="#" className='toplink'>Sitemap</Link>
                <span class="divider">|</span>
                <Link href="#" className='toplink'>Screen Reader Access</Link>
                <span className="divider">|</span>
                <Link href="#" className='toplink'>Skip To Main Content</Link>
                <span className="divider">|</span>
                <Link href="#" className='toplink'>A-</Link>
                <Link href="#" className='toplink'>A</Link>
                <Link href="#" className='toplink'> A+</Link>
                <span className="divider">|</span>
                <Link href="#" className='toplink'>English</Link>
            </div>
        </div>
     </div>
    </>
   </>
  )
}

export default Header
