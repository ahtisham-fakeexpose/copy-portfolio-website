import './Portfoioproject.css';
import { FiArrowUpRight } from "react-icons/fi";
import img1 from '../../../../../assets/project_image/proect_1.webp';
import { Link } from 'react-router-dom';

export default function Portfolio_project() {
  const projects = [
    {
        title: "Noir - Creative Portfolio HTML Template",
        category: "Web App",
        img: img1,
        link: '/project/projectdetails'
    },
    {
        title: "My work is driven by the belief that thoughtful",
        category: "Behance",
        link: '/project/projectdetails2'
    }
];
    return (
        <div className="portfolio-containers">
            {projects.map((project, index) => (
                <div key={index} className="project-wrapper">
                    <div className="project-card">
                        <div className="card-glow"></div>
                        <p className="card-label">Personal Portfolio</p>
                        <div className="image-container">
                            {project.img ? (
                                <img src={project.img} alt={project.title} className="project-image" />
                            ) : null}
                        </div>
                    </div>

                    <div className="project-info">
                        <div className="text-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-category">{project.category}</p>
                        </div>
                        <div className="action-button">
                            <Link to={project.link}>
                                <FiArrowUpRight />
                            </Link>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}