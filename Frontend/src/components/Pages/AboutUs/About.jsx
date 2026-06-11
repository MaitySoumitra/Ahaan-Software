import React from "react";
import Banner from "./Banner";
import HorizontalTimeline from "../Portfolio/HorizontalTimeline";
import AboutSection from "../Portfolio/AboutSection";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowCase from "../AboutUs/showcase";
import MeetOurTeam from "./MeetOurTeam";
import Watermark from "../../Layouts/Body/Watermark";
import SecondBanner from "../../Layouts/Body/SecondBanner";

function About() {
  return (
    <>
      <Banner />
      <HorizontalTimeline />
      <AboutSection />
      <ShowCase/>
      <MeetOurTeam />
      <Watermark/>
      <SecondBanner />
    </>
  );
}

export default About;
