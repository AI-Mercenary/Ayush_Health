import React from 'react';
import '../css/Scheme1.css';

const Scheme3 = () => {
    return (
        <div>
            <div className="header">
                <div className="container">
                    <div className="breadcrumb-container">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item"><a href="#">Schemes</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Offerings</li>
                        </ol>
                    </div>
                    <h1>Offerings</h1>
                </div>
            </div>

            <div className="container">
                <a href="Schemes.jsx" className="go-back">⟨⟨ Go to Schemes</a>

                <h2 className="text-center">Information, Education & Communication</h2>
                
                <p>
                    The objective of the Central Sector Scheme for Promotion of Information, Education, and Communication (IEC) in Ayush, Government of India, is to propagate Ayush (Ayurveda, Yoga & Naturopathy, Unani, Siddha, and Homeopathy) systems of healthcare. The scheme aims to create awareness about the efficacy and cost-effectiveness of Ayush, disseminate information on research outcomes, facilitate interaction among stakeholders, and organize events for the promotion and propagation of Ayush systems through various communication channels, including digital and audio-visual media.
                </p>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Beneficiary</th>
                            <th>Benefits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Citizens of the country</td>
                            <td>
                                <ul>
                                    <li>Creation of awareness amongst the citizens about the efficacy of the Ayush systems, their cost-effectiveness, and the availability of Ayush drugs, services, and other solutions.</li>
                                    <li>Dissemination of information on proven results of Research and Development work conducted in Ayush Systems.</li>
                                    <li>Providing information to stakeholders relating to recent developments in the Ayush sector.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Ayush Institutes</td>
                            <td>Creating awareness, networking opportunities, and development in the field of Ayush.</td>
                        </tr>
                        <tr>
                            <td>Content Writers, Video Editors, Graphic Designers</td>
                            <td>Contractual roles with specific remuneration for their services in promoting Ayush through content creation and design.</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Quantum of Assistance</h4>
                <p>
                    Providing financial assistance to reputed organizations, Ayush-specific NGOs, educational/research institutes for organizing Seminars, Webinars, Conferences, Symposiums, Workshop, meeting, etc. on Ayush Systems. Providing incentives to Ayush Industry to participate in National and State Arogya Fairs/Melas organized by Central/ State Governments/ Government organizations/ reputed organizations like Chemexil, Pharmexcil, CII, FICCI, ASSOCHAM, ITPO, etc. at State/National level.
                </p>
            </div>
        </div>
    );
};

export default Scheme3;
