import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <>
      <div className="fp">
        <div className="fpItem">
          <img 
            src="https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2015/02/17/1555/Hyatt-Regency-Ahmedabad-P007-Facade.jpg/Hyatt-Regency-Ahmedabad-P007-Facade.16x9.jpg?imwidth=1280"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Hyatt Regency, Ahmedabad</span>
          <span className="fpCity">Ahmedabad</span>
          <span className="fpPrice">Starting from ₹ 6510</span>
          <div className="fpRating">
            <button>8.5</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://www.tridenthotels.com/content/gallery/G1.jpg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Trident Hotel, Bandra-Kurla</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from ₹ 14500</span>
          <div className="fpRating">
            <button>8.8</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://www.itchotels.com/content/dam/itchotels/in/umbrella/welcomHotel/hotels/welcomhoteldwarka/gallery/overview/exterior-dusk.png"
            alt=""
            className="fpImg"
          />
          <span className="fpName">Welcome Hotel By ITC</span>
          <span className="fpCity">Delhi</span>
          <span className="fpPrice">Starting from ₹ 5525</span>
          <div className="fpRating">
            <button>8.3</button>
            <span>Excellent</span>
          </div>
        </div>

        <div className="fpItem">
          <img
            src="https://www.thelalit.com/wp-content/uploads/2017/02/Property-Exterior-Night-Image-768x492.jpeg"
            alt=""
            className="fpImg"
          />
          <span className="fpName">The LaLiT Mumbai</span>
          <span className="fpCity">Mumbai</span>
          <span className="fpPrice">Starting from ₹ 11300</span>
          <div className="fpRating">
            <button>8.9</button>
            <span>Excellent</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedProperties;
