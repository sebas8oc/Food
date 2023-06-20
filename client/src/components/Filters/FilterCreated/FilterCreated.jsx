import React from "react";
import { connect } from "react-redux";
import { filterCreated } from "../../../redux/actions"; // Importa la acción `filterCreated`
import style from "./FilterCreated.module.css";

const FilterCreated = ({ filterCreated }) => {
  const handleFilter = (filterOption) => {
    filterCreated(filterOption);
  };

  return (
    <div className={style.container}>
      <h2 className={style.filter}>Filter Created</h2>
      <button className={style.b} onClick={() => handleFilter("created")}>BDD</button>
      <button className={style.b} onClick={() => handleFilter("not-created")}>API</button>
    </div>
  );
};

const mapDispatchToProps = {
  filterCreated, // Asocia la acción `filterCreated` al componente como una propiedad
};

export default connect(null, mapDispatchToProps)(FilterCreated);
