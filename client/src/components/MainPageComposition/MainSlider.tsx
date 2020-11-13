import React, { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { request } from "../../api";
type TStateSlider = {
  id: string;
  image: string;
};
export const MainSlider: React.FC = () => {
  const [slider, setSlider] = useState<Array<TStateSlider>>([]);
  useEffect(() => {
    request({
      method: "GET",
      url: "/slider",
    })
      .then((res) => {
        if (res) {
          setSlider(res.data);
        }
      })

      .catch((err) => console.log(err));
  }, []);
  console.log(slider);

  return (
    <div className="main-slider-wrapper">
      <AwesomeSlider className="slider-wrapper">
        {slider.map((e, i) => (
          <div key={i} className="wrapper-content-slider">
            <div
              className="image-wrap"
              style={{ backgroundImage: `url(${e.image})` }}
            ></div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};
