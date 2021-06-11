import React from "react";
import Review_data from "../review-data.js";
import ReviewItem from "../review-item/review-item";
import "./review-component.scss";
class ReviewBox extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            collections:Review_data
        };
    }
    render()
    {
       const {collections}=this.state;
       return(<div className="review-show">
               {
                   collections.map(({id, ...otherCollectionsProps})=> (
                       <ReviewItem key={id} {...otherCollectionsProps} />
                   ))
               }
           </div>
       );
    }
}
export default ReviewBox;