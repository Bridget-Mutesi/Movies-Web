import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import ImageContainer from "../../atoms";
import { getMovies } from "../../utils/utilities";
import "./styles.css";
const Slider = () => {
  const [movie, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    (async () => {
      setLoading(true);
      const movie = await getMovies();
      setMovies(movie.results);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <h1>Loading movies...</h1>;
  }
  
  const limitedMovies =movie.slice(0,4)
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="movies-slider">
      <Carousel {...sliderSettings}>
        {limitedMovies.map((item) => (
          <div key={item.id} className="movie-slide">
            <ImageContainer props={item} useBackgroundImage={true} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default Slider;