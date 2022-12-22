import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading } = useFetch("/hotels/countByType");

  const images = [
    "https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2021/01/07/0047/Grand-Hyatt-Mumbai-P618-Hotel-Exterior.jpg/Grand-Hyatt-Mumbai-P618-Hotel-Exterior.4x3.jpg?imwidth=1280",
    "https://media.istockphoto.com/photos/low-angle-view-of-appartment-building-with-vertical-garden-background-picture-id1188062128?k=20&m=1188062128&s=612x612&w=0&h=BL3QGB75hQsAmnU70-O9mvBQNj1xSA9GHhlSatzri1w=",
    "https://www.thelalit.com/wp-content/uploads/2017/02/Executive-Suite-Bedroom-768x492.jpeg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://images.unsplash.com/photo-1505624198937-c704aff72608?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fG9mZmljZSUyMGRlc2slMjBhbmQlMjBjaGFpcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];
 
  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img, i) => (
              <div className="pListItem" key={i}>
                <img src={img} alt="" className="pListImg" />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>
                    {data[i]?.count} {data[i]?.type}s
                  </h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
