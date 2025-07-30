import Title from "@/common/Title";
import styles from "./styles.module.css";
import Button from "@/common/Button";

const Vision = ({ visionData }) => {
  return (
    <section>
      <div className={styles.visionSec}>
        <div className="container">
          <div className="vision-intro">
            <Title title={visionData?.title} subtitle={visionData?.subtitle} />
          </div>

          <div className="vision-content mt-5">
            <div className="row">
              <div className="col-lg-6">
                <div className={styles.gettouch}>
                  <h4>Get In Touch</h4>

                  {visionData?.getIntouch?.map((data) => (
                    <div
                      className={` d-flex align-items-center gap-3 ${styles.getcard}`}
                    >
                      <div className={styles.getimg}>
                        <img src={data?.icon} className="img-fluid" />
                      </div>

                      <div className={styles.getcontent}>
                        <h4>{data?.title}</h4>
                        <h4>{data?.value}</h4>
                        <h4>{data?.descp}</h4>
                      </div>
                    </div>
                  ))}

                  <div className={`d-flex  gap-2 ${styles.schedule}`}>
                    <div className={styles.sheduleimg}>
                      <img src="assets/Home/clock.png" className="img-fluid" />
                    </div>

                    <div className={styles.scheduleinfo}>
                      <h4>Opening - Hours</h4>

                      <div className="d-flex gap-3">
                        <div className={styles.s1}>
                          <p> Monday - Saturday </p>
                          <p> Sunday </p>
                          <p> Emergency </p>
                        </div>

                        <div className={styles.s2}>
                          <p> : 9:00 AM - 6:00 PM</p>
                          <p> : 10:00 AM - 4:00 PM</p>
                          <p> : 24/7 Available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className={styles.appoinment}>
                  <h4>Book Your Appointment</h4>

                  <Button
                    title={"whatsApp for Instant Response"}
                    bgcolor={
                      "linear-gradient(75deg, hsl(227 48% 31%), hsl(32 65% 48%))"
                    }
                    textcolor={"#fff"}
                    icon={"/assets/Home/speech-bubble.png"}
                    btnborder={"none"}
                  />

                  <Button
                    title={"Call Now for FREE Consultation"}
                    bgcolor={" hsl(102 72% 66%)"}
                    textcolor={"#fff"}
                    icon={"/assets/Home/call.png"}
                    btnborder={"none"}
                  />
                  <Button
                    title={"Send Email Enquiry"}
                    bgcolor={"#fff"}
                    textcolor={"#2A3B77"}
                    icon={"/assets/Home/mail-2.png"}
                    btnborder={"1px solid #2A3B77"}
                  />

                  <div className="d-flex justify-content-center gap-3 mt-5 pt-3">
                    <div className={styles.unique}>
                      <img
                        src="assets\Home\security.png"
                        className="img-fluid"
                      />
                      <h5>100% safe</h5>
                      <p>& Confidential</p>
                    </div>

                    <div className={styles.unique}>
                      <img src="assets\Home\clock.png" className="img-fluid" />
                      <h5>Quick Response</h5>
                      <p>Within 2 Hours</p>
                    </div>
                  </div>

                  <div className={styles.promise}>
                    <h4>Our Promise to You</h4>
                    <p>
                      Expert care, transparent pricing, and comprehensive
                      support throughout your treatment journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
