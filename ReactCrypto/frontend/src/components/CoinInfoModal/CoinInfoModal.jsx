import React from "react";
import { Divider, Flex, Tag, Typography } from "antd";
import CoinInfo from "../CoinInfo/CoinInfo.jsx";

export default function CoinInfoModal({ coin }) {
  return (
    <>
      <CoinInfo coin={coin} withSybmol />

      <Divider />

      <Typography.Paragraph>
        <Typography.Text strong>1 hour: </Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? "green" : "red"}>
          {coin.priceChange1h} %
        </Tag>

        <Typography.Text strong>1 day: </Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? "green" : "red"}>
          {coin.priceChange1d} %
        </Tag>

        <Typography.Text strong>1 week: </Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? "green" : "red"}>
          {coin.priceChange1w} %
        </Tag>
      </Typography.Paragraph>

      <Typography.Paragraph strong>
        Price: {coin.price.toFixed(2)}$
      </Typography.Paragraph>

      <Typography.Paragraph strong>
        Price BTC: {coin.priceBtc}
      </Typography.Paragraph>

      <Typography.Paragraph strong>
        Market Cap: {coin.marketCap}$
      </Typography.Paragraph>

      {coin.contractAddress && (
        <Typography.Paragraph strong>
          Contract Address: {coin.contractAddress}
        </Typography.Paragraph>
      )}
    </>
  );
}
