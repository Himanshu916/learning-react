import React from "react";
import "./styles.css";
import { getFakeApiData } from "./services/getFakeApiData";
import { il8n } from "./util/il8n";

function WishItem({ item, clickHandler }) {
  const { description, link, id } = item;
  const wishItemStyle = {
    background: "#efefef",
    padding: "10px",
    border: "1px solid black",
    marginTop: "5px"
  };
  return (
    <div
      onClick={() => {
        clickHandler(id);
      }}
      style={wishItemStyle}
    >
      <span>{description} </span>
      <a href={link}>Buy</a>
    </div>
  );
}

function WishList({ wishList, clickHandler }) {
  return wishList.map(wishItem => {
    return (
      <WishItem clickHandler={clickHandler} item={wishItem} key={wishItem.id} />
    );
  });
}

function Appheader() {
  return (
    <>
      <h1>{il8n("mainHeader")}</h1>
      <h2>{il8n("subHeader")}</h2>
    </>
  );
}
function clickHandler(id) {
  console.log(id);
}
export default function App() {
  const data = getFakeApiData();
  return (
    <div className="App">
      <Appheader />
      <WishList clickHandler={clickHandler} wishList={data.wishList} />
    </div>
  );
}
