// export default DietFilter;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDiets, getByDiet } from '../../../redux/actions';

const DietFilter = () => {
  const dispatch = useDispatch();
  const diets = useSelector((state) => state.diets);

  useEffect(() => {
    dispatch(getDiets());
  }, [dispatch]);

  const handleFilter = (selectedDiet) => {
    dispatch(getByDiet(selectedDiet));
  };

  return (
    <div>
      <h2>Filter by Diet</h2>
      <select onChange={(e) => handleFilter(e.target.value)}>
        <option value="">All</option>
        {diets.map((diet) => (
          <option key={diet} value={diet}>
            {diet}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DietFilter;
