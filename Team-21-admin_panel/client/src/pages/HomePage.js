import React from "react";
import Layout from "./../components/Layout/Layout";
import { useAuth } from "../context/auth";
import Dashboard from "src/views/dashboard/Dashboard";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home Page"}>
      <Dashboard />
    </Layout>
  );
};

export default HomePage;
