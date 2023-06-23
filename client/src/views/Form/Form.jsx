// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { createRecipe } from '../../redux/actions';
// import NavBar from '../../components/NavBar/NavBar';
// import style from "./Form.module.css";

// const dietOptions = [
//   "gluten free",
//   "dairy free",
//   "lacto ovo vegetarian",
//   "vegan",
//   "paleolithic",
//   "primal",
//   "whole 30",
//   "pescatarian",
//   "ketogenic",
//   "fodmap friendly"
// ];

// const Form = () => {
//   const dispatch = useDispatch();

//   const [title, setTitle] = useState('');
//   const [image, setImage] = useState('');
//   const [summary, setSummary] = useState('');
//   const [healthScore, setHealthScore] = useState(''); // Initialize healthScore as an empty string
//   const [step, setStep] = useState('');
//   const [selectedDiets, setSelectedDiets] = useState([]);
//   const [errors, setErrors] = useState({
//     title: true,
//     image: true,
//     summary: true,
//     healthScore: false, // Set initial healthScore error to false
//     step: true,
//     diets: true
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const recipeData = {
//         title,
//         image,
//         summary,
//         healthScore: parseInt(healthScore), // Convert healthScore to an integer
//         step,
//         diets: selectedDiets,
//         createInDb: true,
//       };

//       dispatch(createRecipe(recipeData));

//       setTitle('');
//       setImage('');
//       setSummary('');
//       setHealthScore(''); // Reset healthScore to an empty string
//       setStep('');
//       setSelectedDiets([]);
//       setErrors({
//         title: false,
//         image: false,
//         summary: false,
//         healthScore: false,
//         step: false,
//         diets: false
//       });
//     }
//   };

//   const validateForm = () => {
//     const formErrors = {
//       title: title.trim() === '',
//       image: image.trim() === '',
//       summary: summary.trim() === '',
//       healthScore: healthScore.trim() === "" || healthScore <= 0 || healthScore > 100,
//       step: step.trim() === '',
//       diets: selectedDiets.length === 0
//     };

//     setErrors(formErrors);

//     return Object.values(formErrors).every((error) => !error);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     const updatedErrors = { ...errors, [name]: value.trim() === '' };
//     setErrors(updatedErrors);

//     if (name === 'healthScore') {
//       setHealthScore(value);
//       if (value.trim() !== '' && (parseInt(value) <= 0 || parseInt(value) > 100)) {
//         updatedErrors.healthScore = true;
//       } else {
//         updatedErrors.healthScore = false;
//       }
//     } else {
//       switch (name) {
//         case 'title':
//           setTitle(value);
//           break;
//         case 'image':
//           setImage(value);
//           break;
//         case 'summary':
//           setSummary(value);
//           break;
//         case 'step':
//           setStep(value);
//           break;
//         default:
//           break;
//       }
//     }

//     setErrors(updatedErrors);
//   };

//   const handleDietChange = (e) => {
//     const { value, checked } = e.target;
//     let updatedSelectedDiets = [];

//     if (checked) {
//       updatedSelectedDiets = [...selectedDiets, value];
//     } else {
//       updatedSelectedDiets = selectedDiets.filter((diet) => diet !== value);
//     }

//     setSelectedDiets(updatedSelectedDiets);
//     setErrors({ ...errors, diets: updatedSelectedDiets.length === 0 });
//   };

//   const isFormIncomplete = Object.values(errors).some((error) => error);
//   const isButtonDisabled =
//     isFormIncomplete ||
//     title.trim() === '' ||
//     image.trim() === '' ||
//     summary.trim() === '' ||
//     healthScore.trim() === '' ||
//     step.trim() === '' ||
//     selectedDiets.length === 0;

//   return (
//     <div className={style.container}>
//       <NavBar />
//       {isFormIncomplete && (
//         <span className={style.error}>Please fill in all the fields to create the recipe.</span>
//       )}
//       <h1 className={style.titulo}>Create your own recipe and share it</h1>
//       <form onSubmit={handleSubmit}>
//         <h1 className={style.tipo}>Title</h1>
//         <label>
//           <input
//             type="text"
//             name="title"
//             value={title}
//             onChange={handleInputChange}
//           />
//           {errors.title && <span className={style.error}>Please enter a title</span>}
//         </label>
//         <br />
//         <h1 className={style.tipo}>Image</h1>
//         <label>
//           <input
//             type="text"
//             name="image"
//             value={image}
//             onChange={handleInputChange}
//           />
//           {errors.image && <span className={style.error}>Please enter an image URL</span>}
//         </label>
//         <br />
//         <h1 className={style.tipo}>Summary</h1>
//         <label>
//           <input
//             type="text"
//             name="summary"
//             value={summary}
//             onChange={handleInputChange}
//           />
//           {errors.summary && <span className={style.error}>Please enter a summary</span>}
//         </label>
//         <br />
//         <h1 className={style.tipo}>Health Score</h1>
//         <label>
//           <input
//             type="number"
//             name="healthScore"
//             value={healthScore}
//             onChange={handleInputChange}
//             className={errors.healthScore ? style.errorInput : ''}
//           />
//           {errors.healthScore && <span className={style.error}>Please enter a valid health score (1-100, not zero)</span>}
//         </label>
//         <br />
//         <h1 className={style.tipo}>Steps</h1>
//         <label>
//           <input
//             type="text"
//             name="step"
//             value={step}
//             onChange={handleInputChange}
//           />
//           {errors.step && <span className={style.error}>Please enter the steps</span>}
//         </label>
//         <br />
//         <h1 className={style.tipo}>Diets</h1>
//         <label></label>
//         <br />
//         <div className={style.checkContainer}>
//           {dietOptions.map((diet) => (
//             <label key={diet} className={style.check}>
//               <input
//                 type="checkbox"
//                 value={diet}
//                 checked={selectedDiets.includes(diet)}
//                 onChange={handleDietChange}
//               />
//               {diet}
//             </label>
//           ))}
//         </div>
//         {errors.diets && <span className={style.error}>Please select at least one diet</span>}
//         <br />
//         <button
//           type="submit"
//           className={`${style.b1} ${isButtonDisabled ? style.disabled : ''}`}
//           disabled={isButtonDisabled}
//         >
//           Create Recipe
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Form;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createRecipe } from '../../redux/actions';
import NavBar from '../../components/NavBar/NavBar';
import style from "./Form.module.css";

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
  const [healthScore, setHealthScore] = useState('');
  const [step, setStep] = useState('');
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [errors, setErrors] = useState({
    title: true,
    image: true,
    summary: true,
    healthScore: true, // Set initial healthScore error to true
    step: true,
    diets: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const recipeData = {
        title,
        image,
        summary,
        healthScore: parseInt(healthScore),
        step,
        diets: selectedDiets,
        createInDb: true,
      };

      dispatch(createRecipe(recipeData));

      setTitle('');
      setImage('');
      setSummary('');
      setHealthScore('');
      setStep('');
      setSelectedDiets([]);
      setErrors({
        title: false,
        image: false,
        summary: false,
        healthScore: false,
        step: false,
        diets: false
      });
    }
  };

  const validateForm = () => {
    const formErrors = {
      title: title.trim() === '',
      image: image.trim() === '',
      summary: summary.trim() === '',
      healthScore: healthScore.trim() === '' || healthScore < 1 || healthScore > 100,
      step: step.trim() === '',
      diets: selectedDiets.length === 0
    };

    setErrors(formErrors);

    return Object.values(formErrors).every((error) => !error);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedErrors = { ...errors, [name]: value.trim() === '' };
    setErrors(updatedErrors);

    if (name === 'healthScore') {
      setHealthScore(value);
      if (value.trim() !== '') {
        const score = parseInt(value);
        if (score < 1 || score > 100) {
          updatedErrors.healthScore = true;
        } else {
          updatedErrors.healthScore = false;
        }
      } else {
        updatedErrors.healthScore = true;
      }
    } else {
      switch (name) {
        case 'title':
          setTitle(value);
          break;
        case 'image':
          setImage(value);
          break;
        case 'summary':
          setSummary(value);
          break;
        case 'step':
          setStep(value);
          break;
        default:
          break;
      }
    }

    setErrors(updatedErrors);
  };

  const handleDietChange = (e) => {
    const { value, checked } = e.target;
    let updatedSelectedDiets = [];

    if (checked) {
      updatedSelectedDiets = [...selectedDiets, value];
    } else {
      updatedSelectedDiets = selectedDiets.filter((diet) => diet !== value);
    }

    setSelectedDiets(updatedSelectedDiets);
    setErrors({ ...errors, diets: updatedSelectedDiets.length === 0 });
  };

  const isFormIncomplete = Object.values(errors).some((error) => error);
  const isButtonDisabled =
    isFormIncomplete ||
    title.trim() === '' ||
    image.trim() === '' ||
    summary.trim() === '' ||
    healthScore.trim() === '' ||
    step.trim() === '' ||
    selectedDiets.length === 0;

  return (
    <div className={style.container}>
      <NavBar />
      {isFormIncomplete && (
        <span className={style.error}>Please fill in all the fields to create the recipe.</span>
      )}
      <h1 className={style.titulo}>Create your own recipe and share it</h1>
      <form onSubmit={handleSubmit}>
        <h1 className={style.tipo}>Title</h1>
        <label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
          {errors.title && <span className={style.error}>Please enter a title</span>}
        </label>
        <br />
        <h1 className={style.tipo}>Image</h1>
        <label>
          <input
            type="text"
            name="image"
            value={image}
            onChange={handleInputChange}
          />
          {errors.image && <span className={style.error}>Please enter an image URL</span>}
        </label>
        <br />
        <h1 className={style.tipo}>Summary</h1>
        <label>
          <input
            type="text"
            name="summary"
            value={summary}
            onChange={handleInputChange}
          />
          {errors.summary && <span className={style.error}>Please enter a summary</span>}
        </label>
        <br />
        <h1 className={style.tipo}>Health Score</h1>
        <label>
          <input
            type="number"
            name="healthScore"
            value={healthScore}
            onChange={handleInputChange}
            className={errors.healthScore ? style.errorInput : ''}
          />
          {errors.healthScore && <span className={style.error}>Please enter a valid health score (1-100)</span>}
        </label>
        <br />
        <h1 className={style.tipo}>Steps</h1>
        <label>
          <input
            type="text"
            name="step"
            value={step}
            onChange={handleInputChange}
          />
          {errors.step && <span className={style.error}>Please enter the steps</span>}
        </label>
        <br />
        <h1 className={style.tipo}>Diets</h1>
        <label></label>
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
        {errors.diets && <span className={style.error}>Please select at least one diet</span>}
        <br />
        <button
          type="submit"
          className={`${style.b1} ${isButtonDisabled ? style.disabled : ''}`}
          disabled={isButtonDisabled}
        >
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default Form;
