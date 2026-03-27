import { Link } from "react-router-dom";
import logoSrc from "../../../assets/logo/white-logo-reeni (1).webp";

export default function Logo() {
    return (
        /* 1. Hata diya: ml-[95px], px-4, py-4 (Yeh parent navbar handle karega)
           2. Rakha: flex-shrink-0 (Taake logo kabhi chota ya dabe nahi)
        */
        <div className="flex-shrink-0">
            <Link to="/" aria-label="Go to home" className="block">
                <img
                    src={logoSrc}
                    alt="Reeni logo"
                    /* h-6 ya h-8 use karein taake logo clear dikhe */
                    className="h-6 sm:h-7 md:h-5 w-auto object-contain cursor-pointer"
                />
            </Link>
        </div>
    );
}