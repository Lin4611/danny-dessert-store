import logo from "../assets/img/logo.png";
import phone_logo from "../assets/img/phone-logo.png";
import menu_icon from "../assets/img/icon/menu.svg";
import close_icon from "../assets/img/icon/close _icon.svg";
import { useState } from "react";
import { UserIcon } from "./UserIcon";
import { CartIcon } from "./CartIcon";
const AppHeader = () => {
  const [isMenu, setIsMenu] = useState(false);
  return (
    <>
      <header className="w-full bg-[#0037C0]">
        <section className="hidden sm:flex md:flex lg:flex justify-between items-center w-full px-20 pt-15 sm:px-8 sm:max-w-3xl md:max-w-5xl lg:max-w-[1920px]">
          <img
            src={logo}
            alt="logo"
            className="max-w-[396px] w-full h-full object-cover"
          />
          <div className="flex max-w-[177px] w-full justify-between items-center">
            <button
              type="button"
              className="w-[70px] h-[70px] flex justify-center items-center hover:rounded-full hover:shadow-2xl hover:shadow-[#F7F3D6]"
            >
              <UserIcon
                className="w-9 h-9 text-[#FBF8EB] aspect-square"
                color="currentColor"
              />
            </button>
            <button
              type="button"
              className="w-[70px] h-[70px] flex justify-center items-center hover:rounded-full hover:shadow-2xl hover:shadow-[#F7F3D6]"
            >
              <CartIcon
                className="w-9 h-9 text-[#FBF8EB] aspect-square"
                color="currentColor"
              />
            </button>
          </div>
        </section>
        <section className="flex sm:hidden md:hidden lg:hidden w-full items-center px-3 py-5 relative">
          <div className="w-full flex items-center justify-end">
            <img
              src={logo}
              alt="logo"
              className="max-w-[142px] h-full object-cover w-full m-auto"
            />
            <button
              type="button"
              className="max-w-7 w-full h-5 justify-self-end active:rounded-full active:shadow-2xl active:shadow-[#F7F3D6]"
              onClick={() => setIsMenu(!isMenu)}
            >
              <img
                src={menu_icon}
                alt="menu"
                className="w-full object-cover "
              />
            </button>
          </div>
          <div
            className={`${
              isMenu ? "flex" : "hidden"
            } fixed inset-0 z-20 w-full h-full bg-[#F7F3D6] pt-5 flex-col items-center px-2.5 scroll-auto`}
          >
            <div className="flex w-full h-[47px] mb-[71px] justify-end">
              <button
                type="button"
                className="max-w-[47px] w-full h-[47px] flex justify-center items-center active:rounded-full active:shadow-2xl active:shadow-[#F7F3D6] "
                onClick={() => setIsMenu(!isMenu)}
              >
                <img
                  src={close_icon}
                  alt="close"
                  className="w-[25px] h-[25px] object-cover aspect-square"
                />
              </button>
            </div>

            <div className="max-w-[289px] h-[58px] mb-25 flex items-center justify-center">
              <img
                src={phone_logo}
                alt="logo"
                className="w-full object-cover"
              />
            </div>
            <nav className="flex flex-col max-w-[145px] w-full gap-[38px] items-center">
              <a
                href="#"
                className="w-full py-2.5 flex items-center justify-center"
              >
                <span className="text-[#0037C0] text-xl font-bold tracking-[1.6px]">
                  New
                </span>
              </a>
              <a
                href="#"
                className="w-full py-2.5 flex items-center justify-center"
              >
                <span className="text-[#0037C0] text-xl font-bold tracking-[1.6px]">
                  ABOUT
                </span>
              </a>
              <a
                href="#"
                className="w-full py-2.5 flex items-center justify-center"
              >
                <span className="text-[#0037C0] text-xl font-bold tracking-[1.6px]">
                  PRODUCT
                </span>
              </a>
              <a
                href="#"
                className="w-full py-2.5 flex items-center justify-center"
              >
                <span className="text-[#0037C0] text-xl font-bold tracking-[1.6px]">
                  REVIEW
                </span>
              </a>
            </nav>
            <div className="flex max-w-[125px] w-full h-[70px] justify-between items-center mt-[58px]">
              <button
                type="button"
                className="w-[70px] h-[70px] flex justify-center items-center hover:rounded-full hover:shadow-2xl hover:shadow-[#F7F3D6]"
              >
                <UserIcon
                  className="w-9 h-9 text-[#0037C0] aspect-square"
                  color="currentColor"
                />
              </button>
              <button
                type="button"
                className="w-[70px] h-[70px] flex justify-center items-center hover:rounded-full hover:shadow-2xl hover:shadow-[#F7F3D6]"
              >
                <CartIcon
                  className="w-9 h-9 text-[#0037C0] aspect-square"
                  color="currentColor"
                />
              </button>
            </div>
          </div>
        </section>
      </header>
    </>
  );
};
export default AppHeader;
