import { albums } from "../album-arts/albums";
import { useState } from "react";
const Records = () => {
  const [albumList, setAlbumList] = useState(
    albums.sort(() => Math.random() - 0.5)
  );

  const clickImg = (event) => {
    const index = event.target.dataset.index;
    if (!albumList[index].clicked) {
      setClicked(index);
    } else {
    }
  };

  const setClicked = (index) => {
    const albumCopy = albumList;
    albumCopy[index].clicked = true;
    setAlbumList([...albumCopy]);
  };

  const createRecordItem = (album, index) => {
    return (
      <Record
        img={album.img}
        clickImg={clickImg}
        index={index}
        name={album.name}
        key={album.name}
      />
    );
  };
  return (
    <div>{albumList.map((album, index) => createRecordItem(album, index))}</div>
  );
};

const Record = (props) => {
  return (
    <div>
      <img
        src={props.img}
        alt={props.name + " album cover artwork"}
        style={{ height: 200, width: 200, boxSizing: "border-box" }}
        onClick={props.clickImg}
        data-index={props.index}
      />
      <p style={{ width: 200, textAlign: "center" }}>{props.name}</p>
    </div>
  );
};

export { Records };
