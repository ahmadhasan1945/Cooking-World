import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)
  const navigate = useNavigate()


  const {postData, data, error} = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e)=> {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }

  const handleAdd = (e)=> {
    e.preventDefault()
    const ing = newIngredient.trim() // delets any whitespace entered by the user

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    //ingredientInput.current.focus()
  }

  // redirect the user after we get a data response
  useEffect(()=>{
    if (data) {
      navigate('/')
    }
  }, [data])
  return (
    <div className='create'>
      <h2 className='page-title'>Add A New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input type='text' onChange={(e)=> setTitle(e.target.value)} value={title} required />
        </label>

        <label>
          <span>Recipe Ingredients:</span>
          <div className='ingredients'>
            <input type='text' onChange={(e)=> setNewIngredient(e.target.value)} value={newIngredient} ref={ingredientInput} />
            <button onClick={handleAdd} className='btn'>Add</button>
          </div>
        </label>
        <p>Current Ingredients: {ingredients.map(ingredient => <em key={ingredient}>{ingredient}, </em>)}</p> {/* we map through each ingredient in the ingredients array */}

        <label>
          <span>Recipe Method</span>
          <textarea onChange={(e)=> setMethod(e.target.value)} value={method} required />
        </label>

        <label>
          <span>Recipe Cooking Time (minutes): </span>
          <input type='number' onChange={(e)=> setCookingTime(e.target.value)} value={cookingTime} required />
        </label>

        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}
