import "bulma/css/bulma.css";
import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.css";
import Component from "./Component";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import Csharp from "./images/ccsharp.png";
import Kompleweb from "./images/kompleweb.jpg";

function App() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);
  return (
    <div className="App">

      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">
            Kurslarım
          </p>
        </div>
      </section>

      <section className='section'>
        <div className='columns'>
            <div className='column'>
            <Component
              image={Angular}
              tittle="Angular"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
            </div>
            <div className='column'>
            <Component
              image={Bootstrap}
              tittle="Bootsrap 5"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
            </div>
            <div className='column'>  
            <Component
              image={Csharp}
              tittle="C Csharp"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
            </div>
            <div className='column'>
            <Component
              image={Kompleweb}
              tittle="Kompleweb"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        />
            </div>             
        </div>
      </section>

      <div className='container'>        
      </div>
                  
    </div>
  );
}

export default App;
