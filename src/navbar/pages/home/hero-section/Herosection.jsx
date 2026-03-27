import { FaArrowRight } from "react-icons/fa6";
import TypeEffect from "./typingeffect/TypingEffect";
// Path fix: 4 levels up to reach 'src', then into 'assets'
import HeroSrc from "../../../../assets/heroImage/banner-user-image-one.webp";
import "./hero.css";
import MainSection from "../main/MainSection";
import Experience from "./experience/Experience";
import Skill from "../skill/Skill";
import ScrollAnimationWrapper from "../scroll-animation/ScrollAnimationWrapper";
import Latestervices from "../latestServices/LatestServices";
import Education from "../education/Education";
import Experiencehome from "../experience/Experiencehome";

export default function Herosection() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-center ml-4 sm:ml-8 md:ml-16 h-[100vh] font-rubik px-4 sm:px-6">
                <div className="flex flex-col justify-center animate-slide-in-left">
                    <h1 className="font-bold text-lg sm:text-2xl md:text-3xl lg:text-[28px] mb-2 lg:mb-[28px]">HELLO</h1>
                    <p className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-[54px]">i'm Jane Cooper a</p>
                    <TypeEffect />
                    <p className="mt-7 text-xs sm:text-base md:text-lg lg:text-xl font-rubik text-[#9f9f9f] w-full sm:w-96 md:w-full lg:w-[604px]">
                        I am a Senior Full Stack Developer at heart and, i create features that are best suited for the job at hand.
                    </p>

                    <div className="mt-[52px]">
                        <button className="bg-[#FF014F] profile rounded-full overflow-hidden flex items-center gap-2 px-6 py-3 text-white">
                            <span>View Portfolio</span>
                            <FaArrowRight />
                        </button>
                    </div>
                </div>

                <div className="relative flex items-center justify-end h-full overflow-hidden animate-slide-in-right">
                    <p className="absolute right-0 xl:top-[190px] font-bold xl:mr-[45px] md:text-[100px] lg:text-[90px] text-white z-0 pointer-events-none whitespace-nowrap animate-float">
                        WEB DESIGNER
                    </p>

                    {/* Hero Image */}
                    <img
                        src={HeroSrc}
                        alt="Jane Cooper"
                        className="relative z-5 max-w-full h-auto xl:mt-[80px] object-contain "
                    />
                    <p className="absolute right-0 xl:bottom-[0px] font-bold xl:mr-[45px] md:text-[100px] lg:text-[90px] z-20 pointer-events-none whitespace-nowrap animate-float text-stroke">
                        WEB DESIGNER
                    </p>
                </div>
            </div>
            <ScrollAnimationWrapper>
                <MainSection />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <Experience />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <Skill />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper> 
                <Latestervices />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <Education />
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper>
                <Experiencehome />
            </ScrollAnimationWrapper>
        </>
    );
}