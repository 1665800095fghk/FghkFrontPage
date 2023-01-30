import { useState } from "react";

import "../styles/Sreach.css";

const Sreach = ({ type }) => {
  const [sreachText, setSreachText] = useState("");

  const handleSetText = (event) => {
    setSreachText(event.target.value);
  };
  const handleSubmit = (event) => {
    window.open(type.link + sreachText, "_blank");
    //window.open(type.link + sreachText, "_self");
    event.preventDefault();
  };

  return (
    <div className="sreach">
      <form action="" onSubmit={handleSubmit}>
        <input className="input" type="text" placeholder="请输入，然后按回车搜索" value={sreachText} onChange={handleSetText} />
        <button className="submit" type="submit">
        </button>
      </form>
    </div>
  );
};

export default Sreach;
