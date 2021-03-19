import React,{Component} from 'react';
import img from '../../media/mainImg.jpeg';
import './landing.css';

const landing = (props) => {
    
return (
<>
<h1 className="centeredTitle">{props.title}</h1>
<h3 className="centeredSlogan">Elegant and Chic Furniture for those who Value Comfort</h3>
<img src={img}></img>
</>
)};

export default landing;