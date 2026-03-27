import { useState } from 'react';
import { motion } from 'framer-motion';
import Counter from './Counter';
import './Experience.css';

export default function Experience() {
    const [borderState, setBorderState] = useState({});

    const smallStats = [
        { label: '20K+', description: 'Our Projects Complete' },
        { label: '10K+', description: 'Our Natural Products' },
        { label: '200+', description: 'Clients Reviews' },
        { label: '1,000+', description: 'Our Satisfied Clients' },
    ];

    const handleMouseMove = (e, index) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const horizontal = x < rect.width / 2 ? 'left' : 'right';
        const vertical = y < rect.height / 2 ? 'top' : 'bottom';

        setBorderState({ ...borderState, [index]: `${horizontal}-${vertical}` });
    };

    const handleMouseLeave = (index) => {
        setBorderState({ ...borderState, [index]: '' });
    };

    // Helper function to split label into numeric and suffix
    const splitLabel = (label) => {
        const match = label.match(/^(\d+(?:,\d{3})*)(.*)/);
        if (match) {
            return { numeric: match[1], suffix: match[2] };
        }
        return { numeric: label, suffix: '' };
    };

    // Animation variants for Framer Motion
    const cardVariants = {
        hidden: { opacity: 0, y: 50 }, // start below
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };

    return (
        <div className="w-full bg-[#0a0a0a] py-16 lg:py-24">
            <section className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-[80px]">

                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] lg:grid-cols-[618px_1fr] gap-6 lg:gap-8 auto-rows-max md:auto-rows-fr">

                    {/* Left Big Card */}
                    <motion.div
                        className="w-full h-full"
                        initial="hidden"
                        animate="visible"
                        custom={0} // delay index
                        variants={cardVariants}
                    >
                        <div className="h-full flex items-center justify-center rounded-2xl bg-[#141414] p-8 lg:p-12 min-h-[300px]">
                            <div className="text-center lg:text-left">
                                <div className="flex justify-between items-center gap-[60px] mb-6">
                                    <span className="text-7xl lg:text-[180px] font-bold text-[#FF014F] leading-none flex">
                                        <Counter value="2" duration={3} ease="easeOut" />
                                        <Counter value="5" duration={0.4} ease="circOut" />
                                    </span>
                                    <span className="text-xl lg:text-[50px] font-bold text-white">
                                        Years Of Experience
                                    </span>
                                </div>

                                <p className="text-[#fff] text-base lg:text-[15px] max-w-lg font-rubik">
                                    Business consulting consultants provide expert advice and guide businesses to help improve performance efficiency.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Stats Grid */}
                    <div className="w-full h-full">
                        <div className="grid grid-cols-2 gap-4 h-full">
                            {smallStats.map((stat, index) => (
                                <motion.div
                                    key={index}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    className={`stat-card rounded-2xl bg-[#141414] font-rubik p-6 flex flex-col items-center justify-center text-center cursor-pointer ${borderState[index] || ''}`}
                                    initial="hidden"
                                    animate="visible"
                                    custom={index + 1} // delay for stagger
                                    variants={cardVariants}
                                >
                                    <div className="text-3xl lg:text-4xl font-bold text-[#fff] mb-2 flex items-center justify-center">
                                        <Counter
                                            value={splitLabel(stat.label).numeric}
                                            duration={1.5}
                                            ease="easeOut"
                                        />
                                        <Counter
                                            value={splitLabel(stat.label).suffix}
                                            duration={0.2}
                                            ease="circOut"
                                        />
                                    </div>
                                    <p className="text-xs lg:text-sm text-[#9f9f9f] font-medium">
                                        {stat.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>

                <div className="mt-16 lg:mt-24 h-px bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent"></div>

            </section>
        </div>
    );
}