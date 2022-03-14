import { Link } from "react-router-dom";

export const Breadcrumb = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Welcome</Link>
      </li>
      <span>&nbsp;&gt;&nbsp;</span>
      <li>
        <Link to="/about">About</Link>
      </li>
      <span>&nbsp;&gt;&nbsp;</span>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
    </ul>
  </nav>
);
