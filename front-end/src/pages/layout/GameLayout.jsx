import Tabs from "../../components/taptap/Tabs";

import walletIcon from "../../assets/img/wallet-icon.svg";
import questionIcon from "../../assets/img/question-icon.svg";
import coinIcon from "../../assets/img/coin.png";

function GameLayout({ children }) {
  return (
    <>
      <div className="container text-center bg-black h-screen flex flex-col items-center px-2">
        <div className="top-bar w-full flex flex-row items-center justify-between py-2">
          <div className="flex flex-row justify-between align-items-center w-full">
            <div className="flex flex-row items-center justify-center">
              <img
                src={coinIcon}
                className="w-12 h-12 m-1 border-2 border-[#0B2113] rounded-full"
                alt="Profile"
                width="50"
              />
              <span className="ml-2 p-2 text-white text-xl">Test</span>
            </div>
            <div className="menu flex flex-row items-center justify-center gap-4">
              <a href="" className=" ">
                <img
                  className="w-12 h-12 p-2 rounded-xl bg-[#0B2113]"
                  src={walletIcon}
                />
              </a>
              <a href="" className=" ">
                <img
                  className="w-12 h-12 p-2 rounded-xl bg-[#0B2113]"
                  src={questionIcon}
                />
              </a>
            </div>
          </div>
        </div>
        {children}
        <Tabs />
      </div>
    </>
  );
}

export default GameLayout;
