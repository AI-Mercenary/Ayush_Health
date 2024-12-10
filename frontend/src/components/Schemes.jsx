import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Schemes.css';

export default function Schemes() {
    const navigate =useNavigate();
    
    const schemes = [
        {
            title: 'Ayurgyan',
            description:
                'AYURGYAN Scheme has been approved for the period from the FY 2021-2022 to FY 2025-2026 for promoting education and research in the field of Ayush.'
                ,path:"scheme1"
        },
        {
            title: 'Ayurswasthya',
            description:
                'Under the Centre of Excellence component of AYURSASTHYA Yojana, financial assistance is provided to eligible individual organizations/institutes for establishing and upgrading their functions & facilities and/or for research & development activities in Ayush.',
             path:"scheme2"
        },
        {
            title: 'Information, Education & Communication',
            description:
                'Pursue activities in the areas of Information, Education and Communication to fulfill the mandate of "propagation" of Ayush Systems of Healthcare, assigned to the Ministry in the Government of India (Allocation of Business) Rules 1961.',
             path:"scheme3"
        },
        {
            title: 'Promotion of International Co-operation',
            description:
                'Central Sector Scheme for Promotion of International Co-operation (IC) in Ayush. To promote and strengthen awareness and interest about Ayush Systems of Medicine and to facilitate International promotion, development and recognition of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa and Homoeopathy.',
             path:"scheme4"
        }
    ];

    return (
        <div className="card-container">
            {schemes.map((scheme, index) => (
                <div className="card" key={index}>
                    <h2>{scheme.title}</h2>
                    <p>{scheme.description}</p>
                    <div className="button-container">
                        
                            <button onClick={()=>navigate(scheme.path)}>Read More</button>
                            <button onClick={()=>navigate('/home')}>Apply Here</button>
                        
                    </div>
                </div>
            ))}
        </div>
    );
}
