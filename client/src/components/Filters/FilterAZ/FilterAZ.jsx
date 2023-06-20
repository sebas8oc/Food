import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAZ } from "../../../redux/actions";
import style from "./FilterAZ.module.css";

const FilterAZ = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("Ascendente");

  const handlerOrder = (e) => {
    const selectedOrder = e.target.value;
    dispatch(filterAZ(selectedOrder));
    setOrder(selectedOrder);
  };

  return (
    <div className={style.container}>
      <h2>Filter A-Z</h2>
      <select value={order} onChange={handlerOrder}> 
        <option value="Ascendente">A - Z</option>
        <option value="Descendente">Z - A</option>
      </select>
    </div>
  );
};

export default FilterAZ;
