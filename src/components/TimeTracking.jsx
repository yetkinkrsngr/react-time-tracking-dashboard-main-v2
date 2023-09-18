import React, { useState, useEffect } from "react";
import "../index.css";
import jeremy from "../assets/images/image-jeremy.png";
import ellipsis from "../assets/images/icon-ellipsis.svg";

const TimeTracking = () => {
  const [veri, setVeri] = useState([]);
  const [secilenMod, setSecilenMod] = useState("daily");

  useEffect(() => {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => setVeri(data))
      .catch((error) => console.error("Veri çekme hatası:", error));
  }, []);

  const handleModSecimi = (mod) => {
    setSecilenMod(mod);
  };

  return (
    <>
      <main>
        <section>
          <article className="Tracker-profile">
            <div className="Profile">
              <div className="ProfileImg">
                <img src={jeremy} alt="" />
              </div>
              <div className="ProfileName">
                <p>Report for</p>
                <h1>Jeremy Robson</h1>
              </div>
            </div>
            <div className="ProfileSub">
              <div className="ProfileLink">
                <button
                  className="link ProfileLinkSmoke"
                  href=""
                  onClick={() => handleModSecimi("daily")}
                >
                  Daily
                </button>
              </div>
              <div className="ProfileLink">
                <button
                  className="link ProfileLinkWhite"
                  href=""
                  onClick={() => handleModSecimi("weekly")}
                >
                  Weekly
                </button>
              </div>
              <div className="ProfileLink">
                <button
                  className="link ProfileLinkSmoke"
                  href=""
                  onClick={() => handleModSecimi("monthly")}
                >
                  Monthly
                </button>
              </div>
            </div>
          </article>
          <div className="leftSide">
            {veri.map((kartVerisi) => (
              <article className="Tracker-card-info" key={kartVerisi.title}>
                <div
                  className="info-card-icon"
                  style={{ backgroundColor: kartVerisi.bgColor }}
                >
                  <div className="svg-top-icon">
                    <img src={kartVerisi.iconPath} alt="" />
                  </div>
                </div>
                <div className="info-card-text">
                  <div className="text-top">
                    <p>{kartVerisi.title}</p>
                    <div className="svg-file">
                      <img src={ellipsis} alt="" />
                    </div>
                  </div>
                  <p className="Bighours">
                    {kartVerisi.timeframes[secilenMod].current}hrs
                  </p>
                  <p className="Smallhours">
                    Last
                    {secilenMod === "daily"
                      ? " Day - "
                      : secilenMod === "weekly"
                      ? " Week - "
                      : secilenMod === "monthly"
                      ? " Month - "
                      : secilenMod}{" "}
                    <span>{kartVerisi.timeframes[secilenMod].previous}Hrs</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default TimeTracking;
