import React from "react";

function Header() {
  return (
    <>
      <section className="flex justify-evenly text-gray-400 h-12 w-screen  fixed items-center text-xl z-30">
        <div>logo</div>
        <div >
          <ul className="flex justify-evenly gap-12" >
            
            <li className=""><a href="">Home</a></li>
            <li className="m"><a href="">about us</a></li>
            <li className="m"><a href="">team</a></li>
            <li className="m"><a href="">contact us</a></li>
          </ul>
        </div>
        <div className="text-black">signup/explore</div>
      </section>
    </>
  );
}

export default Header;
