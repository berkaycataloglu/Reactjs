function ImageItem({ image }) {
  console.log(image);
  return (
    <div>
      <img className="imageListImg" src={image.urls.small} alt={image.alt_description} />
    </div>
  );
} //! image urls.small dediğimiz ifade bizim konsolumuza düşen objelerin çindeki url kısımda (small) url linkine ulaşmak.
//! alt description da yine konsolda api den çektiğimiz bi objectin içine girdiğimizde alt_description olarak sunulan değeri yazdık {} kullanarak aldık.

export default ImageItem;
