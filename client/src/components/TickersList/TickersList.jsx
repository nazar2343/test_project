import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import io from "socket.io-client";
import {
  getTickers,
  getTickersRequested,
  getTickersError,
} from "../../store/tickers/actions";
import { tickersData } from "../../store/tickers/reducer";
import TickerItem from "../TickerItem";
import { Bars } from "react-loader-spinner";
import styles from "./TickersList.module.css";

const socket = io("http://localhost:4000");

const TickersList = () => {
  const dispatch = useDispatch();
  const { actualTickers, loading, error } = useSelector(tickersData);

  useEffect(() => {
    dispatch(getTickersRequested());
    socket.emit("start");
    socket.on("ticker", (quotes) => dispatch(getTickers(quotes)));
    socket.on("connect_error", function () {
      dispatch(getTickersError());
    });
    return () => {
      socket.removeAllListeners();
    };
  }, [dispatch]);

  const tickerItems = actualTickers.map((tickerData) => (
    <TickerItem key={tickerData.ticker} tickerData={tickerData} />
  ));

  const tableTitles = [
    "company",
    "ticker",
    "price",
    "change",
    "change percent",
    "dividend",
    "yield",
    "last trade time",
  ];

  const titleItems = tableTitles.map((title) => <th key={title}>{title}</th>);

  return (
    <main className={styles.main}>
      {loading && (
        <div className={styles.loader__container}>
          <Bars
            heigth="100"
            width="100"
            color="#72b63b"
            ariaLabel="loading-indicator"
          />
          <p className={styles.loader__text}>Loading</p>
        </div>
      )}
      {error && (
        <p className={styles.error}>
          Sorry, something went wrong. Please, visit site later.
        </p>
      )}
      {!loading && !error && (
        <>
          <h3 className={styles.main__title}>Share Quotes (NASDAQ)</h3>
          <table className={styles.main__table}>
            <thead>
              <tr className={styles.table__heading}>{titleItems}</tr>
            </thead>
            <tbody>{tickerItems}</tbody>
          </table>
        </>
      )}
    </main>
  );
};

export default TickersList;
