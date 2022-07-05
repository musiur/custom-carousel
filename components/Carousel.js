import { useEffect, useState } from "react";

const Carousel = () => {
  const [slideNo, setSlideNo] = useState(1);
  const [direction, setDirection] = useState(true);
  const prev = () => {
    setDirection(false);
    slideNo > 0 && setSlideNo(slideNo - 1);
  };
  const next = () => {
    setDirection(true);
    slideNo < 11 && setSlideNo(slideNo + 1);
  };

  console.log(slideNo);
  useEffect(() => {
    if (!direction && slideNo === 0) {
      setSlideNo(11);
    }
    if (direction && slideNo === 11) {
      setSlideNo(0);
    }
  }, [slideNo]);
  return (
    <div className="carousel__container">
      <div
        className="cc__carousel"
        style={{
          transform: `translateX(-${slideNo}00%)`,
          transition: `0.${
            slideNo >= 11 || slideNo <= 0 ? "0s" : "5s ease-in-out"
          }`,
        }}
      >
        <div className="ccc__slide">
          <div
            className="cc__image"
            style={{ backgroundImage: `url("/static/snow.jpg")` }}
          >
            <div>10</div>
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => {
          return (
            <div key={item} className="ccc__slide">
              <div
                className="cc__image"
                style={{ backgroundImage: `url("/static/${item % 2 === 0 ? "snow" : "sea"}.jpg")` }}
              >
                <div>{item}</div>
              </div>
            </div>
          );
        })}
        <div className="ccc__slide">
          <div
            className="cc__image"
            style={{ backgroundImage: `url("/static/snow.jpg")` }}
          >
            <div>1</div>
          </div>
        </div>
      </div>
      {/* controllers */}
      <div className="cc__controller">
        <div className="ccc__prev" onClick={prev}></div>
        <div className="ccc__next" onClick={next}></div>
      </div>
    </div>
  );
};

export default Carousel;
