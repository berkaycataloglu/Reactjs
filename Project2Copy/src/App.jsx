import { useState } from "react";
import "./App.css";
import "./Component.jsx";
import Component from "./Component.jsx";

function App() {
  const [course, setCourse] = useState([]);

  const courses = ["angular", "bootstrap", "ccsharp", "kompleweb"];

  function getRandomCourse() {
    return courses[Math.floor(Math.random() * courses.length)];
  }

  const handleClick = () => {
    setCourse([...course, getRandomCourse()]);
  };

  const courseList = course.map((course, index) => {
    return <Component key = {index} courseName = {course}/>;
  });

  return (
    <div className="App">
      <button className="button1" onClick={handleClick}>Kurs Ekle </button>
      <div className="courseList">{courseList}</div>
    </div>
  );
}

export default App;
