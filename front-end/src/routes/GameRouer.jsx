import { Route } from "react-router-dom";

import Game from "../pages/game/Game";
import Earn from "../pages/game/Earn";

const GameRouter = [
  <Route key="game" path="/game" element={<Game />} />,
  <Route key="earn" path="/game/earn" element={<Earn />} />,
];
export default GameRouter;
