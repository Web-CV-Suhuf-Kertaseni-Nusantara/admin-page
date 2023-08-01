import { useState } from "react";
import SideBar from "./component/sidebar";
import DashboardContent from "./component/dashboard/DashboardPage";
import ProductsContent from "./component/product/product";


export default function App() {
  const user = { name: 'Resky Adhyaksa', position: 'Manager' }
  const [content, setContent] = useState('Dashboard');
  const handleItemClick = (item) => setContent(item);

  return (
    <>
      <div>
        <div className="md:hidden">
          <nav className="flex bg-green-500 text-white place-content-evenly h-12">
            {/* Add your top navbar content here */}
            <button className='w-full focus:bg-green-600 focus:bg-opacity-100' onClick={() => handleItemClick('Dashboard')}>Dashboard</button>
            <button className='w-full focus:bg-green-600 focus:bg-opacity-100' onClick={() => handleItemClick('Products')}>Products</button>
          </nav>
        </div>
        <div className="md:flex">
          <SideBar onItemClick={handleItemClick}/>
          <main className="sm:flex-1 bg-[#EEEEEE] h-[100vh] overflow-y-scroll">
            {content === 'Dashboard' && <DashboardContent/>}
            {content === 'Products' && <ProductsContent/>}
          </main>
        </div>
      </div>
    </>
  );
}