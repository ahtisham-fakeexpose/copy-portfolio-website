import Educationdetails from "./Educationdetails";

export default function Education() {
    return (
        <div className="bg-black  px-4 ">
            <div className="flex flex-col items-center  justify-center text-center max-w-4xl mx-auto">
                {/* Eyebrow heading */}
                <p className="text-red-500 text-[17px] font-md uppercase tracking-wider font-rubik mb-1">
                  Education & Experience
                </p>
                
                {/* Main heading */}
                <h2 className="text-white text-4xl md:text-5xl font-bold mb-3 max-w-xl leading-tight">
                  Empowering Creativity through
                </h2>
                
                {/* Description paragraph */}
                <p className="text-gray-400 text-base md:text-lg lg:text-[15px] font-rubik max-w-2xl leading-relaxed">
                    Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                </p>
            </div>
            <Educationdetails />
        </div>
    )
}