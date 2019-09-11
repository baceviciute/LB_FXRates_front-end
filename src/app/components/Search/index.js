import React from "react";
import "./index.css";
import { currencyType } from "./data";
import { useFetch } from "../../utils/fetch-hook";

function OptionItem(data) {
  return <option value={data.value}>{data.text}</option>;
}

function Search(props) {
  function getCurrencyData(event) {
    event.preventDefault();
    var currency = event.target.currency.value;
    var dateFrom = event.target.dateFrom.value;
    var dateTo = event.target.dateTo.value;
    console.log(currency);
    console.log(dateFrom);
    console.log(dateTo);
  }

  return (
    <div>
      <form className="searchForm" onSubmit={getCurrencyData}>
        <div>
          <label>Currency</label>
          <select type="text" name="currency">
            {currencyType.content.map(OptionItem)}
          </select>
        </div>

        <div>
          <label>Date From</label>
          <input type="text" name="dateFrom" />
        </div>

        <div>
          <label className="dateTo">Date To</label>
          <input type="text" name="dateTo" />
        </div>

        <button onSubmit={event => getCurrencyData()}>
          Find Exchange Rates
        </button>
      </form>
    </div>
  );
}
{
}

export default Search;
