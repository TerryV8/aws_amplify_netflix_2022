import React from "react";
import "./welcome.scss";
import { useSelector, useDispatch } from "react-redux";
import { soundOn, soundOff } from "../../features/soundOnSlice";
import { loggedIn } from "../../features/loggedInSlice";
import { increment, decrement } from "../../features/counterSlice";

function Welcome() {
  const loggedInSelector = useSelector((state) => state.loggedIn.username);
  const dispatch = useDispatch();

  return (
    <div className="welcome">
      <div className="welcome-message">
        <div>
          <h1>Who's watching?</h1>
          <h3>{loggedInSelector}</h3>
        </div>
        <div className="profiles">
          <div class="profile">
            <img
              class="profile-icon"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              onClick={() => {
                dispatch(soundOn());
                dispatch(loggedIn({ username: "Chai" }));
                dispatch(increment());
                console.log("2 clicked on profile");
              }}
            />

            <div class="profile-name">Chai</div>
          </div>
          <div class="profile">
            <img
              class="profile-icon"
              src="https://occ-0-3040-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
              onClick={() => {
                dispatch(soundOff());
                dispatch(loggedIn({ username: "Thierry" }));
                dispatch(decrement());

                console.log("2 clicked on profile");
              }}
            />

            <div class="profile-name">Thierry</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
