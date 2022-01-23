import { albums } from "../album-arts/albums";
import { useState } from "react";
const Records = (props) => {
  const [albumList, setAlbumList] = useState(
    albums.sort(() => Math.random() - 0.5)
  );

  const clickImg = (event) => {
    const index = event.target.dataset.index;
    if (!albumList[index].clicked) {
      props.winPoint();
      setClicked(index);
      shuffleAlbums();
    } else {
      props.loseGame();
      resetAlbums();
    }
  };

  const shuffleAlbums = () => {
    setAlbumList([...albumList].sort(() => Math.random() - 0.5));
  };

  const resetAlbums = () => {
    const tempArr = albumList.map((x) => ({ ...x, clicked: false }));
    setAlbumList(tempArr.sort(() => Math.random() - 0.5));
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "1000px",
        gap: 20,
        flexWrap: "wrap",
      }}
    >
      {albumList.map((album, index) => createRecordItem(album, index))}
    </div>
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
