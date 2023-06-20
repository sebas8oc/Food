import React from "react";
import { connect } from "react-redux";
import { filterCreated } from "../../../redux/actions"; // Importa la acción `filterCreated`

const FilterCreated = ({ filterCreated }) => {
  const handleFilter = (filterOption) => {
    filterCreated(filterOption);
  };

  return (
    <div>
      <h2>Filter Created</h2>
      <button onClick={() => handleFilter("created")}>Created</button>
      <button onClick={() => handleFilter("not-created")}>Not Created</button>
    </div>
  );
};

const mapDispatchToProps = {
  filterCreated, // Asocia la acción `filterCreated` al componente como una propiedad
};

export default connect(null, mapDispatchToProps)(FilterCreated);
