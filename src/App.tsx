import { Outlet } from "react-router-dom";
import { NavBar } from "./NavBar";

function App() {
  return (
    <>
      <div className="container">
        <NavBar />

        <Outlet />
      </div>
    </>
  );
}

export default App;
