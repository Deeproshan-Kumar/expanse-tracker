import React from "react";

const List = ({ expanse_name, expanse_amount, date }) => {
  return (
    <div className="expanse">
      <table>
        <tbody>
          <tr>
            <td>Expanse Name</td>
            <td>{expanse_name}</td>
          </tr>
          <tr>
            <td>Expanse Amount</td>
            <td>{expanse_amount}</td>
          </tr>
          <tr>
            <td>Expanse Date</td>
            <td>{date}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
