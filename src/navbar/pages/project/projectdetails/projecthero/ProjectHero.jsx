import { useState } from 'react';
import './projecthero.css'
import img1 from '../../../../../assets/project_image/proect_1.webp';
import img2 from '../../../../../assets/project_image/project-detials-swiper-img-1.webp';
import { CiCircleCheck } from "react-icons/ci";
import { TiArrowLeft } from "react-icons/ti";
import { GoArrowRight } from "react-icons/go";
import { FaArrowRight } from 'react-icons/fa'; // npm install react-icons

const coreFeatures = [
    { item: "JQuery and CSS3 Animation" },
    { item: "Image Background" },
    { item: "Remix Icons" }
];

export default function ProjectHero() {
    // State to track hover direction for the card
    const [hoverClass, setHoverClass] = useState('');

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const classes = [];
        if (x < rect.width / 2) classes.push('left');
        else classes.push('right');

        if (y < rect.height / 2) classes.push('top');
        else classes.push('bottom');

        setHoverClass(classes.join(' '));
    };

    const handleMouseLeave = () => {
        setHoverClass('');
    };

    return (
        <div>
            <div className='projectHero'>
                <img src={img1} alt="Hero" />
            </div>
            <div className="projectdetail-container">
                <div className='projectdetail-layout'>

                    {/* Left Side: Main Content */}
                    <div className='project-main-content'>
                        <h1 className='projectdetails-title'>Digital Transformation Advisors</h1>
                        <p className='project-description'>
                            Looking to build a stunning online portfolio? Noir is the ideal template for designers, artists, photographers, and other creative professionals seeking an elegant, high-impact online presence. Crafted with creative needs in mind, Noir offers advanced features to showcase your work beautifully and engage your audience. This fully responsive, retina-ready template adapts seamlessly to any device, delivering a flawless visual experience every time.
                        </p>
                        <br />
                        <p className='project-description'>
                            Whether you’re an established artist or a rising talent, Noir is the all-in-one solution to elevate your portfolio and leave a lasting impression.
                        </p>
                        <ul className='feature-list'>
                            {coreFeatures.map((feature, index) => (
                                <li key={index}>
                                    <CiCircleCheck className="check-icon" />
                                    {feature.item}
                                </li>
                            ))}
                        </ul>

                        <h2 className='section-subtitle'>Elevate Your Business with IT Solutions</h2>
                        <p className='project-description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galltype and scrambled it to make a type specimen book. It has survived not only five centuries tinto electronic typesetting remaining essentially unchanged
                        </p>
                        <img src={img2} alt="" className='img2' />
                        <div className="btns">
                            <button className="nav-btn previous">
                                <span className="icon-circle">
                                    <TiArrowLeft />
                                </span>
                                <span className="btn-text">Previous</span>
                            </button>

                            <button className="nav-btn next">
                                <span className="btn-text">Next</span>
                                <span className="icon-circle">
                                    <GoArrowRight />
                                </span>
                            </button>
                        </div>
                        <div className="form-container">
      <form className="appointment-card">
        <div className="input-grid">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="number" placeholder="Phone Number" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <input type="text" placeholder="Subject" className="form-input" />
        </div>
        
        <textarea 
          placeholder="Your Message" 
          className="form-textarea"
        ></textarea>

        <button type="submit" className="submit-btn">
          Appointment Now <FaArrowRight className="btn-icon" />
        </button>
      </form>
    </div>
                    </div>

                    {/* Right Side: Project Details Card with Hover Effect */}
                    <aside className='project-sidebar'>
                        <div
                            className={`details-card directional-card ${hoverClass}`}
                            onMouseMove={handleMouseMove}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='card-header'>
                                <h3>Project Details</h3>
                                <span className="dot"></span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Name:</span>
                                <span className='value'>Hosting vps</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Author:</span>
                                <span className='value'>Nadimul Islam</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Date:</span>
                                <span className='value'>23 January, 2024</span>
                            </div>
                            <div className='detail-item'>
                                <span className='label'>Tags:</span>
                                <span className='value'>Host Web Design</span>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </div>
    )
}