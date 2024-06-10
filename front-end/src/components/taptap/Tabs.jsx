import { Link, useLocation } from "react-router-dom";

import TokenImg from "../../assets/img/token.png";
import FriendImg from "../../assets/img/friends.svg";
import GiftImg from "../../assets/img/gift.svg";
import TaskImg from "../../assets/img/task.svg";
import LeaderBoardImg from "../../assets/img/leaderboard.svg";

let tabs = [
  { id: "Earn", label: "Earn", img: TokenImg, path: "/game/earn" },
  { id: "Friends", label: "Friends", img: FriendImg, path: "/game/friends" },
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
  const location = useLocation();
  return (
    <div className="flex z-50 w-full h-16 mt-auto max-w-lg mb-2  bg-[#0B0B0B]  rounded-full  bottom-4 left-1/2 sticky">
      <div className=" h-full w-full flex flex-row justify-between gap-1">
        {tabs.map((tab) => (
          <Link
            to={tab.path}
            key={tab.id}
            className={`inline-flex flex-col items-center justify-center p-5 rounded-full  group ${
              location.pathname === tab.path ? "bg-[#0FF378]" : ""
            }`}
          >
            <img
              className={`w-6 h-6 mb-1 text-gray-500  group-hover:text-blue-600 ${
                location.pathname === tab.path && tab.id != "playarea"
                  ? "invert"
                  : ""
              }`}
              src={tab.img}
            />
            <span className="sr-only">{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
