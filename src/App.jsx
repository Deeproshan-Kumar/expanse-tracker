import { useContext, useState } from "react";
import {useNavigate} from "react-router-dom";
import AppContext from "./contexts/AppContext";
import "./App.css";

function App() {
  const {expanses, setExpanses} = useContext(AppContext);
  const navigate = useNavigate();
  const [data, setData] = useState({
    expanse_name: "",
    expanse_amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const {name, value} = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit= (event) => {
    event.preventDefault();
    setExpanses({expanses: data});
    navigate("/records");
  }

  return (
    <div className="app" id="app">
      <div className="wrapper">
        <h2>Expanse Tracker</h2>
        <div className="form">
          <div className="field">
            <label htmlFor="expanse_name">Expanse Name</label>
            <input
              type="text"
              name="expanse_name"
              value={data.expanse_name}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="expanse_amount">Expanse Amount</label>
            <input
              type="number"
              name="expanse_amount"
              value={data.expanse_amount}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              name="date"
              value={data.date}
              onChange={handleChange}
            />
          </div>
          <button className="button" onClick={handleSubmit}>Add Expanse</button>
        </div>
      </div>
    </div>
  );
}

export default App;
