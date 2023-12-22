import Slider from "react-slick";
import "./Testimonial.css"
import TestimonialCard from "./TestimonialCard"

export default function Testimonial() {
    const slickSettings = {
        speed: 300,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow:
            <img src='/img/arrow-left.svg' />,
        nextArrow:
            <img src='/img/arrow-right.svg' />
    }

    return (
        <section
            id="testimonial"
            className="container-fluid no-mp flex-column flex-gap-16"
        >
            <h2 className="no-mp">Testimonial</h2>
            <p className="no-mp">Berbagai review positif dari para pelanggan kami</p>
            <Slider {...slickSettings} className="container-fluid no-mp testimonial-carousel">
                <TestimonialCard />
                <TestimonialCard />
                <TestimonialCard />
            </Slider>
        </section>
    )
}