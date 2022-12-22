import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  const { data, loading } = useFetch(
    "/hotels/countByCity?cities=Ahmedabad,Mumbai,Delhi"
  ); 

  return (
    <div className="featured">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://images.unsplash.com/photo-1515141866783-3222fca27f70?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGFobWVkYWJhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ahmedabad</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/photos/bandra-worli-sea-link-mumbai-picture-id915681526?k=20&m=915681526&s=612x612&w=0&h=IQWwUqnknW_2F-fNhudS_OLEC4xzf3l6O8LYkuMkcX0="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Mumbai</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://media.istockphoto.com/photos/india-gate-in-new-dehli-at-dusk-picture-id481501921?k=20&m=481501921&s=612x612&w=0&h=OVwwQzdyHZA38I2MmutNcF9H_Dcl6_oa89Ez9rYmcfE="
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
