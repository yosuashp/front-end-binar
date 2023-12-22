import { useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Faq from "./components/Home/Faq";
import GettingStarted from "./components/Home/GettingStarted";
import Services from "./components/Home/Services";
import Testimonial from "./components/Home/Testimonial";
import WhyUs from "./components/Home/WhyUs";
import Nav from "./components/Nav";

export default function Home() {
  useEffect(() => {
    document.title = "BCR - Binar Car Rental Sahat";
  }, []);

  return (
    <>
      <Nav type="home" />
      <Hero />
      <Services />
      <WhyUs />
      <Testimonial />
      <GettingStarted />
      <Faq />
      <Footer type="home" />
    </>
  );
}
