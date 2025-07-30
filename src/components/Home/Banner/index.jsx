import Badge from "@/common/Badge";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const Banner = ({ bannerData }) => {
  return (
    <section>
      <div className={styles.bannerSec}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={styles.bannerContent}>
                <Badge title={bannerData?.badge_title} />
                <h1>
                  Trusted <span className={styles.span1}>Cataract</span>{" "}
                  <span className={styles.span2}>Surgery</span> at Pixel Eye
                  Hospital
                </h1>
                <p className={styles.textmuted}>{bannerData?.subtitle}</p>
                <p>{bannerData?.types}</p>
                <div className="d-md-flex d-block justify-content-start gap-3 pt-3 pb-4">
                  <Button
                    title={"Book Free Screening"}
                    bgcolor={
                      "linear-gradient(75deg, hsl(227 48% 31%), hsl(32 65% 48%))"
                    }
                    textcolor={"#fff"}
                    icon={"/assets/Home/speech-bubble.png"}
                    btnborder={"none"}
                  />
                  <Button
                    title={"Call Now"}
                    bgcolor={"#fff"}
                    textcolor={"#2A3B77"}
                    icon={"/assets/Home/telephone.png"}
                    btnborder={"1px solid #2A3B77"}
                  />
                </div>

                <div className="d-flex align-items-center justify-content-around pt-4 border-top">
                  {bannerData?.hero_section?.map((data) => (
                    <div className={`text-center ${styles.herosec}`}>
                      <h4>{data?.name}</h4>
                      <p>{data?.type}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.bannerImg}>
                <img src={bannerData?.banner_img} className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
