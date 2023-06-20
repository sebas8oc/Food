import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filterHealthScore } from "../../../redux/actions"; // Importa tu acción de filtro de puntuación de salud

const HealthScoreFilter = () => {
  const dispatch = useDispatch();
  const [order, setOrder] = useState("asc"); // Estado para almacenar el orden del filtro

  const handleFilterChange = (e) => {
    setOrder(e.target.value);
    dispatch(filterHealthScore(e.target.value)); // Despacha la acción de filtro de puntuación de salud
  };

  return (
    <div>
      <h2>Filter HealthScore</h2>
      <label htmlFor="healthScoreFilter">Ordenar por puntuación de salud:</label>
      <select id="healthScoreFilter" value={order} onChange={handleFilterChange}>
        <option value="asc">0 - 100</option>
        <option value="desc">100 - 0</option>
      </select>
    </div>
  );
};

export default HealthScoreFilter;

