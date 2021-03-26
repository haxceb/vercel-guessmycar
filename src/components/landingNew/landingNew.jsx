import React,{Component} from 'react';
import img from '../../media/mainImg.jpeg';
import  './landingNew.css';

const landingNew = (props) => {
    
    return (
    <div className="">
        
    <img className="img-fluid" src={img} width="100%"></img>
    <div className="flex-container">  
        <div className="centeredTitle " style={{float:"left !important"}}>NEW<br/><strong>STYLE 2018</strong></div>
        <div className="centeredSlogan">Elegant and Chic Furniture for those who Value Comfort</div>
        <div className="buttonShop">
           <button className="btn btn-dark" style={{float:"left"}}>Shop Now</button>
        </div>
    </div>

  
    </div>
    )};
    
    export default landingNew;