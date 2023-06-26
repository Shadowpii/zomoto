import React from "react";
import "./topBrands.css";
import NextArrow from "../../common/carousel/nextArrow";
import PrevArrow from "../../common/carousel/prevArrow";
import Slider from "react-slick";

const TopBrandsList=[
  {
    id: 1,
    time: "31 min",
    cover: "https://b.zmtcdn.com/data/pictures/3/18025083/1085ec8abdcddccb38f565dded54a6d9_o2_featured_v2.jpg",
  },
  {
    id: 2,
    time: "33 min",
    cover: "https://b.zmtcdn.com/data/pictures/3/20380623/abac7fa16cd53d759ede83d573fea13b_o2_featured_v2.jpg",
  },
  {
    id: 3,
    time: "33 min",
    cover: "https://b.zmtcdn.com/data/pictures/7/50677/8a05f2519717c9c1da2bd757caa51e8b_o2_featured_v2.jpg",
  },
  {
    id: 4,
    time: "32 min",
    cover: "https://b.zmtcdn.com/data/pictures/chains/4/55634/b060dff55283459118c532b9947aec19_o2_featured_v2.jpg",
  },
  {
    id: 5,
    time: "35 min",
    cover: "https://b.zmtcdn.com/data/pictures/chains/4/18221544/247a07740d8f841fc6ca503cbba23188_o2_featured_v2.jpg",
  },
  {
    id: 6,
    time: "40 min",
    cover: "https://b.zmtcdn.com/data/pictures/chains/5/61555/a6c8129329bf976270361b45058f110b_o2_featured_v2.jpg",
  },
  {
    id: 7,
    time: "25 min",
    cover: "https://b.zmtcdn.com/data/pictures/1/20628561/a3dc4f595de9789f58dfb3b864f22638_o2_featured_v2.jpg",
  },
  {
    id: 8,
    time: "27 min",
    cover: "https://b.zmtcdn.com/data/pictures/4/52924/fb5b2d44143ea8a6f04fc00c640648b8_o2_featured_v2.jpg",
  },
];

const settings = {
    // dots: true,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow/>,
    prevArrow: <PrevArrow/>
  };

const TopBrands = () => {
  return <div className="top-brands max-width">
        <div className="collection-title">Top brands for you</div>
        <Slider {...settings}>
            {TopBrandsList.map((brand)=>{
                return <div>
                    <div className="top-brands-cover">
                        <img src={brand.cover} className="top-brands-image" alt={brand.time}/> 
                    </div>
                </div>
            })}
        </Slider>
    </div>;
};

export default TopBrands;
