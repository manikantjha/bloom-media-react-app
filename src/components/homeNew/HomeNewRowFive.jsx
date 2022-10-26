import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { SectionWrapperNew } from "../../assets/styles/CommonStyles";
import { serviceImgs } from "../../data/data";
import HomeSectionTitle from "../commonNew/HomeSectionTitle";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <NavigateNextIcon
      sx={{
        position: "absolute",
        top: "50%",
        right: "35px",
        transform: "translate(35px, -50%)",
        zIndex: 10,
        display: "block",
        color: "white",
        fontSize: `75px !important`,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <NavigateBeforeIcon
      // className={className}
      sx={{
        // ...style,
        position: "absolute",
        top: "50%",
        left: "35px",
        transform: "translate(-35px, -50%)",
        zIndex: 10,
        display: "block",
        color: "white",
        fontSize: `75px !important`,
        cursor: "pointer",
      }}
      onClick={onClick}
    />
    // <div
    //   className={className}
    //   style={{ ...style, display: "block", background: "green" }}
    //   onClick={onClick}
    // />
  );
}

export default function HomeNewRowFive() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const navigate = useNavigate();
  return (
    <SectionWrapperNew sx={{ bgcolor: "#424242", overflow: "hidden" }}>
      <HomeSectionTitle title="services" />
      <Box sx={{ pb: { xs: 5, md: 10 }, pt: 4 }}>
        <Slider {...settings}>
          {serviceImgs.map((img, index) => (
            <div key={index}>
              <Box
                sx={{
                  height: { xs: 391, md: 782 },
                  width: "auto",
                  overflow: "hidden",
                  mx: 2,
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => navigate(`/service/${index}`)}
              >
                <img
                  src={img[0]}
                  alt=""
                  style={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            </div>
          ))}
        </Slider>
      </Box>
    </SectionWrapperNew>
  );
}
