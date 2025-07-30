import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";
const LimitedOffer = ({ LimitedData }) => {
  return (
    <section>
      <div className={`${styles.offerSec} position-relative`}>
       <div className={styles.offerbanner}>
         <div className="container">
          <div className="d-flex justify-content-center">
            <div className={styles.promo}>
              <h5 className="m-0">🎁 Limited Period Offer</h5>
            </div>
          </div>

          <div className="my-3">
            <Title
              iswhite={true}
              special={LimitedData?.special}
              title={LimitedData?.title}
              subtitle={LimitedData?.subtitle}
            />
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className={styles.offerbox}>
              <div
                className={`d-flex justify-content-between  align-items-center ${styles.offerhead}`}
              >
                <div className="d-flex align-items-center gap-3">
                  <div className={styles.giftimg}>
                    <img src="assets\Home\gift.png" className="img-fluid" />
                  </div>
                  <div className={styles.giftname}>
                    <h4>Complete Eye Screening Package</h4>
                    <p className="m-0">Worth ₹2,000 - Absolutely FREE!</p>
                  </div>
                </div>
                <div className={styles.amount}>
                  <del className={styles.slash}>
                    <h4>₹2,000</h4>
                  </del>
                  <h5>FREE</h5>
                </div>
              </div>

              <div className={` ${styles.offerbody}`}>
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <div className={styles.included}>
                      <div
                        className={`d-flex align-items-center gap-2 mb-3 ${styles.offertitle}`}
                      >
                        <img
                          src="assets\Home\checked.png"
                          className="img-fluid"
                        />
                        <h4>What's Included:</h4>
                      </div>

                      {LimitedData?.included?.map((data) => (
                        <div className={`d-flex gap-1 my-1   ${styles.techi}`}>
                          <img
                            src="assets\Home\dot-green.png"
                            className="img-fluid"
                          />
                          <p className="m-0">{data}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 mt-3 mt-md-0">
                    <div className={styles.included}>
                      <div
                        className={`d-flex align-items-center mb-3  gap-2 ${styles.offertitle}`}
                      >
                        <img
                          src="assets\Home\user-groups2.png"
                          className="img-fluid"
                        />
                        <h4>Who Should Book:</h4>
                      </div>

                      {LimitedData?.book?.map((data) => (
                        <div
                          className={`d-flex gap-2 align-items-center align-items-center my-2   ${styles.techi2}`}
                        >
                          <img
                            src="assets\Home\checked-green.png"
                            className="img-fluid"
                          />
                          <p className="m-0">{data}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div
                    className={`d-flex align-items-center gap-2 justify-content-start ${styles.dangercard}`}
                  >
                    <img
                      src="assets\Home\clock-red.png"
                      className="img-fluid"
                    />
                    <div>
                      <h5>Limited Time Only!</h5>
                      <p>
                        Valid till 31st December 2024 | First 50 Registrations
                        Only
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 ">
                    <Button
                      icon={"/assets/Home/gift.png"}
                      title={"Claim Your FREE Screening"}
                      bgcolor={"#8fe76a"}
                      textcolor={"#fff"}
                    />
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <Button
                      title={"WhatsApp Now"}
                      btnborder={"1px solid #2A3B77"}
                    />
                  </div>

                  <div className={styles.freeline}>
                    <p>
                      * One of our coordinators will call you to confirm your
                      slot & guide you through the process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
      <div className={`${styles.overlay} position-absolute`}></div>
      </div>
    </section>
  );
};

export default LimitedOffer;
