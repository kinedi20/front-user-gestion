import React from "react";
import userImg from "../assets/user_image.jpg";

const Header = () => {
  return (
    <div className="flex justify-between m-5 " >
      <div >
        <h3>Utilisateurs</h3>
      </div>

      <div className="flex">
        <div className="px-3">
          {" "}
          <img
            className="bg-white rounded-full w-12 h-12 "
            src={userImg}
            alt="user picture"
          />
        </div>
        <div className="flex flex-col items-start">
          {" "}
          <p>Omar FALL</p>
          <p>fallo@dexchange.sn</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
