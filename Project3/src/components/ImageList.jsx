import ImageItem from "./ImageItem";

function ImageList({imagesPlaceholder}) {

    const deneme = imagesPlaceholder.map((image, index) => {
        return <ImageItem image ={image} key = {index} />;
      })
  return (
    <div className="imageList">
     {deneme}
    </div>
  );
} //! burada kapsayıcı div imageList classındaki div dir çünkü üstte map ile elde ettiğimiz bütün img leri toplıyıp gösteren kısım deneme consttudur.
//! dolayısıyla imagelere vericeğimiz column px değerlerini bu css altında yazıcaz.

export default ImageList;
