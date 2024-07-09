import { useCallback, useEffect, useState } from "react";
import slide2 from "../../../public/images/hero/2.jpeg";
import slide3 from "../../../public/images/hero/3.jpeg";
import slide4 from "/images/hero/4.jpg";
import slide5 from "/images/hero/5.jpg";
import slide1 from "/images/hero/6.png";

export const Hero = () => {
  const [currentSlider, setCurrentSlider] = useState(0);

  const carouselImages = [
    { title: "Work Louder", des: "11", img: slide4 },
    { title: "ePBT Creative Studio", des: "22", img: slide5 },
    { title: "Theseus75", des: "22", img: slide1 },
  ];

  const nextSlider = useCallback(
    () =>
      setCurrentSlider((currentSlider) =>
        currentSlider === carouselImages.length - 1 ? 0 : currentSlider + 1
      ),
    [carouselImages.length]
  );

  // if you don't want to change the slider automatically then you can just remove the useEffect
  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlider();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [nextSlider]);

  return (
    <div className="h-72 my-4 w-full transform overflow-hidden rounded-lg before:bg-black/50 sm:h-96 md:h-[540px] lg:gap-10">
      {carouselImages.map((slide, index) => {
        const { img, title, des } = slide;
        return (
          <div
            className={`${
              index === currentSlider
                ? "visible opacity-100"
                : "invisible opacity-0"
            } absolute inset-0 duration-500 ease-linear`}
            key={`index_${index}`}
          >
            <img
              src={img}
              width="1200"
              height="600"
              alt={title}
              className={`h-full w-full object-cover duration-500 ease-linear ${
                index === currentSlider ? "scale-100" : "scale-105"
              }`}
            />
            <div className="absolute inset-0 flex flex-col bg-black/40 p-5 text-center text-white drop-shadow-lg">
              <div className="mb-0 mt-auto rounded-md bg-white/40 max-w-sm p-3 backdrop-blur-3xl">
                <div className="mb-3 overflow-hidden text-xl font-semibold lg:text-3xl">
                  <h1
                    className={`${
                      index === currentSlider ? "" : "translate-y-12"
                    } duration-500 ease-linear`}
                  >
                    {title}
                  </h1>
                </div>
                <div className="overflow-hidden text-sm md:text-base lg:text-lg">
                  <p
                    className={`${
                      index === currentSlider ? "" : "-translate-y-12"
                    } duration-500 ease-linear`}
                  >
                    {des}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
