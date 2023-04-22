import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import Ccsharp from './images/ccsharp.png';
import Kompleweb from './images/kompleweb.jpg';
import './Course.css'

const courseMap = {
    Angular:Angular,   //! burada part1 kısmı sorgulanan yerdir eğer ki courseMap[] parantez içi ne olursa onun karşısındaki yani part2 deki valuesini alırız -->
    Bootstrap:Bootstrap, //! o value de yukardaki imageleri çekmemizi sağlar yani gelen datalara göre hangi random imageyi basıcağımızı belirlemiş oluruz
    Ccsharp:Ccsharp,  
    Kompleweb:Kompleweb,
}


function Course({courseName}) {
    return (  
        <div className='courseDiv'>
            <img className='course' src={courseMap[courseName]} alt="" /> 
        </div> //! app.jsx den çektiğimiz courseName propsu yani angular,bootstrap,ccs,kmpleweb dörtlüsünden birini üstte yazilan courseMapte arar
    );
}

export default Course;
