import { React, useState } from "react";
import { useDispatch } from "react-redux";
import { filterName } from "../../../redux/actions";

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
      <input onChange={handleInput} type="text"/>
      <button onClick={handleSubmit}>Search</button>
    </div>
  )
}

export default FilterName;