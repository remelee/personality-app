import React from "react";
import "./Form.css";

export default function Form({
  photo,
  setPhoto,
  name,
  setName,
  mbti,
  setMBTI,
  enne,
  setEnne,
  showOutput,
  horo,
  setHoro,
  setShowOutput
}) {
  return (
    <div className="input">
      <form className="form_input"
        onSubmit={(e) => {
          e.preventDefault(); // stop submit from reloading the page
          setShowOutput(true);
        }}
      >
        <label htmlFor="form-photo"><b>Photo:</b> </label>
        <input
          id="form-photo"
          type="file"
          // no `value` because value is a path, but we want to store a photo
          onChange={(event) => {
            setPhoto(URL.createObjectURL(event.target.files[0]));
            setShowOutput(false);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="form-name"><b>Name:</b> </label>
        <input className="form-name"
          id="form-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setShowOutput(false);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="form-horo"><b>Zodiac:</b> </label>
        <input className="form-horo"
          id="form-horo"
          type="text"
          value={horo}
          onChange={(e) => {
            setHoro(e.target.value);
            setShowOutput(false);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="form-mbti"><b>MBTI:</b> </label>
        <input className="form-mbti"
          id="form-mbti"
          type="text"
          value={mbti}
          onChange={(e) => {
            setMBTI(e.target.value);
            setShowOutput(false);
          }}
          required
        />
        <br />
        <br />

        <label htmlFor="form-enne"><b>Enneagram: </b></label>
        <input className="form-enne"
          id="form-enne"
          type="text"
          value={enne}
          onChange={(e) => {
            setEnne(e.target.value);
            setShowOutput(false);
          }}
          required/>
        <br />

        <input className="save-button" type="submit" value="Save" />
      </form>
    </div>
  );
}
