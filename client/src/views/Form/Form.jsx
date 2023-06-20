import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../../redux/actions';
import NavBar from '../../components/NavBar/NavBar';
import style from "./Form.module.css"

const dietOptions = [
  "gluten free",
  "dairy free",
  "lacto ovo vegetarian",
  "vegan",
  "paleolithic",
  "primal",
  "whole 30",
  "pescatarian",
  "ketogenic",
  "fodmap friendly"
];

const Form = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [summary, setSummary] = useState('');
  const [healthScore, setHealthScore] = useState(0);
  const [step, setStep] = useState('');
  const [selectedDiets, setSelectedDiets] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const recipeData = {
      title,
      image,
      summary,
      healthScore,
      step,
      diets: selectedDiets,
      createInDb: true,
    };

    dispatch(createRecipe(recipeData));

    // Restablecer el estado del formulario después de enviar los datos
    setTitle('');
    setImage('');
    setSummary('');
    setHealthScore(0);
    setStep('');
    setSelectedDiets([]);
  };

  const handleDietChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedDiets([...selectedDiets, value]);
    } else {
      setSelectedDiets(selectedDiets.filter((diet) => diet !== value));
    }
  };

  return (
    <div className={style.container}>
      
      <NavBar/>
      
      <h1 className={style.titulo}>create your own recipe and share it</h1>
      <form onSubmit={handleSubmit}>

       <h1 className={style.tipo}>Title</h1>
    
        <label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <br />

        <h1 className={style.tipo}>Image</h1>
        <label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>

        <br />

        <h1 className={style.tipo}>Summary</h1>
        <label>
          <input type="text" value={summary} onChange={(e) => setSummary(e.target.value)} />
        </label>

        <br />

        <h1 className={style.tipo}>Health Score</h1>
        <h3 className={style.valor}>1 - 100</h3>
        <label>
          <input type="number" value={healthScore} onChange={(e) => setHealthScore(e.target.valueAsNumber)} />
        </label>

        <br />

        <h1 className={style.tipo}>Steps</h1>
        <label>
          <input type="text" value={step} onChange={(e) => setStep(e.target.value)} />
        </label>

        <br />

        <h1 className={style.tipo}>Diets</h1>
        <label>
        </label>
        <br />
        <div className={style.checkContainer}>
        {dietOptions.map((diet) => (
          <label key={diet} className={style.check}>
            <input
              type="checkbox"
              value={diet}
              checked={selectedDiets.includes(diet)}
              onChange={handleDietChange}
            />
            {diet}
          </label>
        ))}
        </div>
         
        <br />

        <button type="submit" className={style.b1}>Create Recipe</button>
      </form>
    </div>
  );
};

export default Form;
