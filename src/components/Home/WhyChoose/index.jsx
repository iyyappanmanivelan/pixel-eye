import Badge from "@/common/Badge";
import styles from "./styles.module.css";
import Title from "@/common/Title";

const Whychoose = ({ whyChooseData }) => {
  return (
    <section>
      <div className={styles.whychooseSec}>
        <div className="container">
          <div className="whychoose-intro">
            <div className="d-flex justify-content-center mb-4">
              <Badge title={whyChooseData?.badge_title} />
            </div>

            <Title
              title={whyChooseData?.title}
              subtitle={whyChooseData?.subtitle}
            />
          </div>

          <div className="row my-5">
            {whyChooseData?.beneifits?.map((data) => (
              <div className="col-lg-4 col-md-6 ">
                <div className={` row ${styles.choosecard}`}>
                  <div className="col-3 text-center">
                    <img src={data?.icon} className="img-fluid" />
                  </div>
                  <div className="col-9">
                    <h4>{data?.title}</h4>
                    <p>{data?.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="row">
            <div className="col-lg-6">
              <div className={styles.technique}>
                <h4>Advanced Surgical Techniques</h4>

                {whyChooseData?.techniques?.map((data) => (
                  <div
                    className={`d-flex gap-3 align-items-center my-3 ${styles.techi}`}
                  >
                    <img
                      src="assets\Home\checkmark.png"
                      className="img-fluid"
                    />
                    <p>{data}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6">
              <div className={styles.lensoption}>
                <h4>Premium Lens Options</h4>

                {whyChooseData?.lensOption?.map((data) => (
                  <div
                    className={`d-flex gap-2 align-items-center my-1 ${styles.techi2}`}
                  >
                    <img
                      src="assets\Home\dot-orange.png"
                      className="img-fluid"
                    />
                    <p>{data}</p>
                  </div>
                ))}
              </div>

              <div className={styles.gurantee}>
                <div className={`d-flex gap-2 align-items-center my-3 ${styles.guranteeimg}`}>
                  <img src="assets\Home\security.png" className="img-fluid" />
                  <h4 className="m-0">Success Guarantee</h4>
                </div>

                <p>
                  99.9% surgical success rate with comprehensive post-operative
                  care and lifetime follow-up support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
