import React from "react";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { GoFileDirectory } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
<div className="flex w-1/6 h-screen flex-col bg-blue-900 text-white p-6 justify-between">
      

          <div className=" py-4">
                <h2 className="text-2xl font-bold bg-blue-700  text-center p-5 ">DEXCHANGE</h2>
            <ul>
              <li className="py-2 px-4 hover:bg-blue-500  flex items-center justify-between rounded-lg"> 
                <span className="flex  items-center gap-1">
                <CiSettings />
                Configuration
                </span>
             
                <IoIosArrowDown />

                </li>
                <Link to="/">
                <li className="py-2 pl-12 hover:bg-blue-500 rounded-lg bg-blue-600">Liste Users</li>
                </Link>
                <Link to="/adduser">
                <li className="py-2 px-4 hover:bg-blue-500 flex items-center gap-1 rounded-lg">
              <GoFileDirectory />
                Nouveau</li>
                </Link>
              
            </ul>
          
          </div>
        <div>
        <button className="bg-blue-900  text-white py-2 px-4 mx-4 my-4 rounded-lg hover:bg-blue-500  flex items-center gap-1  text-center">
        <IoIosLogOut className="text-2xl font-bold"/>
            Déconnexion
            </button>
        </div>
        

     
    
    </div>
  );
};

export default Sidebar;
