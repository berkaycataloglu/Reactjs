import { useState } from 'react'
import './App.css'
import Course from './Course'


function getRandomCourse() {
  const courseArray= ['Angular','Bootstrap','Ccsharp','Kompleweb'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]  //! burada üstteki diziyi oluşturduktan sonra corseArray[..] parantezin içi 0 1 2 3 olabiliceği için random sayı oluşturan bir algoritma yazdık 
} //! --> return ederek de getRandomCourse çağılırdığı zaman random Angular Bootstrap Ccsharp Kompleweb değerlerinden biri olarak bilgiyi aktarır

function App() {
  const [courses, setCourses] = useState([]) //! useState kullanımında iç kısım courses'in ilk değeri yani boş dizi olacaktır

  const handleClick = () => {
    setCourses([...courses, getRandomCourse()]) //!burda ...course, getRandomCourse kullanımı course dizisinin elemanlarını tut ve yeni olarak getRandomdan eleman koy demek oluyor
  } //! aşağıdaki useState kullanımında görüldüğü gibi setCourses içi yazdığımız değer coursesin artık yeni değeri olacaktır

  const courseList = courses.map((course,index) => {
    return <Course key ={index} courseName={course}  />;
  }
)

  return (
    <div className="App">
      <button onClick={handleClick} className="appButton">Kurs Ekle</button>
      <div className='courseList'>{courseList}</div> 
    </div> //! burdaki courseList 19. satırdaki tanımlamada inceleneceği üzere aslında tüm kursların tutulduğu veri tabanı denebilir. bunları dizmek için css de wrap kullanılacak
  )
}

export default App
