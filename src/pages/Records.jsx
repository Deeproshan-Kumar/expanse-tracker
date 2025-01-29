import React, { useEffect, useState } from "react";
import List from "../components/List";
import { useNavigate } from "react-router-dom";

const Records = () => {
  const navigate = useNavigate();
  const [noRecord, setNoRecord] = useState(false);
  const [expanseRecords, setExpanseRecords] = useState([
    {
      name: "Expanse Title 01",
      amount: "100",
      date: "1/29/2025",
    },
    {
      name: "Expanse Title 02",
      amount: "500",
      date: "2025-01-29",
    },
    {
      name: "Expanse Title 03",
      amount: "150",
      date: "2025-01-26",
    },
    {
      name: "Expanse Title 04",
      amount: "250",
      date: "2025-01-25",
    },
  ]);

  const filteredResults = [...expanseRecords];

  const filterByName = (event) => {
    const value = event.target.value;
    const result = filteredResults.filter((val) => {
        return val.name.toLowerCase().includes(value.toLowerCase());
    });
    if (value == "" || !result) setNoRecord(true);
    setExpanseRecords(result);
  };

  const filterByExpanse = (event) => {
    const value = event.target.value;
    const result = filteredResults.filter((val) => {
        return val.amount.toLowerCase().includes(value.toLowerCase());
    });
    if (value == "" || !result) setNoRecord(true);
    setExpanseRecords(result);
  };

  const filterByDate = (event) => {
    const value = event.target.value;
    const result = filteredResults.filter((val) => {
        return val.date.toLowerCase().includes(value.toLowerCase());
    });
    if (value == "" || !result) setNoRecord(true);
    setExpanseRecords(result);
  };

  const deleteRecord = (index) => {
    const result = filteredResults.filter((_, i) => i !== index);
    setExpanseRecords(result);
    alert("Deleted");
  };

  return (
    <section className="page">
      <button onClick={() => navigate(-1)} className="back-button">
        Back
      </button>
      <div className="container">
        <h2>Records</h2>
        <div className="filters">
          <div>
            <label htmlFor="filter_by_name">Filter By Name</label>
            <input
              type="text"
              name="name"
              placeholder="Filter By Name"
              onChange={filterByName}
            />
          </div>
          <div>
            <label htmlFor="filter_by_expanse">Filter By Expanse</label>
            <input
              type="number"
              name="expanse"
              placeholder="Filter By Expanse"
              onChange={filterByExpanse}
            />
          </div>
          <div>
            <label htmlFor="filter_by_date">Filter By Date</label>
            <input type="date" name="date" onChange={filterByDate} />
          </div>
        </div>
        {filteredResults &&
          filteredResults.map((expanse, index) => {
            const { name, amount, date } = expanse;
            return (
              <div className="expanse-container">
                {noRecord ? (
                  <h4>No Record Found!!</h4>
                ) : (
                  <div>
                    <List
                      key={index}
                      expanse_name={name}
                      expanse_amount={amount}
                      date={date}
                    />
                    <button
                      className="delete_button"
                      onClick={() => deleteRecord(index)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Records;
