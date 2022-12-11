import React from "react";

type SideBarProps = {
  openNav: boolean;
  setOpenNav: (openNav: boolean) => void;
  children: React.ReactNode | React.ReactNode[];
  position?: string;
  bgColor?: string;
};

export function SideBar({ openNav, setOpenNav, children, position, bgColor }: SideBarProps) {
  const handleSideNav = () => {
    setOpenNav(false);
  };
  return (
    <>
      {openNav ? (
        <nav
          className={`transition-transform duration-300 max-w-sm w-[300px] fixed ${position} top-0 p-4 flex flex-col items-start justify-start h-full bg-${bgColor}-700 md:hidden z-10`}
        >
          <button
            onClick={handleSideNav}
            className="self-end mr-2 border-2 px-2 text-xl text-slate-200 border-red-700 rounded"
          >
            &times;
          </button>
          {children}
        </nav>
      ) : null}
    </>
  );
}
