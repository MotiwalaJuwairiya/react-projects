import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// import StarRating from './StarRating'

// function Test() {
//   const [movieRating, setMovieRating] = useState(0)
//   return (
//     <div>
//       <StarRating maxRating="7" color="blue" onSetRating={setMovieRating} />
//       <p>You rated {movieRating} stars</p>
//     </div>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}
    />

    <StarRating maxRating={10} color="red" className="test" dafaultRating={3} /> */}

    {/* <Test /> */}
  </React.StrictMode>
)
