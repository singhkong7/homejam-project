import React from "react";
import "./circular-content";
import "./circular-content.scss";
import { AiOutlineHeart } from 'react-icons/ai';
import {BiCalendarStar} from 'react-icons/bi';
function Content(){
    return(
        <div className="section">
            <div className="like">
                <h2><AiOutlineHeart /></h2>
                <h1>0</h1>
                <h3>Label</h3>
            </div>
            <div className="label1">
                <h2><BiCalendarStar /></h2>
                <h1>0</h1>
                <h3>Label</h3>
            </div>
            <div className="label2">
                <h2><BiCalendarStar /></h2>
                <h1>0</h1>
                <h3>Label</h3>
            </div>
            <div className="label3">
                <h2><BiCalendarStar /></h2>
                <h1>0</h1>
                <h3>Label</h3>
            </div>
        </div>
    )
}
export default Content;