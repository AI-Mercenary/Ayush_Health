import React from 'react';
import '../css/Scheme1.css';

const Scheme4 = () => {
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
                    <h1 style={{ color: 'brown' }}>Offerings</h1>
                </div>
            </div>

            <div className="container">
                <a href="Schemes.jsx" className="go-back">⟨⟨ Go to Schemes</a>

                <h2 className="text-center">Promotion of International Co-operation</h2>

                <h4>Objective of the Scheme:</h4>
                <p>
                    The Central Sector Scheme for Promotion of International Co-operation in Ayush aims to promote and strengthen awareness and interest in Ayush Systems of Medicine at the international level. The scheme has specific objectives to facilitate the international promotion, development, and recognition of Ayurveda, Yoga, Naturopathy, Unani, Siddha, Sowa-Rigpa, and Homoeopathy. The overarching goals include fostering interaction among stakeholders, supporting the international exchange of experts and information, boosting global trade in Ayush products and services, and promoting academics and research through the establishment of Ayush Academic Chairs in foreign countries.
                </p>

                <h4>Components of the Scheme:</h4>
                <p>
                    The scheme comprises six components, each designed to address specific aspects of international cooperation in Ayush:
                </p>
                <ul>
                    <li>
                        <strong>International Exchange of Experts & Officers:</strong> Involves short-term and long-term deputation of experts and officers to and from India for participation in international meetings, conferences, and training programs. Financial support covers airfare, accommodation, medical facilities, and other allowances.
                    </li>
                    <li>
                        <strong>Incentive to Ayush Entrepreneurs and Institutions:</strong> Provides incentives for Ayush drug manufacturers, entrepreneurs, institutions, and healthcare providers to participate in international exhibitions, trade fairs, and road shows. Financial assistance includes reimbursement for travel expenses and stall hiring.
                    </li>
                    <li>
                        <strong>Support for International Market Development:</strong> Includes activities such as market surveys, collaborations with foreign institutions, setting up Ayush academic chairs abroad, and participation in international conferences and exhibitions.
                    </li>
                    <li>
                        <strong>Translation and Publication of Ayush Literature:</strong> Aims to meet the increasing demand for authentic information on Ayush by translating and publishing classical literature and books in foreign languages.
                    </li>
                    <li>
                        <strong>Establishment of Ayush Information Cells and Health Centers/Institutions:</strong> Involves setting up Ayush Information Cells in foreign countries and supporting the establishment or strengthening of health centers and institutions. Financial assistance is provided for one-time setup and recurring activities.
                    </li>
                    <li>
                        <strong>International Fellowship/Scholarship Programme:</strong> Supports foreign nationals in undertaking Ayush courses in premier institutions in India. Scholarships are granted based on recommendations from the Embassy or High Commission of India.
                    </li>
                </ul>

                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>Beneficiary</th>
                            <th>Benefits</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ayush Industry</td>
                            <td>Financial Incentives</td>
                        </tr>
                        <tr>
                            <td>System Experts</td>
                            <td>International Exposure</td>
                        </tr>
                        <tr>
                            <td>Students</td>
                            <td>Fellowship/Scholarship Opportunities</td>
                        </tr>
                        <tr>
                            <td>Embassies/Missions</td>
                            <td>Promotion Contribution</td>
                        </tr>
                        <tr>
                            <td>Deputed Officers</td>
                            <td>International Exposure Support</td>
                        </tr>
                    </tbody>
                </table>

                <h4>Quantum of Assistance</h4>
                <p>
                    <ul>
                        <li>Incentive to Ayush Entrepreneurs</li>
                        <li>Support for International Market Development</li>
                        <li>Translation and Publication of Ayush Literature/Books</li>
                        <li>Financial support for translation and publication</li>
                        <li>Establishment of Ayush Information Cells</li>
                        <li>International Fellowship/Scholarship Programme</li>
                        <li>Establishment of International Institutes/Research Centers</li>
                    </ul>
                </p>
            </div>
        </div>
    );
};

export default Scheme4;
