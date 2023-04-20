import { useState } from 'react'
import './App.css'
import Course from './Course'


function getRandomCourse() {
  const courseArray= ['Angular','Bootstrap','Ccsharp','Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]  //! burada üstteki diziyi oluşturduktan sonra corseArray[..] parantezin içi 0 1 2 3 olabiliceği için random sayı oluşturan bir algoritma yazdık 
} //! --> return ederek de getRandomCourse çağılırdığı zaman random Angular Bootstrap Ccsharp Kompleweb değerlerinden biri olarak bilgiyi aktarır

function App() {

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]) //!burda ...course, getRandomCourse kullanımı course dizisinin elemanlarını tut ve yeni olarak getRandomdan eleman koy demek oluyor

  } //! aşağıdaki useState kullanımında görüldüğü gibi setCourses içi yazdığımız değer coursesin artık yeni değeri olacaktır

  const [courses, setCourses] = useState([])

  return (
    <div className="App">
      <button onClick={handleClick}>Kurs Ekle</button>

      {
        courses.map((course,index) => {
          return <Course key ={index} courseName={course}  />;
        }
      )
    }

      <Course />



    </div>
  )
}

export default App
