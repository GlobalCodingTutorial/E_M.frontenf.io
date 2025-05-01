import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex bg-slate-600 h-16 px-16 items-center">
        <h1 className="text-3xl font-bold flex">EM Service Incharge</h1>
        <div className="space-x-4 ml-auto font-bold">
          <a className="hover:text-blue-400 " href="/">
            Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
