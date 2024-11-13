import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const brandsData = [
  {
    imageSrc:
      "https://www.builtbyplatform.co.uk/wp-content/uploads/2560px-Logo.min_.svg.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/lineIcons-white.svg",
    altText: "Laravel",
    link: "#",
  },
  {
    imageSrc:
      "https://blog.appseed.us/content/images/2021/08/icons-flask-x500w.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/uideck-white.svg",
    altText: "Flask",
    link: "#",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Google-flutter-logo.svg/2560px-Google-flutter-logo.svg.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "Flutter",
    link: "#",
  },
  {
    imageSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Spring_Framework_Logo_2018.svg/1200px-Spring_Framework_Logo_2018.svg.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/ayroui-white.svg",
    altText: "SpringBoot",
    link: "#",
  },
  {
    imageSrc:
      "https://cdn.freelogovectors.net/wp-content/uploads/2023/09/next-js-logo-freelogovectors.net_.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "NextJS",
    link: "#",
  },
  {
    imageSrc:
      "https://static.wixstatic.com/media/2a2ba0_edeb856390be432bb46f4f33a4a91f4f~mv2.png/v1/fill/w_1000,h_336,al_c,q_85,usm_0.66_1.00_0.01/2a2ba0_edeb856390be432bb46f4f33a4a91f4f~mv2.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "Reactjs",
    link: "#",
  },
  {
    imageSrc:
      "https://miro.medium.com/v2/resize:fit:500/1*CPDIH8BWrGipHRJ6o6E2Vw.png",
    lightImageSrc:
      "https://cdn.tailgrids.com/2.2/assets/images/brands/graygrids-white.svg",
    altText: "Reactjs",
    link: "#",
  },
];

export default function Framework() {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="bg-inherit pb-10 pt-10 dark:bg-dark lg:pb-5 lg:pt-[10px]">
      <div className="container mx-auto">
        <Slider {...settings}>
          {brandsData.map((brand, i) => (
            <SingleImage key={i} brand={brand} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

const SingleImage = ({ brand }) => {
  const { link, imageSrc, altText } = brand;
  return (
    <a href={link} className="flex items-center justify-center">
      <img
        src={imageSrc}
        alt={altText}
        className="w-[120px] h-auto transition-transform duration-300 hover:scale-110 md:w-[150px] lg:w-[180px]"
      />
    </a>
  );
};
