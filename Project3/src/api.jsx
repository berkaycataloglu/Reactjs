
import axios from 'axios';

const searchImages = (term) => { //! axios.get ifades unsplashte aradığımız sitesine istek atmamızı sağlar
    const response =axios.get('https://unsplash.com/search/photos', {
      headers: {
        Authorization:'Client-ID 7QqvxVZoy5DhUitYZJEPFWbN_3nT3tBWl5JIlKvSqMw'
      },
      params: {
        querry:term
      }
    }
    )
    return response.data.results
  } 
    
//! headers --> istek atıcağımız yere client ID veririz headers kullanılır
//! params --> querry de sitedeki parametre olduğu için querry olarak kullandık

export default searchImages;