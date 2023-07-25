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

    const [ showSidebar, setShowSidebar ] = useState(true);
    const handleItemClick = (item) => onItemClick(item)

    useEffect(() => {
        const handleResize = () => window.innerWidth < 768 ? setShowSidebar(false) : setShowSidebar(true)
        window.addEventListener('resize', handleResize)

        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={`flex flex-col ${showSidebar ? 'block' : 'hidden'} min-h-screen w-[250px] shadow-xl bg-gradient-to-b from-green-600 from-70% to-green-300 drop-shadow-sideshadow`}>
            <div className="flex flex-col items-center mt-7">
                <img src="src/assets/profile-pict.png" className="rounded-lg shadow-lg h-20 items-center w-20"></img>
                <Typography variant="h6" color="white">
                    {user.name}
                </Typography>
            </div>
            <List className="text-white mt-5">
                <ListItem onClick={() => handleItemClick('Dashboard')}>
                    <ListItemPrefix>
                    <PresentationChartBarIcon className="h-5 w-5 fill-white" />
                    </ListItemPrefix>
                    Dashboard
                </ListItem>
                <ListItem onClick={() => handleItemClick('Products')}>
                    <ListItemPrefix>
                    <CubeIcon className="h-5 w-5 fill-white" />
                    </ListItemPrefix>
                    Products
                </ListItem>
            </List>
            <div className="grow"></div>
            <div className="mb-7 self-center">
                <Button className="flex flex-row w-36 font-bold align-middle items-center" color="white">
                    <ArrowLeftOnRectangleIcon width={20} className="mr-2"/>
                    LOG OUT
                </Button>
            </div>
        </div>
    );
  }