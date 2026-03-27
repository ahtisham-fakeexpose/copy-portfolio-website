import { Link } from "react-router-dom";
import { LiaPencilRulerSolid, LiaBezierCurveSolid } from "react-icons/lia";
import { FaRegLightbulb, FaRegEnvelope } from "react-icons/fa";
import "./MainSection.css";
import { useInView } from "./useInView";

// Card Component with scroll animation
const AnimatedCard = ({ card, index }) => {
  const [ref, isInView] = useInView();

  const delayClass = 
    index === 0 ? 'delay-100' : 
    index === 1 ? 'delay-200' : 
    index === 2 ? 'delay-300' : 
    'delay-400';

  return (
    <div
      ref={ref}
      className={`group flex flex-col items-center text-center min-h-[250px] justify-center border border-[#431422] rounded-2xl bg-transparent cursor-default transition-all duration-600 ${
        isInView ? 'animate-slide-up-fade ' + delayClass : 'opacity-0 translate-y-[30px]'
      }`}
    >
      {/* Icon Container */}
      <div className="text-7xl text-[#FF014F] mb-6">
        {card.icon}
      </div>

      {/* Title */}
      <Link
    to="#"
    className="link-underline cursor-pointer text-xl lg:text-2xl font-bold text-white mb-2 
               hover:text-[#FF014F] transition-colors duration-300"
>
    {card.title}
</Link>

      {/* Counter */}
      <p className="text-[#9f9f9f] text-[15px] font-medium font-rubik">
        {card.count}
      </p>
    </div>
  );
};

export default function MainSection() {
    const cards = [
        { icon: <LiaPencilRulerSolid />, title: "Web Design", count: "120 Projects" },
        { icon: <LiaBezierCurveSolid />, title: "Ui/Ux Design", count: "241 Projects" },
        { icon: <FaRegLightbulb />, title: "Web Research", count: "240 Projects" },
        { icon: <FaRegEnvelope />, title: "Marketing", count: "331 Projects" },
    ];

    return (
        <div className="w-full bg-[#0a0a0a] py-20 font-sans">
            <section className="max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-[80px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((card, index) => (
                        <AnimatedCard key={index} card={card} index={index} />
                    ))}
                </div>
            </section>
        </div>
    );
}