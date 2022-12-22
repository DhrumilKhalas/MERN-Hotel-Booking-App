import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import Footer from "../../components/footer/Footer";

const List = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  const { data, loading, reFetch } = useFetch(
    `/hotels?city=${destination}&min=${min || 0}&max=${max || 150000}`
  );

  // const [sByName, setSByName] = useState(data);
  // const [sortedData, setSortedData] = useState(data);
  // const [sByRating, setSByRating] = useState(data);
  // const [sByPriceLToH, setSByPriceLToH] = useState(data);
  // const [sByPriceHToL, setSByPriceHToL] = useState(data);
  // const [sByDistance, setSByDistance] = useState(data);
  // const [fByTypeH, setFByTypeH] = useState(data);
  // const [fByTypeR, setFByTypeR] = useState(data);
  // const [fByTypeA, setFByTypeA] = useState(data);
  // const [fByTypeV, setFByTypeV] = useState(data);
  // const [fByTypeC, setFByTypeC] = useState(data);
  // console.log(data);

  // const sortByRating = async () => {
  //   const ratingResult = data.sort((a,b)=> a.rating < b.rating ? 1 : -1);
  //   return setSortedData(ratingResult)
  // }
  // const sortByPriceLToH = async () => {
  //   const pricingLToHResult = data.sort((a,b)=> a.cheapestPrice > b.cheapestPrice ? 1 : -1);
  //    return setSortedData(pricingLToHResult)
  // }
  // const sortByPriceHToL = () => {
  // const pricingHToLResult = data.sort((a,b)=> a.cheapestPrice < b.cheapestPrice ? 1 : -1);
  // setSortedData(pricingHToLResult);
  // }
  // const sortByDistance = () => {
  // const distanceResult = data.sort((a,b)=> a.distance > b.distance ? 1 : -1);
  // setSortedData(distanceResult);
  // }
  // const filterByTypeH = () => {
  //   const filterHotelResult = data.filter((allData) => {
  //     return allData.type === "Hotel";
  //   })
  //   setFByTypeH(filterHotelResult)
  // }
  // const filterByTypeR = () => {
  //   const filterResortResult = data.filter((allData)=>{
  //     return allData.type === "Resort";
  //   })
  //   setFByTypeR(filterResortResult)
  // }
  // const filterByTypeA = () => {
  //   const filterApartmentResult = data.filter((allData)=> {
  //     return allData.type = "Apartment";
  //   })
  //   setFByTypeA(filterApartmentResult)
  // }
  // const filterByTypeV = () => {
  //   const filterVillaResult = data.filter((allData)=> {
  //     return allData.type = "Villa"
  //   })
  //   setFByTypeV(filterVillaResult)
  // }
  // const filterByTypeC = () => {
  //   const filterCabinResult = data.filter((allData)=> {
  //     return allData.type = "Cabin"
  //   })
  //   setFByTypeC(filterCabinResult)
  // }
  // console.log(location.state.destination)

  const handleClick = () => {
    reFetch();
  };

  return (
    <div>
      {location.state.destination === "Ahmedabad" ||
      location.state.destination === "Mumbai" ||
      location.state.destination === "Delhi" ? (
        <>
          <Navbar />
          <Header type="list" />

          <div className="listContainer">
            <div className="listWrapper">
              <div className="listSearch">
                <h1 className="lsTitle">Search</h1>
                <div className="lsItem">
                  <label>Destination</label>
                  <input placeholder={destination} type="text" />
                </div>
                <div className="lsItem">
                  <label>Check-in Date</label>
                  <span onClick={() => setOpenDate(!openDate)}>{`${format(
                    dates[0].startDate,
                    "MM/dd/yyyy"
                  )} to ${format(dates[0].endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && (
                    <DateRange
                      onChange={(item) => setDates([item.selection])}
                      minDate={new Date()}
                      ranges={dates}
                    />
                  )}
                </div>
                <div className="lsItem">
                  <label>Options</label>
                  <div className="lsOptions">
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Min price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMin(e.target.value)}
                        className="lsOptionInput"
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">
                        Max price <small>per night</small>
                      </span>
                      <input
                        type="number"
                        onChange={(e) => setMax(e.target.value)}
                        className="lsOptionInput"
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Adult</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.adult}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Children</span>
                      <input
                        type="number"
                        min={0}
                        className="lsOptionInput"
                        placeholder={options.children}
                      />
                    </div>
                    <div className="lsOptionItem">
                      <span className="lsOptionText">Room</span>
                      <input
                        type="number"
                        min={1}
                        className="lsOptionInput"
                        placeholder={options.room}
                      />
                    </div>
                  </div>
                </div>
                <button onClick={handleClick}>Search</button>
              </div>

              <div className="listResult">
                {loading ? (
                  "loading"
                ) : (
                  <>
                    {/* <button onClick={sortByName}>sort by name</button> */}
                    {/* <button onClick={sortByRating}>sort by rating</button> */}
                    {/* <button onClick={sortByPriceLToH}>sort by price low to high</button> */}
                    {/* <button onClick={sortByPriceHToL}>sort by price high to low</button> */}
                    {/* <button onClick={sortByDistance}>sort by distance</button> */}
                    {/* <button onClick={filterByTypeH}>filter hotel</button> */}
                    {/* <button onClick={filterByTypeR}>filter resort</button> */}
                    {/* <button onClick={filterByTypeA}>filter apartment</button> */}
                    {/* <button onClick={filterByTypeV}>filter villa</button> */}
                    {/* <button onClick={filterByTypeC}>filter cabin</button> */}

                    {data.map((item) => (
                      <SearchItem item={item} key={item._id} />
                    ))}
                  </>
                )}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <Navbar />
          <Header type="list" />
          <div className="noresultmain">
            <div className="noresultleft">
              <img
                src="/images/NoResult.jpg"
                className="noresultimage"
                alt="Not available"
              />
            </div>
            <div className="noresultright">
              <div className="noresulttextone">
                Sorry, No results for {destination}!
              </div>
              <div className="noresulttexttwo">
                Please try to search for either{" "}
                <span className="noresultcityname">Ahmedabad</span> or{" "}
                <span className="noresultcityname">Mumbai</span> or{" "}
                <span className="noresultcityname">Delhi</span>.
              </div>
              <button
                className="noresultbtn"
                onClick={() => {
                  navigate("/");
                }}
              >
                GO BACK
              </button>
            </div>
          </div>
        </>
      )}
      <div className="listFooter">
        <Footer />
      </div>
    </div>
  );
};

export default List;
