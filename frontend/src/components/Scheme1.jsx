import React from 'react';
import '../css/Scheme1.css';
import SchemeHeader from './SchemeHeader';
const Scheme1 = () => {
    return (
        <div>
            {/* <div className="header">
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
            </div> */}
            <SchemeHeader />

            <div className="container">
                <a href="Schemes.jsx" className="go-back">⟨⟨ Go to schemes</a>
                <h2 className="text-center">AYURGYAN SCHEME</h2>
                <h4>Objective of the scheme:</h4>
                <p>
                    The scheme aims to enhance and develop capacity in the Ayush healthcare sector at the country level. 
                    It seeks to improve health practices through sustainable Ayush methods, encourage professionals 
                    to undergo professional orientation, update knowledge of teachers and doctors, and promote the 
                    use of information technology for disseminating Ayush developments. The scheme also focuses on 
                    encouraging research and development in priority areas to validate claims and enhance the acceptability 
                    of Ayush approaches and drugs in the global market.
                </p>

                <h4>Beneficiaries:</h4>
                <p>
                    <strong>1. Capacity Building and Continuing Medical Education (CME) in Ayush:</strong> Continuing Medical 
                    Education (CME) in Ayush involves ongoing professional training and development initiatives for Ayush 
                    healthcare professionals, including doctors, teachers, and paramedics. It aims to enhance their knowledge, 
                    skills, and clinical practices to keep pace with emerging trends and advancements in the Ayush healthcare 
                    sector.
                </p>
                <TableSection
                    rows={[
                        ['Teachers', 'Professional Development'],
                        ['Ayush Paramedics and Health Workers', 'Periodical Training'],
                        ['Administrators of Ayush Institutions', 'Management Training'],
                        ['Ayush Professionals', 'Updated Knowledge and Skills'],
                        ['Doctors', 'Clinical Assistance'],
                    ]}
                />

                <p>
                    <strong>2. Research and Innovation in Ayush:</strong> Research and innovation in Ayush entails the exploration 
                    and development of new therapies, drugs, and practices within the Ayush systems of medicine. It aims to advance 
                    scientific validation, safety, efficacy, and quality control of Ayush products and therapies while promoting 
                    interdisciplinary approaches for holistic healthcare solutions.
                </p>
                <TableSection
                    rows={[
                        ['Researchers and Scientists', 'Research and Development'],
                        ['Ayush Professionals', 'Evidence-Based Support'],
                        ['Ayush Entrepreneurs', 'Intellectual Property Rights Potential'],
                        ['Human Resource in Ayush', 'Scientific Aptitude Development'],
                        ['Collaborative Ventures', 'Joint Research Initiatives'],
                    ]}
                />

                <p>
                    <strong>3. Ayurveda Biology Integrated Health Research:</strong> The Ayurveda Biology Integrated Health Research 
                    Programme aims to bridge traditional Ayurveda principles with modern sciences like molecular biology, pharmacology, 
                    immunology, and bioinformatics. Through high-impact research studies, it seeks to generate evidence, standardize 
                    integrative protocols, and develop a comprehensive understanding of Ayurveda's principles, fostering the potential 
                    integration of Ayurveda practices into national healthcare programs.
                </p>
                <TableSection
                    rows={[
                        ['Researchers and Scientists in Ayurveda Biology', 'Sustainable Platform Development'],
                        ['Integrative Health Researchers', 'High-End Integrative Research Support'],
                        ['Institutions in Biomedical Engineering', 'Technology Development'],
                        ['Doctors and Practitioners', 'Clinical and Real-world Evidence'],
                        ['Educational Institutions', 'Development of Trans-Disciplinary Approaches'],
                    ]}
                />
                <p>
                    This scheme addresses the diverse needs of Ayush practitioners, educators, researchers, and entrepreneurs, developing 
                    a comprehensive approach to elevate the Ayush systems through education, research, and innovation.
                </p>
            </div>
        </div>
    );
};

const TableSection = ({ rows }) => (
    <table className="table table-bordered">
        <thead>
            <tr>
                <th>Beneficiary</th>
                <th>Benefits</th>
            </tr>
        </thead>
        <tbody>
            {rows.map((row, index) => (
                <tr key={index}>
                    <td>{row[0]}</td>
                    <td>{row[1]}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default Scheme1;
