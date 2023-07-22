import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) =>{
    const {resData} = props;
    const {name,cuisines,costForTwo,avgRating,deliveryTime,cloudinaryImageId} = resData?.data.data;
    return(
        <div className="res-card">
            <div className="res-logo">
                <img src={CDN_URL + cloudinaryImageId} alt="Restaurant main picture"></img>
            </div>
            <h4>{name}</h4>
            <p>{cuisines.join(", ")}</p>
            <p>₹{costForTwo / 100} FOR TWO</p>
            <p>{avgRating} ⭐</p>
            <p>{deliveryTime} Mins. ⏰</p>
        </div>
        
    )
};

export default RestaurantCard;