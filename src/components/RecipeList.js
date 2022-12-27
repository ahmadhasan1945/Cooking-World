import { Link } from 'react-router-dom'
import './RecipeList.css'
import { useTheme } from '../hooks/useTheme'


export default function RecipeList(props) {
  const { mode } = useTheme()

  if (props.recipes.length === 0) {
    return <div className='error'>No recipes found...</div>
  }

  return (
    <div className='recipe-list'>
        {props.recipes.map(recipe => (
          <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0,100)}...</div> 
            <Link to={`/recipe/${recipe.id}`}>Cook this now!!</Link>
          </div>
        )) }
    </div> // id, title,cookingtime, etc are all available in the db. 
    //the 'substring' method is used to give us a snippet of a paragraph and we used the positions to chosse where to start 0 to finish 100
  )
}
