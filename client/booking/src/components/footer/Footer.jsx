import "./footer.css";
import MailList from "../mailList/MailList";

const Footer = () => {
  let year = new Date().getFullYear();
  return (
    <>  
      <div className="footer">

          <MailList />

          <div className="fLists" id="fLists1">

              <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
              </ul>

              <ul className="fList">
                <li className="fListItem">Homes </li>
                <li className="fListItem">Apartments </li>
                <li className="fListItem">Resorts </li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">Hostels</li>
                <li className="fListItem">Guest houses</li>
              </ul>

              <ul className="fList">
                <li className="fListItem">Unique places to stay </li>
                <li className="fListItem">Reviews</li>
                <li className="fListItem">Unpacked: Travel articles </li>
                <li className="fListItem">Travel communities </li>
                <li className="fListItem">Seasonal and holiday deals </li>
              </ul>

              <ul className="fList">
                <li className="fListItem">Car rental </li>
                <li className="fListItem">Flight Finder</li>
                <li className="fListItem">Restaurant reservations </li>
                <li className="fListItem">Travel Agents </li>
              </ul>

              <ul className="fList">
                <li className="fListItem">Curtomer Service</li>
                <li className="fListItem">Partner Help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Sustainability</li>
                <li className="fListItem">Press center</li>
                <li className="fListItem">Safety Resource Center</li>
                <li className="fListItem">Investor relations</li>
                <li className="fListItem">Terms & conditions</li>
              </ul>

          </div>

          {/* <div className="fLists" id="fLists2">

            <ul className="fList">
                <li className="fListItem">Countries</li>
                <li className="fListItem">Regions</li>
                <li className="fListItem">Cities</li>
                <li className="fListItem">Districts</li>
                <li className="fListItem">Airports</li>
                <li className="fListItem">Hotels</li>
                <li className="fListItem">Homes </li>
                <li className="fListItem">Apartments </li>
                <li className="fListItem">Resorts </li>
                <li className="fListItem">Villas</li>
                <li className="fListItem">Hostels</li>
                <li className="fListItem">Guest houses</li>
                <li className="fListItem">Unique places to stay </li>
                <li className="fListItem">Reviews</li>
                <li className="fListItem">Unpacked: Travel articles </li>
            </ul>    

            <ul className="fList">
                <li className="fListItem">Travel communities </li>
                <li className="fListItem">Seasonal and holiday deals </li>
                <li className="fListItem">Car rental </li>
                <li className="fListItem">Flight Finder</li>
                <li className="fListItem">Restaurant reservations </li>
                <li className="fListItem">Travel Agents </li>
                <li className="fListItem">Curtomer Service</li>
                <li className="fListItem">Partner Help</li>
                <li className="fListItem">Careers</li>
                <li className="fListItem">Sustainability</li>
                <li className="fListItem">Press center</li>
                <li className="fListItem">Safety Resource Center</li>
                <li className="fListItem">Investor relations</li>
                <li className="fListItem">Local Areas</li>
                <li className="fListItem">Terms & conditions</li>
            </ul>          

          </div> */}

          <div className="fText" style={{ textAlign: "center" }}>
              <span className="fTextinner">Copyright © {year} dhrumilbooking</span>
          </div>

      </div>

    </>
  );
};

export default Footer;
