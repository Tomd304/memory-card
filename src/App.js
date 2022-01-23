import { Records } from "./components/records";

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
        <Records />
      </div>
    </div>
  );
}

export default App;
