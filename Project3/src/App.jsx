import { useState } from 'react'
import './App.css'
import './SearchHeader.jsx'
import SearchHeader from './SearchHeader.jsx'
import searchImages  from './api';

function App() {

  const [count, setCount] = useState(0)

  const handleSubmit = (term) => {
    console.log(term)
    searchImages(term)
  } //! SearchHeader'dan getirdiğimiz handleSubmit = valueInput değeri burada term'e eşit olacaktır


  return (

    <div className='App'>
      <SearchHeader search={handleSubmit}/>

    </div>
  )
}

export default App
