import { GoDotFill } from "react-icons/go"
import WebsiteChart from "./WebsiteChart"


export default function WebsiteAnalytics() {
    return(
        <>
            <div className="md:flex sm:flex-row flex-col pr-5 pt-2 pl-4 mb-2 hidden">
                <div className="sm:grow font-bold font-sans">Website Analytics</div>
                <div className="sm:flex hidden mr-10 flex-row items-center font-sans">
                    <GoDotFill color="#A88AD4"/>
                    Total Visitor
                </div>
                <div className="flex-row flex items-center font-sans">
                    <GoDotFill color="#B5D5E1"/>
                    Total Link Visited
                </div>
            </div>
            <div className="md:hidden block self-center">
                Open with Full Screen Web View to See Chart Analytics
            </div>
            <WebsiteChart/>
        </>
    )
}