import Banner from "@/components/Home/Banner";
import LimitedOffer from "@/components/Home/LimitedOffer";
import Symptoms from "@/components/Home/Symptoms";
import Testimonals from "@/components/Home/Testimonals";
import Vision from "@/components/Home/Vision";
import Whychoose from "@/components/Home/WhyChoose";
import { BannerDetails } from "@/constant/Home/Banner";
import { LimitedDetails } from "@/constant/Home/limited";
import { SymptomsDetails } from "@/constant/Home/symptoms";
import { TestimonalDetails } from "@/constant/Home/testimonals";
import { VisionDetails } from "@/constant/Home/vision";
import { WhyChooseDetails } from "@/constant/Home/whychoose";

const HomePageComponent = () => {
  return (
    <>
      <Banner bannerData={BannerDetails} />

      <Symptoms symptomData={SymptomsDetails} />

      <Whychoose  whyChooseData={WhyChooseDetails}/>

      <Testimonals testimonalData={TestimonalDetails}/>

      <LimitedOffer LimitedData={LimitedDetails}/>

      <Vision visionData={VisionDetails}/>
    </>
  );
};

export default HomePageComponent;
