import React from "react";
import './Output.css';

export default function Output({ photo, horo, name, mbti, enne }) {
  return (
    <div className="output">
      <div className="column">
        <img className="output-photo" src={photo ?? ""} oneError="this.onerror=null; this.src='https://pbs.twimg.com/media/FzEjZL4aYAU4Vzj.jpg';" />
      </div>

      <div className="description">
        <h1 style={{ marginBottom: "-1px", marginTop: "2px" }}>
          {name ?? "error"}
        </h1>
        <p>
          <b>
            <i>{horo ?? "error"}</i>
          </b>
        </p>
        <p>
          <b>
            <i>{mbti ?? "error"}</i>
          </b>
        </p>
        <p><i><b>{enne ?? "error"}</b> </i>
        </p>
      </div>
    </div>
  );
}
