import { motion } from "framer-motion";
import { useState } from "react";

import TokenImg from "../../assets/img/token.png";
import FriendImg from "../../assets/img/friends.svg";
import GiftImg from "../../assets/img/gift.svg";
import TaskImg from "../../assets/img/task.svg";
import LeaderBoardImg from "../../assets/img/leaderboard.svg";

let tabs = [
  { id: "Earn", label: "Earn", img: TokenImg, path: "/game/earn" },
  { id: "Friends", label: "Friends", img: FriendImg, path: "/game/friend" },
  { id: "Reward", label: "Reward", img: GiftImg, path: "/game/reward" },
  { id: "Tasks", label: "Tasks", img: TaskImg, path: "/game/tasks" },
  {
    id: "Leaderboard",
    label: "Leaderboard",
    img: LeaderBoardImg,
    path: "/game/leaderboard",
  },
];

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tab) => {
    setActiveTab(tab.id);
  };

  return (
    <div className="flex space-x-1 mt-auto p-2 bg-[#0B0B0B] rounded-2xl w-full mb-2 justify-between">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } relative rounded-xl px-3 py-1 text-xs font-medium text-white transition flex flex-col items-center justify-center`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          <img src={tab.img} alt="" className="z-20 w-8 h-8 object-center" />
          <h1
            className={`${
              activeTab === tab.id ? "text-[#0B0B0B] font-bold" : " text-white"
            } z-20 text-xs`}
          >
            {tab.label}
          </h1>
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-0 bg-[#0FF378] mix-blend-normal rounded-xl"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
        </button>
      ))}
    </div>
  );
}
