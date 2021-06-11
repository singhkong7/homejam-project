import React from "react";
import Card_data from "../card-data";
import CollectionItem from "../collection-item/collection-item";
import "./shoppage.scss";
class Shows extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            collections:Card_data
        };
    }
    render()
    {
       const {collections}=this.state;
       return(<div className="show">
               {
                   collections.map(({id, ...otherCollectionsProps})=> (
                       <CollectionItem key={id} {...otherCollectionsProps} />
                   ))
               }
           </div>
       );
    }
}
export default Shows;