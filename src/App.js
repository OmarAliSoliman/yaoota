import { Outlet } from "react-router-dom";
import CustomNavbar from "./components/CustomNavbar";
import './css/style.css'

function App() {
  return (
    <div className="App">
      <div className="main_content">
        <CustomNavbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
