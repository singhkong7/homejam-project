import React from "react";
import Content from "../circular-content/circular-content";
import ReviewBox from "../review-component/review-component";
import Shows from "../shoppage/shoppage";
import "./homepage.scss";
function Homepage(){
    return(
       <div className="home">
            <div className="head">
                <image src="https://th.bing.com/th/id/OIP.JS0i4YApyUgZzAzLR_jC7wHaE7?w=299&h=200&c=7&o=5&pid=1.7" alt=""></image>
            </div>
            <Content />
            <Shows />
            <ReviewBox />
       </div>
    )
}
export default Homepage;