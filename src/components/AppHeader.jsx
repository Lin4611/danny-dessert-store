import logo from "../assets/img/logo.png";
import user_icon from "../assets/img/icon/user-icon.svg";
import cart_icon from "../assets/img/icon/cart-icon.svg";
const iconlist = [
  { imgUrl: user_icon, name: "user" },
  { imgUrl: cart_icon, name: "cart" },
];
const AppHeader = () => {
  return (
    <>
      <header className="max-w-[1920px] w-full px-20 pt-15 bg-[#0037C0] lg:flex justify-between items-center">
        <img
          src={logo}
          alt="logo"
          className="max-w-[396px] w-full h-full object-cover"
        />
        <div className="hidden lg:flex max-w-[177px] justify-between items-center">
          {iconlist.map((p) => (
            <button
              type="button"
              className="w-[70px] h-[70px] flex justify-center items-center"
            >
              <img
                src={p.imgUrl}
                alt={p.name}
                className="w-9 h-9 aspect-square object-cover"
              />
            </button>
          ))}
        </div>
      </header>
    </>
  );
};
export default AppHeader;
