import React from "react";
import "./review-item.scss";
const ReviewItem = ({ id,name,image,place,content,flag_image }) => {
  
    return (
      <div className='review-item'>
        <div className="image-section">
            <div
            className='image-review'
            style={{
                backgroundImage: `url(${image})`
            }}
            ></div>
        </div>
        <div className='collection-footer'>
          <span className="id">{id}</span>
          <div
            className='flag'
            style={{
                backgroundImage: `url(${flag_image})`
            }}
            ></div>
          <h1 className='name'>{name}</h1>
          <h5 className='place'>{place}</h5>
          <p className="content">{content}</p>
        </div>
      </div>
    );
  }
  export default ReviewItem;