import Title from "@/common/Title";
import styles from "./styles.module.css";
import Slider from "react-slick";

const Testimonals = ({ testimonalData }) => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
    ],
  };

  return (
    <section>
      <div className={styles.testimonalSec}>
        <div className="container">
          <div className="testimonal-intro">
            <Title
              title={testimonalData?.title}
              subtitle={testimonalData?.subtitle}
            />
          </div>

          <div className="testimonal-card mt-5 ">
            <Slider {...settings}>
              {testimonalData?.data?.map((data) => (
                <div>
                  <div className={styles.testimonalbox}>
                    <div className="d-flex  justify-content-between align-items-center">
                      <div className={styles.testimonalstar}>
                        <img src="assets\Home\star.png" className="img-fluid" />
                        <img src="assets\Home\star.png" className="img-fluid" />
                        <img src="assets\Home\star.png" className="img-fluid" />
                        <img src="assets\Home\star.png" className="img-fluid" />
                        <img src="assets\Home\star.png" className="img-fluid" />
                      </div>

                      <div className={styles.testimonalmark}>
                        <img
                          src="assets\Home\quote.png"
                          className="img-fuild"
                        />
                      </div>
                    </div>
                    <div className={styles.tetsimonalspeak}>
                      <p>{`" ${data?.review} "`}</p>
                    </div>
                    <div className="d-flex gap-3">
                      <div className={styles.reviewimg}>
                        <h5 className="m-0">{data?.name.slice(0, 2)}</h5>
                      </div>
                      <div className={styles.reviewname}>
                        <h5>{data?.name}</h5>
                        <p>{data?.city}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
            <div className={`d-flex justify-content-center`}>
              <div className={styles.trustcard}>
                <div>
                  <p>Trusted by 20,000+ Patients</p>
                </div>
                <div className="d-flex align-items-center gap-md-3 gap-1">
                  <div className={styles.testimonalstar}>
                    <img src="assets\Home\star.png" className="img-fluid" />
                    <img src="assets\Home\star.png" className="img-fluid" />
                    <img src="assets\Home\star.png" className="img-fluid" />
                    <img src="assets\Home\star.png" className="img-fluid" />
                    <img src="assets\Home\star.png" className="img-fluid" />
                  </div>
                  <p>4.9/5 Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonals;
