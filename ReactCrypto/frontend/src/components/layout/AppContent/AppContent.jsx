import React from "react";
import { Layout, Typography } from "antd";
import { useCrypto } from "../../../context/cryptoContext.jsx";
import PortfolioChart from "../../PortfolioChart/PortfolioChart.jsx";
import AssetsTable from "../../AssetsTable/AssetsTable.jsx";

const contentStyle = {
  padding: 24,
  margin: 0,
  background: "#001529",
  color: '#fff',
  textAlign: "left",
  height: "calc(100% - 60px)",
};

export default function AppContent() {
  const { assets, crypto } = useCrypto();

  const cryptoPriceMap = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price;
    return acc;
  }, {});

  return (
    <Layout.Content style={contentStyle}>
      <Typography.Title level={3} style={{ color: "white" }}>
        Portfolio:{" "}
        {assets
          .map((asset) => asset.amount * cryptoPriceMap[asset.id])
          .reduce((acc, value) => (acc += value), 0)
          .toFixed(2)}
        $
      </Typography.Title>

      <PortfolioChart />
      <AssetsTable />
    </Layout.Content>
  );
}
