import { useEffect, useState } from "react";
import SideBar from "./component/sidebar";
import LoginContent from "./component/login/LoginPage";
import RegisterContent from "./component/login/RegisterPage";
import DashboardContent from "./component/dashboard/DashboardPage";
import ProductsContent from "./component/product/product";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function App() {
  const [content, setContent] = useState('Login');

  const handleItemClick = (item) => {
    setContent(item);
  };

  const handleCreateAccountClick = () => {
    setContent('Register');
  };

  const handleHaveAccountClick = () => {
    setContent('Login');
  };

  const handleLoginClick = () => {
    setContent('Dashboard');
  };

  // async function checkLogged() {
  //   // let res = await axios.get("http://localhost:5000/me")
  //   try {
  //     const response = await axios.get("http://localhost:5000/me");
  //     console.log(response.msg);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   checkLogged()
  // }, []);
  return (
    <div>
      {content === 'Dashboard' && (
        <nav className="md:hidden flex bg-green-500 text-white place-content-evenly h-12">
          <button className='w-full focus:bg-green-600 focus:bg-opacity-100' onClick={() => handleItemClick('Dashboard')}>Dashboard</button>
          <button className='w-full focus:bg-green-600 focus:bg-opacity-100' onClick={() => handleItemClick('Products')}>Products</button>
        </nav>
      )}

      <div className="md:flex">
        {content === 'Dashboard' && <SideBar onItemClick={handleItemClick} />}

        <main className="sm:flex-1 bg-[#EEEEEE] h-[100vh] overflow-y-scroll">
          {content === 'Login' && <LoginContent onLoginClick={handleLoginClick} onCreateAccountClick={handleCreateAccountClick} />}
          {content === 'Register' && <RegisterContent onHaveAccountClick={handleHaveAccountClick} />}
          {content === 'Dashboard' && <DashboardContent />}
          {content === 'Products' && <ProductsContent />}
        </main>
      </div>
    </div>
  );
}
