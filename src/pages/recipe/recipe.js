import { useFetch } from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import './recipe.css'

export default function Recipe() {
  const {id} = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const {data, isPending, error} = useFetch(url)
  const { mode } = useTheme()
  return (
    <div className={`recipe ${mode}`}>
        {isPending && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {data && 
        <div>
          <p className={`page-title ${mode}`}>{data.title}</p>
          <h3>This recipe takes {data.cookingTime} to make.</h3>
          <ul>
            {data.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)} 
          </ul>
          <p className='method'>{data.method}</p>
        </div>}
    </div>
  )
}
