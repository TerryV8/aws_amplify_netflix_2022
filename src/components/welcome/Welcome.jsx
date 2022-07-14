import React from "react";
import "./welcome.scss";

function Welcome() {
  return (
    <div className="welcome">
      <div className="welcome-message">
        <div>
          <h1>Who's watching?</h1>
        </div>
        <div className="profiles">
          <div class="profile">
            <img
              class="profile-icon"
              src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />

            <div class="profile-name">Chai</div>
          </div>
          <div class="profile">
            <img
              class="profile-icon"
              src="https://occ-0-3040-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229"
            />

            <div class="profile-name">Thierry</div>
          </div>
        </div>
      </div>
    </div>
  );

  <div class="centered-div list-profiles-container">
    <div class="list-profiles">
      <h1 class="profile-gate-label">Who's watching?</h1>
      <ul class="choose-profile">
        <li class="profile">
          <div>
            <a
              class="profile-link"
              tabindex="0"
              data-uia="action-select-profile+primary"
            >
              <div class="avatar-wrapper">
                <div
                  class="profile-icon"
                  style="background-image:url(https://occ-0-3040-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABY5cwIbM7shRfcXmfQg98cqMqiZZ8sReZnj4y_keCAHeXmG_SoqLD8SXYistPtesdqIjcsGE-tHO8RR92n7NyxZpqcFS80YfbRFz.png?r=229)"
                >
                  {" "}
                </div>
              </div>
              <span class="profile-name">thierry</span>
            </a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon svg-icon-profile-lock"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H7V8ZM15 8V9H9V8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM5 11V19H19V11H5ZM11 13V17H13V13H11Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="profile-children"></div>
          </div>
        </li>
        <li class="profile">
          <div>
            <a class="profile-link" tabindex="0">
              <div class="avatar-wrapper">
                <div
                  class="profile-icon"
                  data-profile-guid="PXGPJHXPFNF75GYQWYS7KJL7VY"
                  style="background-image:url(https://occ-0-3040-55.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABe67usDrFCN4Ntk-n_LKNwhJxvQkZf95_L-Sj-QFJ8kqTdWgH9hjmKtEdehX2PRLV7tUm9JGfi9U9SvByCeg8dDumU91qHdLbEGm.png?r=e6c)"
                >
                  {" "}
                </div>
              </div>
              <span class="profile-name">Sami</span>
            </a>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="svg-icon svg-icon-profile-lock"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 8C7 5.23858 9.23858 3 12 3C14.7614 3 17 5.23858 17 8V9H19C20.1046 9 21 9.89543 21 11V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V11C3 9.89543 3.89543 9 5 9H7V8ZM15 8V9H9V8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8ZM5 11V19H19V11H5ZM11 13V17H13V13H11Z"
                fill="currentColor"
              ></path>
            </svg>
            <div class="profile-children"></div>
          </div>
        </li>
      </ul>
    </div>
  </div>;
}

export default Welcome;
