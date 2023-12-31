//import { Link } from 'react-router-dom';

import FilterAZ from "../../components/Filters/FilterAZ/FilterAZ";
import FilterCreated from "../../components/Filters/FilterCreated/FilterCreated";
import DietFilter from "../../components/Filters/FilterDiet/Filterdiet";
import FilterName from "../../components/Filters/FilterName/filterName";
import HealthScoreFilter from "../../components/Filters/HealthScore/HealthScore";
import NavBar from "../../components/NavBar/NavBar";
import Pagination from "../../components/Pagination/Pagination";
import Recipes from "../../components/Recipes/Recipes";
import style from "./Home.module.css";

const Home = () => {
  return (
    
    <div className={style.container}>
      <div className={style.blur}></div>
      <div>
      <NavBar/>
      </div>
      <div className={style.filters}>
        <FilterCreated />
        <FilterAZ />
        <FilterName />
        <HealthScoreFilter />
        <DietFilter />
      </div>
      <Pagination />
      <Recipes />
    </div>
  );
};

export default Home;
