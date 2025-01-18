import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-10 lg:px-16">
      <Navbar/>
      <Outlet/>
    </div>
  );
};

export default RootLayout;