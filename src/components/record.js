import { albums } from "../album-arts/albums";

const Record = () => {
  return albums.map((album) => (
    <div>
      <img
        src={album.img}
        alt={album.name}
        style={{ height: 200, width: 200 }}
      />
      <p style={{ width: 200, textAlign: "center" }}>{album.name}</p>
    </div>
  ));
};

export { Record };
