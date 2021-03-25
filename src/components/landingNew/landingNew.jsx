import React,{Component} from 'react';
import img from '../../media/mainImg.jpeg';
import  './landingNew.css';

const landingNew = (props) => {
    
    return (
    <div className="">
        <div className="flex-container">  
        <div className="centeredTitle">{props.title}</div>
    <div className="centeredSlogan">Elegant and Chic Furniture for those who Value Comfort</div></div>
  
    <img className="img-fluid" src={img} width="100%"></img>
    </div>
    )};
    
    export default landingNew;