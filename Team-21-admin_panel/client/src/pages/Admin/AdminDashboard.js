import React from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import { useAuth } from "../../context/auth";
import Charts from "src/views/charts/Charts";
const AdminDashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout>
      <Charts />
    </Layout>
  );
};

export default AdminDashboard;
