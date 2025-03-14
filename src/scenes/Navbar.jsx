import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { IoMdClose } from "react-icons/io";
import { RiMenu3Fill } from "react-icons/ri";
import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

const NavLink = ({ page, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();
  const commonButtonStyle = `text-center hover:transition hover:scale-105 transition-all duration-500 `;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage
          ? " text-cyan font-bold transition duration-500 border-b-2 border-cyan "
          : " "
      }  ${commonButtonStyle}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

const Navbar = ({ selectedPage, setSelectedPage }) => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const isDesktop = useMediaQuery("(min-width:768px)");

  return (
    <nav
      className={`${
        isDesktop
          ? "backdrop-blur bg-secondary/70 dark:bg-primary/70 "
          : " bg-secondary dark:bg-primary "
      } z-40 w-full fixed top-0 pt-7 pb-4 `}
    >
      <div className="flex items-center justify-between mx-auto w-5/6 ">
        <AnchorLink href="#home" onClick={() => setSelectedPage("home")}>
          <img
            src={`assets/images/${isDark ? "logo2" : "logo"}.png`}
            className="cursor-pointer w-[150px]"
          />
        </AnchorLink>

        {/* Desktop MENU */}
        <div className="flex items-center gap-4">
          {isDesktop && (
            <div className="flex gap-6 font-jost text-lg font-semibold">
              <NavLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <NavLink
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          )}
          {/* Theme Toggle Button (Always Visible) */}

          <div
            className={`flex  items-center cursor-pointer transition-transform duration-500 ml-10
          ${isDark ? "rotate-180" : "rotate-0"}
          `}
            onClick={() => setTheme(isDark ? "light" : "dark")}
          >
            {isDark ? (
              <Sun className="h-6 w-6 text-yellow rotate-0 transition-all" />
            ) : (
              <Moon className="h-6 w-6 text-brown rotate-0 transition-all" />
            )}
          </div>

          {!isDesktop && (
            //? Menu Button
            <RiMenu3Fill
              className="w-7 h-7  text-brown dark:text-cyan"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            />
          )}
        </div>
        {/* MOBILE MENU  */}
        {!isDesktop && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full backdrop-blur bg-secondary/80 dark:bg-primary/80 w-[250px] ">
            {/* Close Icon */}
            <div className="flex justify-end p-10">
              <IoMdClose
                className="h-7 w-7 text-brown dark:text-cyan"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              />
            </div>

            {/* logo */}
            <AnchorLink
              href="#home"
              onClick={() => setSelectedPage("home")}
              className="flex justify-center items-center my-20 "
            >
              <img
                src={`assets/images/${isDark ? "logo2" : "logo"}.png`}
                className=" cursor-pointer w-[150px] "
              />
            </AnchorLink>

            {/* MOBILE MENU ITEMS */}
            <div className="flex flex-col gap-5  items-center justify-center text-xl">
              <NavLink
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Resume"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
              <NavLink
                page="Projects"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />

              <NavLink
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
