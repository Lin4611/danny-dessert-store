import macaron from "../assets/img/macaron.png";
import sm_banner_shadow from "../assets/img/sm-banner-shadow.png";
import right_arrow_icon from "../assets/img/icon/right-arrow.svg";
const HomePage = () => {
  return (
    <>
      <main className="w-full flex flex-col justify-center items-center bg-primary-default relative mx-auto">
        <section className="bg-[url('../assets/img/sm-banner.png')] w-full flex flex-col items-center justify-center -mt-[75px] pt-[60px] bg-no-repeat bg-contain bg-center">
          <div className="w-full max-w-[271px] flex flex-col items-center gap-7">
            <div className="max-w-[198px] w-full flex flex-col items-center justify-center gap-3 mt-20">
              <h2 className="heading-h4 text-primary-default">台式馬卡龍</h2>
              <h3 className="display-2 text-primary-default">10.31</h3>
              <h4 className="heading-h4 text-primary-default">販売開始</h4>
            </div>
            <button
              type="button"
              className="max-w-[180px] w-full border-[3px] border-primary-default h-[54px] rounded-full heading-h3 text-primary-default"
            >
              BUY NOW
            </button>
            <img
              src={macaron}
              alt="macaron"
              className="max-w-55 w-full h-40 object-cover"
            />
            <img
              src={sm_banner_shadow}
              alt="shadow"
              className="w-full h-[51px] object-cover"
            />
          </div>
          <div className="max-w-[104px] w-full flex flex-col gap-2.5 items-center justify-center py-5">
            <h5 className="label-sm text-secondary-default flex flex-col items-center justify-center ">
              <span className="block">ONLINE</span>
              <span className="block">SHOP</span>
            </h5>
            <button
              type="button"
              className="w-10 h-10 rounded-full bg-secondary-light flex justify-center items-center"
            >
              <img
                src={right_arrow_icon}
                alt="online-page-btn"
                className="w-3 h-2.5 object-cover"
              />
            </button>
          </div>
        </section>
      </main>
    </>
  );
};
export default HomePage;
