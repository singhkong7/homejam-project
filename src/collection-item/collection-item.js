import React from "react";
import "../collection-item/collection-item.scss";
import { FaRegBookmark } from 'react-icons/fa'
const CollectionItem = ({ id,name,imageUrl,profession }) => {
  
    return (
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        ></div>
        <div className='collection-footer'>
          <span className="id">{id}</span>
          <span className='price'>{profession}</span>
          <span className='name'>{name}</span>
          <div className="bottom">
            <h2>More info ➡</h2>
            <h3 ><FaRegBookmark /></h3>
          </div> 
        </div>
      </div>
    );
  }
  export default CollectionItem;