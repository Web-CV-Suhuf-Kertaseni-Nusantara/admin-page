import {
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Button,
  } from "@material-tailwind/react";

import { PresentationChartBarIcon, CubeIcon, ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { useEffect } from "react";

export default function SideBar({ onItemClick }) {
    /** IMPORT HERE FOR THE USER INFORMATION FROM DB */
    const user = {
        name: 'Resky Adhyaksa',
        position: 'Manager'
    }

    const [ showSidebar, setShowSidebar] = useState(true);
    const [ DashboardActive, setDashboardActive ] = useState(true);

    const handleItemClick = (item) => {
        onItemClick(item)
        if(item == 'Dashboard'){
            setDashboardActive(true)
            // setProductActive(false)
        } else {
            setDashboardActive(false)
            // setProductActive(true)
        }
    }
    
    useEffect(() => {
        const handleResize = () => window.innerWidth < 720 ? setShowSidebar(false) : setShowSidebar(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex flex-col ${showSidebar ? 'block' : 'hidden'} h-[100vh] w-[250px] shadow-xl bg-gradient-to-b from-green-500 from-70% to-green-300 drop-shadow-sideshadow`}>
            <div className="flex flex-col items-center mt-7 text-center">
                <img src="src/assets/profile-pict.png" className="rounded-lg shadow-lg h-20 items-center w-20"></img>
                <Typography variant="h6" color="white" className="font-sans">
                    {user.name}
                </Typography>
                <div className="text-sm text-white font-sans">{user.position}</div>
            </div>
            <List className="text-white mt-5">
                <ListItem onClick={() => { handleItemClick('Dashboard') }} className={`hover:bg-black focus:bg-white focus:bg-opacity-50 ${DashboardActive ? 'bg-white bg-opacity-50' : 'bg-transparent'}`}>
                    <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 fill-white" />
                    </ListItemPrefix>
                    <div className="text-white font-sans">Dashboard</div>
                </ListItem>
                <ListItem onClick={() => { handleItemClick('Products') }} className={`hover:bg-black focus:bg-white focus:bg-opacity-50 ${DashboardActive ? 'bg-transparent' : 'bg-white bg-opacity-50'}`}>
                    <ListItemPrefix>
                    <CubeIcon className="h-5 w-5 fill-white" />
                    </ListItemPrefix>
                    <div className="text-white font-sans">Products</div>
                </ListItem>
            </List>
            <div className="grow"></div>
            <div className="mb-10 self-center">
                <Button className="flex flex-row w-36 h-[35px] font-bold align-middle items-center rounded-full" color="white">
                    <ArrowLeftOnRectangleIcon width={20} className="mr-2 fill-green-700"/>
                    <div className="font-extrabold text-green-700">LOG OUT</div>
                </Button>
            </div>
        </div>
    );
}