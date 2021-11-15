import React, { useState, useEffect } from "react";

const AllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://crafty-pottery.herokuapp.com/allOrders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);
  console.log(orders);
  return (
    <div>
      <h1>ManageOrders</h1>
    </div>
  );
};

export default AllOrders;