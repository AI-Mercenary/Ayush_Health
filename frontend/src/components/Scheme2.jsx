import React from 'react';
import '../css/Scheme1.css';

const Scheme2 = () => {
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

                <h2 className="text-center">Ayurswasthya</h2>

                <h4>Objective of Ayurswasthya Yojana:</h4>
                <p>
                    Ayurswasthya Yojana aims to address the diverse health challenges faced by India by merging and expanding two 
                    existing schemes - Public Health Intervention (PHI) and Centre of Excellence (COE). The scheme has three main 
                    components: Ayush and Public Health, Ayush for Sports Medicine, and Upgradation of facilities to the Centre of Excellence.
                </p>

                <Section
                    title="1. Ayush and Public Health (PHI) Component:"
                    objective="The PHI component of Ayurswasthya Yojana focuses on promoting authentic classical Ayush interventions for community healthcare. The specific objectives include demonstrating the advantages of Ayush healthcare in public health, supporting the implementation of Sustainable Development Goals (SDG 2 and 3) through Ayush systems, and documenting the efficacy of Ayush interventions for larger-scale implementation in national health programs."
                    beneficiaries={[
                        ['Government institutes', 'Quality healthcare access, Research advancements and strengthened infrastructure'],
                        ['Non-profit/Voluntary organizations', 'Enhanced services, Health awareness and Effective initiatives'],
                        ['NGO', 'Improved services, Research contributions and Community-focused programs'],
                        ['Athletes', 'Ayush Sports medicine, Injury prevention and Holistic healthcare'],
                    ]}
                    funding="Maximum funding of Rs. 1.5 crores over three years, released in three installments."
                />

                <Section
                    title="2. Ayush for Sports Medicine (PHI) Component:"
                    objective="The Ayush for Sports Medicine component aims to promote Ayush interventions in treating sports-related injuries and enhancing the health and fitness of sports persons."
                    beneficiaries={[
                        ['Sports Persons', 'Treatment and Rehabilitation of Sports-Related Injuries and Promotion of Health and Fitness'],
                        ['Hospitals', 'Treatment and Rehabilitation Health and Fitness Promotion'],
                    ]}
                    funding="Maximum funding of Rs1.00 crores for 18 months, released in two installments."
                />

                <Section
                    title="3. Centre of Excellence (COE) Component:"
                    objective="The COE component aims to support the establishment and upgradation of Ayush medical health units, promote innovative proposals in education, research, and innovation, and enhance the competencies of Ayush professionals at national and international levels."
                    beneficiaries={[
                        ['Teachers', 'Specialized units'],
                        ['Students', 'Competency Strengthening, Infrastructure development and capacity building.'],
                        ['Patients', 'Concessional Healthcare, Improved healthcare Facilities'],
                        ['Researchers', 'Healthcare Access, Awareness Increase and capacity building'],
                        ['Government Bodies', 'Sector Strengthening'],
                    ]}
                />
            </div>
        </div>
    );
};

const Section = ({ title, objective, beneficiaries, funding }) => (
    <div className="section">
        <h3>{title}</h3>
        <h4>Objective:</h4>
        <p>{objective}</p>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Beneficiary</th>
                    <th>Benefits</th>
                </tr>
            </thead>
            <tbody>
                {beneficiaries.map((beneficiary, index) => (
                    <tr key={index}>
                        <td>{beneficiary[0]}</td>
                        <td>{beneficiary[1]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        {funding && (
            <>
                <h3>Quantum of Assistance</h3>
                <p>{funding}</p>
            </>
        )}
    </div>
);

export default Scheme2;
