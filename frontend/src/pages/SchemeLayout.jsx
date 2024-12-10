
import React from 'react';
import SchemeHeader from '../components/SchemeHeader';
import SchemeNavbar from '../components/SchemeNavbar';
import Schemes from '../components/Schemes';


const SchemeLayout = () => {
    return (
        <div className="Schemes">
            <SchemeHeader />
            <SchemeNavbar />
            <Schemes />
        </div>
    );
}

export default SchemeLayout;
