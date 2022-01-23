import { Record } from "./components/record";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <Record />
      </div>
    </div>
  );
}

export default App;
