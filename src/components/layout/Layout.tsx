import { Link } from "react-router-dom";
import "./Layout.css";
import { pages } from "../../App";
import { useLocation } from "react-router-dom";
import StateSelector from "./stateSelector/StateSelector";

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  return (
    <div className="wrapper">
      <nav className="nav">
        <ul className="navList">
          {pages.map((page) => (
            <li key={page.label} className="navItem">
              <Link
                to={page.path}
                className={
                  "navLink " +
                  (location.pathname === page.path ? "navLink-active" : "")
                }
              >
                {page.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="childrenContainer">
        <h1>{pages.find((page) => page.path === location.pathname)?.label}</h1>
        <div className="flex-end">
          <StateSelector />
        </div>
        {children}
      </div>
    </div>
  );
}
