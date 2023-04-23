import { useState } from "react";

function SearchHeader({ search }) {
  //!display:flex Ne Arıyosunuz ve texti yan yana yapar fakat flex-directionu column yaparak alt alta gelmeleri sağlanır

  const [valueInput, setValueInput] = useState("");
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    search(valueInput);
  }; //! text içindeki değeri valueInput olarak aldığımız için valueInput değerini app.jsx e yolluyoruz

  const handleChange = (event) => {
    setValueInput ( event.target.value )

  } //! event.target.value burada textin içindeki bilgiyi ifade eder


  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
        <div>{valueInput}</div>
      </form>
    </div>
  );
} //! onChange ifadesi sayesinde textin içine her girilen yeni değerde handleChange fonksiyonuna gider
//! handleChange fonksiyounda da setValueInput ile ValueInput değerini içerde her ne yazıyor ise onla güncelleriz(event.target.value)
//! ValueInputu sürekli güncel tutarak inputa verdiğimiz value={valueInput} text içine gösterilir

//! burada onSubmit formda enter yaptığımız zaman tetiklenmesini sağlar

export default SearchHeader;
