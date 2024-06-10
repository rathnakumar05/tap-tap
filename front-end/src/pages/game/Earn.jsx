import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import GameLayout from "../layout/GameLayout";

import { getAuth } from "../../utlis/localstorage";

import PlayIcon from "../../assets/img/play-icon.svg";
import coinBackgroundImg from "../../assets/img/coin-background.png";
import heroBackgroundImg from "../../assets/img/background-hero.png";
import LogoImg from "../../assets/img/logo.png";
import RobotImg from "../../assets/img/robot.png";
import CoinImg from "../../assets/img/coin.png";
import BoltIcon from "../../assets/img/bolt-icon.svg";

function Earn() {
  const navigate = useNavigate();
  const [clicks, setClicks] = useState([]);

  async function test() {
    const token = getAuth();
    axios
      .get("/api/game", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          navigate("/game");
        }
      });
  }

  useEffect(function () {
    let unmounted = false;
    test();
    return () => {
      unmounted = true;
    };
  }, []);

  const handleTouchStart = (e) => {
    const touch = e.touches[0];
    const x = touch.clientX;
    const y = touch.clientY;

    const newClick = {
      id: Math.random(), // unique identifier for each click
      x,
      y,
    };

    setClicks((prevClicks) => [...prevClicks, newClick]);

    setTimeout(() => {
      setClicks((prevClicks) =>
        prevClicks.filter((click) => click.id !== newClick.id)
      );
    }, 1000);
  };

  return (
    <GameLayout>
      <div
        className="hero w-full h-28  mb-4 rounded-3xl bg-no-repeat bg-cover flex flex-col items-center justify-center"
        style={{ backgroundImage: `url(${heroBackgroundImg})` }}
      >
        <a
          href=""
          className="flex flex-row items-center justify-center gap-2 text-xl font-black bg-[#181A1B]  rounded-full text-[#0FF378] py-2 px-2 pr-4"
        >
          <img
            src={PlayIcon}
            className="w-8  h-8  object-contain rounded-full"
            alt=""
          />{" "}
          PLAY
        </a>
      </div>
      <div
        className={`coinsection w-full rounded-3xl flex flex-col items-center justify-center p-4 relative select-none mb-2`}
        style={{
          backgroundImage: `url(${coinBackgroundImg})`,
        }}
      >
        <div className="topbar bg-[#0B2113] border-black border-2 w-full py-2 absolute top-0 z-20 rounded-3xl">
          <a
            href=""
            className="miner flex flex-col items-center justify-center  absolute my-2 ml-4"
          >
            <img src={RobotImg} alt="" className="w-10 h-10" />
            <h1 className="font-bold text-sm text-white">LVL 1</h1>
          </a>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="font-bold text-sm text-white">YOU'VE EARNED</h1>
            <h1 className="font-bold text-3xl text-white flex flex-row gap-2 items-center justify-center">
              {"10,966,579 "}
              <img src={LogoImg} className="w-10 h-10" />
            </h1>
          </div>
        </div>

        <div className="coin-display  mt-20">
          <div className="flex">
            <div className="relative flex">
              <motion.img
                whileTap={{ scale: 1.1 }}
                whileHover={{ scale: 0.9 }}
                src={CoinImg}
                alt="Coin"
                className="img-fluid animate__animated animate__bounce w-60 h-60 z-10 rounded-full"
                onTouchStart={handleTouchStart}
              />
              {clicks.map((click) => (
                <motion.div
                  key={click.id}
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 0, y: -50 }}
                  transition={{ duration: 1 }}
                  className="absolute text-2xl font-bold text-white z-20 flex"
                  style={{ top: click.y - 400, left: click.x - 100 }}
                >
                  +5
                </motion.div>
              ))}
              <div className="h-52 w-52 bg-[#0ff3796c] rounded-full absolute top-0 z-0 blur-2xl"></div>
            </div>
          </div>
        </div>
        <div className="rank flex flex-row gap-2 items-center justify-center mt-10 my-2">
          <div className="progressbar w-60 rounded-full relative h-3 bg-[#050F08]">
            <div className="absoulte h-full w-[50%] bg-gradient-to-r from-[#0FF378] to-[#6ABE6A] rounded-full"></div>
          </div>
          <h1 className="text-sm text-[#0FF378] flex flex-row items-center gap-1">
            1050 <img src={BoltIcon} className="w-3 h-4 " alt="" />
          </h1>
        </div>
      </div>
    </GameLayout>
  );
}

export default Earn;
