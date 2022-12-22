import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import Hr from "../../components/hr/Hr";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";
// import Loader from "../../components/loader/Loader";
// import LocalAreaM from "../../components/localAreaM/LocalAreaM";
// import { useNavigate } from "react-router-dom";
// import Register from "../register/Register";
 
const Home = () => { 
  return (
    <div className="home">
      <Navbar className="homenavbar"/>
      <Header className="homeheader"/>
      <div className="homeContainer">
        <Featured className="homefeatured"/>
        <h1 className="homeTitle">Browse by property type</h1>
        <PropertyList className="homepropertylist"/>
        <h1 className="homeTitle">Homes guests love</h1>
        <FeaturedProperties className="homefeaturedproperties"/>
        <div className="HomeFooter">
          <Footer className="homefooter"/>
        </div>
        {/* <Loader/> */}
      </div>
    </div>
  );
};

export default Home;
