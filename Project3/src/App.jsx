import { useState } from 'react'
import './App.css'
import SearchHeader from './SearchHeader'
import searchImages  from './api.jsx';
import ImageList from './components/ImageList'



function App() {

  const [images, setImages] = useState([])
  const handleSubmit = async (term) => {
    const result = await searchImages(term)
    setImages(result);

  } //! SearchHeader'dan getirdiğimiz handleSubmit = valueInput değeri burada term'e eşit olacaktır


  return (

    <div className='App'>
      <SearchHeader search={handleSubmit}/>
      <ImageList
      imagesPlaceholder = {images}
      />

    </div>
  )
}

export default App
