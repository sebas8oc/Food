import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { filterName } from "../../../redux/actions";
import style from "./Name.module.css"

const FilterName = () => {
  const dispatch = useDispatch();
  const [title, setName] = useState("")

  const handleInput = (e) => {
    setName(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(filterName(title))
    setName("")
  }

  return (
    <div>
      <h2>Search By Name</h2>
      <input onChange={handleInput} type="text"/>
      <button className={style.b1} onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default FilterName;