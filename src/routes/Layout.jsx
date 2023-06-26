import { Outlet, Link } from "react-router-dom";

import "../routes/Layout.css";
import logo from "./../assets/logo1.png";

export function Layout() {
  return (
    <div className="container">
      <nav className="nav-bar">
        <div className="logo">
          <img src={logo} className="main-logo" alt="Havhesten sin logo" />
        </div>
        <div className="nav-txt">
          <Link to="/">
            <h4>Havhesten</h4>
          </Link>
          <div className="nav-items">
            <Link to="/aktiviteter">
              <li>Aktiviteter</li>
            </Link>
            <Link to="/basseng">
              <li>Basseng</li>
            </Link>
          </div>
        </div>
      </nav>

      <main>
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}
