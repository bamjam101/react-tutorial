import React from "react";

const Header = () => {
  return (
    <header className="flex h-[10svh] flex-col justify-end">
      <h3 className="text-2xl font-bold">Today</h3>
      <small className="text-brand-white/50 italic">Mar 20, 2023</small>
    </header>
  );
};

export default Header;
