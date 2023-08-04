import { useState } from "react";
import { useEffect } from "react";

export default function CustomerActivity() {
    const [ showLandscape, setLandscape] = useState(true);
    useEffect(() => {
        const handleResize = () => window.innerWidth < 720 ? setLandscape(false) : setLandscape(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return(
        <>
            <div className="flex flex-col text-white p-4 w-64">
                <div className="font-bold font-sans">Customer Activity</div>
                <div>Item 1</div>
            </div>
        </>
    )
}