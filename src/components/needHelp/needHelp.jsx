import React,{Component} from 'react';
import img from '../../media/woman-removebg-preview.png';
import css from '../needHelp/needHelp.css'
import furnitureImg from '../../media/furniture.jpg';
import cushionImg from '../../media/cushion.jpg';
import companyImg from '../../media/companies.png';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const needhelp = (props) => {
    
    return (
    <>
    <div className="container">
         <div className="row">
             <div className="col-md-2"></div>
             <div className="col-md-3"> 
             <img className="helpImg" src={img} alt="lady Image">
             </img> 
             </div>
             <div className="col-md-2"></div>
             <div className="col-md-3">
             <h2 className="helpHead"style={{marginTop:"4em"}}><strong>{props.NeedHelp}</strong></h2>
             <p className="helpContact" style={{ color:"#7f8c8d"}}>Wij helpen je graag!</p>
             
             <p><PhoneIcon className="mb-2 icons"/>  +32 (0) 14 395 242</p>
             <p><WhatsAppIcon className="mb-2 icons"/> +32 (0) 479 8822 71</p>
      
             </div>
       
                 </div>
                 <div className="row">
                     <div className="col-md-6"> 
                   <center>
                        <img src={furnitureImg} className="furnImg"></img>
                    </center>
                    <h2 className="helpHead">Steigerhouten Tuinmeubelen</h2>
                    <p className="furnText">Ben je op zoek naar nieuwe tuinmeubelen van steigerhout? Dan ben je bij dé steigerhoutlounge aan het goede adres! Je vind bij ons het grootste assortiment van steigerhouten loungemeubelen. Gaat je voorkeur uit naar een hoekbank van steigerhout of kies je liever voor een loungeset van steigerhout? Ook als je minder zitruimte nodig hebt ben je bij ons aan het juiste adres, loungebanken en loungestoelen van steigerhout kun je ook los bij ons bestellen. Wist je dat je bij alle steigerhouten hoekbanken en loungesets van steigerhout een gratis hocker van 60x60 cm krijgt? Al onze steigerhouten tuinmeubelen worden gratis bij je thuis geleverd en op de gewenste plek voor je afgemonteerd. Zo kun je na levering gelijk genieten van je steigerhouten loungemeubelen!!</p>
                    </div>
                    <div className="col-md-6">
                    <center>
                        <img src={cushionImg} className="furnImg"></img>
                    </center>
                    <h2 className="helpHead">Tuinkussens</h2>
                    <p  className="furnText">Maak je steigerhouten tuinmeubel compleet met een outdoor kussenset op maat! Al onze steigerhouten tuinmeubelen worden op maat gemaakt en kun je voorzien van een outdoor kussenset. Met keuze uit meer dan 40 kleuren zit er altijd wel een kleur bij die naar je smaak is! Doordat de buitenkussens voorzien zijn van All-Weather kwaliteiten kun je deze gerust buiten laten tijdens een regenbui, zo kun jij optimaal genieten van jouw steigerhouten tuinmeubel! Kun je je gewenste maat niet vinden op de website? Geen zorgen! Al onze steigerhouten tuinmeubelen worden op maat gemaakt, wij kunnen daardoor (bijna) elke gewenste maat tuinmeubel voor je leveren. Neem contact met ons op voor meer informatie.</p>
                    </div>
                 </div>
                 <div className="row">
                    <img src={companyImg}></img>
                 </div>
     
                 </div>
       </>
)};

export default needhelp;