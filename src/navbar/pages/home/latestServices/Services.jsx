import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import latestServicesImage from '../../../../assets/latestservices/latest-services-user-image-two.webp';
import './Services.css';

const servicesData = [
    {
        number: '01',
        title: 'A Portfolio of Creativity',
        description: 'Business consulting consultants provide expert advice and guida the a businesses to help theme their performance efficiency'
    },
    {
        number: '02',
        title: 'Business Strategy',
        description: 'My work is driven by the belief that thoughtful design and strategic planning can empower brands, transform businesses'
    },
    {
        number: '03',
        title: 'Digital Excellence',
        description: 'Leverage cutting-edge technology to deliver exceptional digital solutions tailored to your needs.'
    }
];

export default function Services() {
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
            <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
                {/* Left Column - Service Cards */}
                <div className="w-full lg:w-1/2 flex flex-col gap-6">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={index}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                            className={`service-card bg-[#141414] rounded-2xl p-6  hover:bg-[#1a1a1a] transition-colors duration-300 ${borderState[index] || ''}`}
                            initial="hidden"
                            animate="visible"
                            custom={index}
                            variants={cardVariants}
                        >
                            <h3 className="text-white font-bold text-xl md:text-2xl flex gap-5 mb-5  lg:px-[18px]">
                                <span>{service.number}.</span> {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm md:text-base mb-5  lg:px-[18px] font-rubik leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Right Column - Image Container */}
                <div className="w-full lg:w-1/2 flex justify-end">
                    <div className="relative w-auto">
                        <img 
                            src={latestServicesImage}
                            alt="Latest Services" 
                            className="w-full lg:w-[570px] h-auto object-cover rounded-2xl shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}