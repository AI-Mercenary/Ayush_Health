import React from 'react'
import {Link} from '@mui/material'
import { FaFacebook,FaTwitter ,FaYoutube, FaInstagram  } from "react-icons/fa6";
import '../css/Footer.css'
import { alignProperty } from '@mui/material/styles/cssUtils';

const Footer = () => {
  return (
    <>
    <div className="containerFooter" >
        <div className="rowFooter">
            <div className="col1Footer">
            <h3>Ayush NGO Portal</h3>
              <table >
                <tr>
                    <td className='hide'>
                    <p>Last Updated on : 31<sup>st</sup> Aug 2022</p>
                    </td>
                    <td>
                    <p>Website Policies</p>
                    </td>
                    <td>
                    <p>Help</p>
                    </td>
                </tr>
                <tr>
                    <td className='hide'>
                    <p>Visitors : 171,717</p>
                    </td>
                    <td>
                    <p>Disclaimer</p>
                    </td>
                    <td>
                    <p>Terms and Conditions</p>
                    </td>
                </tr>
              </table>
            </div>
            <div className="col2Footer">
                <h3>Connection with us</h3>
                <div className='social-media' >
                    <Link to="https://facebook.com/AYUSHStartups" target="_blank"><FaFacebook size={50} color='white' /></Link>
                    <Link to="https://twitter.com/AYUSHStartups" target="_blank"><FaTwitter size={50} color='white'/></Link>
                    <Link to="https://instagram.com/AYUSHStartups" target="_blank"><FaYoutube size={50} color='white'/></Link>
                    <Link to="https://linkedin.com/company/AYUSHStartups" target="_blank"><FaInstagram size={50} color='white'/></Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer
