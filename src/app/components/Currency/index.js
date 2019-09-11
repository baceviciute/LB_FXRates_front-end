import React from "react";
import { useFetch } from "../../utils/fetch-hook";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

function Item(data) {
  return (
    <tr>
      <td>{data.date}</td>
      <td>{data.currency}</td>
      <td>{data.rate}</td>
    </tr>
  );
}

function SelectedCurrency(props) {
  var currency = "AUD";
  var dateFrom = "2019-09-03";
  var dateTo = "2019-09-11";

  const { loading, data, setData } = useFetch();

  return (
    <div className="currencyTable">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Currency</th>
              <th scope="col">Exchange Rate</th>
            </tr>
          </thead>
          <tbody>{data.currencyInfoList.map(Item)}</tbody>
          <tbody>
            <tr>
              <td scope="col">Total change during the period</td>
              <td scope="col">{data.exchangeRateDiffefence}</td>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
}

export default SelectedCurrency;
