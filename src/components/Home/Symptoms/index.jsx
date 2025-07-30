import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const Symptoms = ({ symptomData }) => {
  return (
    <section>
      <div className={styles.symptomSec}>
        <div className="container">
          <div className="symptom-intro">
            <Title
              title={symptomData?.title}
              subtitle={symptomData?.subtitle}
            />
          </div>

          <div className="symptom-card mt-5">
            <div className="row">
              {symptomData.symptoms.map((data) => (
                <div className="col-lg-4 col-md-6">
                  <div className={styles.scard}>
                    <img src={data?.icon} className="img-fluid" />
                    <h4>{data?.title}</h4>
                    <p>{data?.symptom}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <div className={styles.treatment}>
              <div className={styles.treatmenticon}>
                <img src="assets\Home\danger.png" className="img-fluid" />
              </div>

              <div className={styles.treatmentinfo}>
                <h4>⏳ Don't Delay Treatment!</h4>
                <p>
                  These are signs of cataract — a condition that only gets worse
                  with time. Without treatment, cataracts can lead to severe
                  vision impairment or blindness.
                </p>
                <div className="d-md-flex d-block justify-content-start gap-3">
                  <Button
                    title={"Get Free Eye Screening Now"}
                    bgcolor={"hsl(102 72% 66%)"}
                    textcolor={"#fff"}
                  ></Button>
                  <Button
                    title={"Learn More About Cataracts"}
                    btnborder={"1px solid #293a75"}
                    bgcolor={"#ffff"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptoms;
