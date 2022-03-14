import { Link } from "react-router-dom";

export const Dashboard = () => (
  <div>
    <h2>Dashboard Page</h2>
    <div>It shows the product list...</div>
    <Link to="/dashboard/iPhone">Product Details</Link>
  </div>
);
