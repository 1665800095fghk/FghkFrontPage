import { useState, useEffect } from "react";
import "./App.css";

import Sreach from "./components/Sreach";

function App() {
  const [nowSeach, setNowsreach] = useState("bing");
  const [showSelect, setShowselect] = useState(false);
  const setting = new Map([
    [
      "bing",
      {
        link: "https://cn.bing.com/search?q=",
        iconPath: "https://s.kongfandong.cn/img/icons/bing.svg",
      },
    ],
    [
      "google",
      {
        link: "https://www.google.com/search?q=",
        iconPath: "https://s.kongfandong.cn/img/icons/google.svg",
      },
    ],
    [
      "bilibili",
      {
        link: "https://search.bilibili.com/all?keyword=",
        iconPath: "https://s.kongfandong.cn/img/icons/bilibili.svg",
      },
    ],
  ]);

  useEffect(() => {
    document.addEventListener("keydown", onkeydown)
  }, []);
  const onkeydown = (e) => {
    if(e.shiftKey && e.keyCode === 49 ){
      setNowsreach("bing");
    }else if(e.shiftKey && e.keyCode === 50 ){
      setNowsreach("google");
    }else if(e.shiftKey && e.keyCode === 51 ){
      setNowsreach("bilibili");
    }
  }

  const handleSelect = (key) => {
    return (event) => {
      setNowsreach(key);
    };
  };
  const handleEnableSelect = (event) => {
    setShowselect(!showSelect);
  };

  return (
    <div className="app">
      <div className="head"></div>
      <div className="sreach">
        <img
          className="icon"
          src={setting.get(nowSeach).iconPath}
          onClick={handleEnableSelect}
          alt=""
        />
        <Sreach className="app-sreach" type={setting.get(nowSeach)} />
      </div>
      <div>
        {showSelect ? (
          <div className="select">
            <div className="bing" onClick={handleSelect("bing")}>
              <img className="icon" src={setting.get("bing").iconPath} />
            </div>
            <div className="google" onClick={handleSelect("google")}>
              <img className="icon" src={setting.get("google").iconPath} />
            </div>
            <div className="bilibili" onClick={handleSelect("bilibili")}>
              <img className="icon" src={setting.get("bilibili").iconPath} />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default App;
