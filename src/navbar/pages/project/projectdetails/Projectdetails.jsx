import React from 'react';
import './Projectdetails.css';
import { FaAngleRight } from "react-icons/fa6";
import ProjectHero from './projecthero/ProjectHero';

export default function Projectdetails() {
  return (
    <div className='projectdetails'>
    <section className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Digital Transformation Advisors</h1>
        <nav className="breadcrumb">
          <a href="/" className="breadcrumb-link">Home</a>
          <span><FaAngleRight className="breadcrumb-separator"/></span>
          <span className="breadcrumb-current">Project Details</span>
        </nav>
      </div>
    </section>
    <ProjectHero />
      </div>        
  );
}