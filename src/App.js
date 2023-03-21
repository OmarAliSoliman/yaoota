import { Outlet } from "react-router-dom";
import './css/style.css'

function App() {
  return (
    <div className="App">
      <div className="main_content">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
