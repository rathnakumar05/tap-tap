import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import Error500 from "../error/Error500";

import { getTGUser } from "../../utlis/tg";
import { setAuth } from "../../utlis/localstorage";

function Game() {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [isTg, setIsTg] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(function () {
    let unmounted = false;
    let tg_user = getTGUser();
    setIsTg(tg_user !== false);
    if (tg_user !== false) {
      axios
        .post("/api/tg/auth/", tg_user)
        .then((res) => {
          var data = res.data;
          if (data.token) {
            setAuth(data.token);
            setIsLoading(false);
            navigate("/game/earn");
          }
        })
        .catch((err) => {
          if (!unmounted) {
            setError(true);
            setIsLoading(false);
          }
        });
    } else {
      setIsLoading(false);
    }

    return () => {
      unmounted = true;
    };
  }, []);

  return (
    <>
      {isLoading === true && <h1 className="text-white">Loading</h1>}
      {isLoading === false && error === true && <Error500 />}
      {isLoading === false && error === false && isTg === false && (
        <h1 className="text-7xl text-white font-bold text-center">
          Please open in TG
        </h1>
      )}
    </>
  );
}

export default Game;
