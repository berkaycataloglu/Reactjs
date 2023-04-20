import React from "react";

const Component = ({image,tittle,description}) => {

  //const tittle = props.tittle;
  //const description = props.description; //! bu kodlar props.tittle yazılarını kısaltmaya yarar.
                                      
  //const {tittle, description} = props; //! fakat bunlar yerine direkt props yerine {tittle,description} yazarsak da olur



  return (
        <div className="card">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={image} alt="Kurslarım"/>
        </figure>
      </div>
      <div className="card-content">
        <div className="media">    
          <div className="media-content">
            <p className="title is-4">{tittle}</p> 
          </div>
        </div>

        <div className="content">
          {description}
        </div>
      </div>
  </div>
 
  );
};

export default Component;
