import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './educationdetails.css';

const servicesData = [
    {
        title: 'INTERMEDIATE IN (ICS)',
        year: 'Sep 2015 - Aug 2017',
        description: 'Focused study of computer science basics including programming, logic building, and web fundamentals. Completed several academic projects and gained strong analytical and problem-solving skills that built a solid foundation for higher studies in computer science.'
    },
    {
        title: 'FULL STACK LEAD ENGINEER',
        year: 'Jan 2025 - Present',
        description: 'Overseeing the development of enterprise-grade web applications using Next.js, Laravel, and AWS. Responsible for technical architecture, mentoring engineers, and driving innovation across product development.'
    },
    {
        title: "'BACHELOR'S DEGREE IN COMPUTER SCIENCE",
        year: 'Sep 2018 - Aug 2022',
        description: 'Comprehensive study of computer science fundamentals including algorithms, data structures, software engineering, and web development. Graduated with honors and completed multiple projects demonstrating practical application of theoretical concepts.'
    },
    {
        title: "SENIOR FULL STACK ENGINEER",
        year: 'Aug 2023 - Dec 2025',
        description: 'Led the design and development of multi-tenant platforms. Worked on real-time dashboards, authentication flows, and database optimization, ensuring seamless integration between frontend and backend systems.'
    }
];

export default function Educationdetails() {
    const [borderState, setBorderState] = useState({});
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 1024);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';

        setBorderState((prevState) => ({ ...prevState, [index]: `${horizontal}-${vertical}` }));
    };

    const handleMouseLeave = (index) => {
        setBorderState((prevState) => ({ ...prevState, [index]: '' }));
    };

    // Variants for large screens - slide from left to right
    const lgCardVariants = {
        hidden: { opacity: 0, x: -123 },
        visible: (i) => ({
            opacity: 1,
            x: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    // Variants for small screens - slide from top
    const smCardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
        }),
    };

    const cardVariants = isLargeScreen ? lgCardVariants : smCardVariants;

    return (
        <div className="bg-black py-16 px-4 md:px-8">
            <h1 className='font-bold text-3xl lg:pl-[50px] mb-[30px]'>Education</h1>
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Left Column - Service Cards */}
                <div className="w-full  grid grid-cols-1 md:grid-cols-2 gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card bg-[#141414] rounded-2xl p-6 hover:bg-[#1a1a1a] transition-colors duration-300 ${borderState[index] || ''}`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={cardVariants}
                        >
                            <p className='lg:px-[18px] font-medium mb-2'>{service.title}</p>
                            <h3 className="text-white font-bold text-xl md:text-2xl flex gap-5 font-Rajdhani  mb-5 lg:px-[18px]">
                                <span>{service.year}.</span> 
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base mb-5 lg:px-[18px] font-rubik leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>


            </div>
        </div>
    )
}