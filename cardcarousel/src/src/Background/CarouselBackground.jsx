import React, { useState } from "react";
import CarouselCard from "../CarouselCard/CarouselCard";
import "./Styles.css";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
const carouselItems = [
  {
    id: 1,
    displayname: "Mobile Internet",
    imgUrl:
      "https://images.ctfassets.net/lzny33ho1g45/how-to-use-personal-hotspot-p-img/c50608cddbacbab405c22008b7a1394f/file.png?w=1520&fm=jpg&q=30&fit=thumb&h=760",
    defaultImg:
      "https://jetmethods.com/wp-content/uploads/2013/08/placeholder.png",
  },
  {
    id: 2,
    displayname: "Home Internet",
    imgUrl:
      "https://www.time.com.my/time-hacks/assets/images/complement-wifi-with-lan.png",
    defaultImg:
      "https://jetmethods.com/wp-content/uploads/2013/08/placeholder.png",
  },
  {
    id: 3,
    displayname: "Get a Device",
    imgUrl:
      "https://mybroadband.co.za/news/wp-content/uploads/2016/01/Wi-Fi-Router.jpg",
    defaultImg:
      "https://jetmethods.com/wp-content/uploads/2013/08/placeholder.png",
  },
  {
    id: 4,
    displayname: "Add a Phone-line",
    imgUrl:
      "https://cimg3.ibsrv.net/cimg/www.doityourself.com/660x300_85-1/567/How-to-Hook-Up-a-Second-Phone-Line-5567.jpg",
    defaultImg:
      "https://jetmethods.com/wp-content/uploads/2013/08/placeholder.png",
  },
  {
    id: 5,
    displayname: "Upgrade",
    imgUrl:
      "https://www.bridgeheadsoftware.com/wp-content/uploads/2018/05/Upgrade-or-Not-Upgrade.jpg",
    defaultImg:
      "https://jetmethods.com/wp-content/uploads/2013/08/placeholder.png",
  },
];

function CarouselBackground(props) {
  const [centerCard, setCenterCard] = useState(3);

  const MapCarouselItems = () => (
    <>
      {carouselItems.map((carouselItem) => (
        <CarouselCard item={carouselItem} centerCard={centerCard} />
      ))}
    </>
  );
  const Btn = ({ isGreater,clicked }) => (
    <div className={`btn ${clicked?"clickedBtn":""}`}>{isGreater ? <FaGreaterThan /> : <FaLessThan />}</div>
  );

  return (
    <div className="backgroudContainer">
      <div className="backgroudCardContainer">
        <MapCarouselItems />
      </div>
      <div className="btnContainer">
        <Btn isGreater={false} clicked={false}/>
        <Btn isGreater={true} clicked={true}/>
      </div>
    </div>
  );
}

export default CarouselBackground;
