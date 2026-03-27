import { FaArrowRight } from "react-icons/fa6";
import TypeEffect from "./typingeffect/TypingEffect";
// Path fix: 4 levels up to reach 'src', then into 'assets'
import HeroSrc from "../../../../assets/heroImage/banner-user-image-one.webp";
import "./hero.css";

export default function Herosection() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 justify-center ml-4 sm:ml-8 md:ml-16 h-[100vh] font-rubik px-4 sm:px-6">
            <div className="flex flex-col justify-center">
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

          <div className="relative flex items-center justify-end h-full overflow-hidden">
    <p className="absolute right-0 top-[170px] font-bold mr-[40px] md:text-[100px] lg:text-[90px] text-white z-0 pointer-events-none whitespace-nowrap animate-float">
        WEB DESIGNER
    </p>

    {/* Hero Image */}
    <img
        src={HeroSrc}
        alt="Jane Cooper"
        className="relative z-10 max-w-full h-auto mt-3.5 object-contain"
    />
</div>
        </div>
    );
}