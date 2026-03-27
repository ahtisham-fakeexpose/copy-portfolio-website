import { motion } from 'framer-motion';

export default function Skill() {
    const designSkills = [
        { name: 'DEVELOPMENT', percentage: 90 },
        { name: 'WEBFLOW', percentage: 75 },
        { name: 'DEPLOYMENTS/DEVOPS', percentage: 85 },
        { name: 'AI MODEL TRAINING', percentage: 90 },
    ];

    const developmentSkills = [
        { name: 'DEVELOPMENT', percentage: 90 },
        { name: 'WEBFLOW', percentage: 75 },
        { name: 'DEPLOYMENTS/DEVOPS', percentage: 85 },
        { name: 'AI MODEL TRAINING', percentage: 90 },
    ];

    const SkillBar = ({ name, percentage, delay }) => {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay, ease: 'easeOut' }}
                className="mb-6"
            >
                <div className="flex justify-between items-center mb-4">
                    <span className="text-white font-rubik font-extralight uppercase text-sm lg:text-[14px] tracking-[1px]">
                        {name}
                    </span>
                    <span className="text-sm lg:text-base">
                        {percentage}%
                    </span>
                </div>
                <div className="w-full bg-[#2a2a2a] rounded-full h-2 lg:h-2 overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 1.2, delay: delay + 0.2, ease: 'easeOut' }}
                        className="bg-[#FF014F] h-full rounded-full"
                    />
                </div>
            </motion.div>
        );
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
        }),
    };

    return (
        <div className="w-full bg-[#0a0a0a] py-16 lg:py-24">
            <section className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-[45px]">
                {/* Section Title */}

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-3">
                    {/* Design Skills Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={0}
                        variants={cardVariants}
                    >
                        <div className="rounded-2xl  p-8 lg:p-3">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                                <span className="text-[#fff]">Design</span> Skills
                            </h3>
                            <div>
                                {designSkills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Development Skills Column */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        variants={cardVariants}
                    >
                        <div className="rounded-2xl p-8 lg:p-3">
                            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                                <span className="text-[#FFF]">Development</span> Skills
                            </h3>
                            <div>
                                {developmentSkills.map((skill, index) => (
                                    <SkillBar
                                        key={index}
                                        name={skill.name}
                                        percentage={skill.percentage}
                                        delay={index * 0.1}
                                    />
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}