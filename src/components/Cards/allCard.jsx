import { useState } from "react";
import MediaCard from "../MediaCard/mediacard";
import ProductCard from "./productCard";
import Typography from "@material-ui/core/Typography";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Divider from "@material-ui/core/Divider";
import Sofa from "../../images/sofa.jpg";
import Sofa2 from "../../images/sofa2.webp";
import Sofa3 from "../../images/sofa3.jpg";

const AllCards = (props) => {
  const [count, setCount] = useState([1, 2, 3, 4]);
  // const [ img1 ] = useState('');
  return (
    <div className="">
      <div className="mt-5 mb-3">
        <Typography gutterBottom align="center" variant="h4" component="h2">
          Here is What's New
        </Typography>
        <Typography className="w-50 m-auto" variant="p" component="p">
          Wil jij ook optimaal ontspannen op een comforabele hoekbank van
          steigerhout? Creëer in jouw tuin een favoriete plek om te ontspannen
          op een van onze steigerhouten hoekbanken.
        </Typography>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <ProductCard title="LOUNGESET DELUX" img={Sofa} />
        <ProductCard title="STEIGERHOUTEN TUINSET BROMO" img={Sofa2} />
        <ProductCard title="LOUNGEBANK DELUX" img={Sofa3} />
        <ProductCard title="LOUNGEBANK DELUX" img={Sofa} />
      </div>
    </div>
  );
};

export default AllCards;
