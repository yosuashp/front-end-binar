import { useEffect } from "react";
import "./Footer.css"

export default function Footer(props) {
    const homeElements = (
        <>
            <li>
                <a className="link body-bold" data-target="services">Our services</a>
            </li>
            <li><a className="link body-bold" data-target="why-us">Why Us</a></li>
            <li>
                <a className="link body-bold" data-target="testimonial">Testimonial</a>
            </li>
            <li><a className="link body-bold" data-target="faq">FAQ</a></li>
        </>
    )
    const otherElements = (
        <>
            <li>
                <a className="link body-bold" href="/#services">Our services</a>
            </li>
            <li><a className="link body-bold" href="/#why-us">Why Us</a></li>
            <li>
                <a className="link body-bold" href="/#testimonial">Testimonial</a>
            </li>
            <li><a className="link body-bold" href="/#faq">FAQ</a></li>
        </>
    )

    const selectedElements = (props.type === "home") ? homeElements : otherElements;

    useEffect(() => {
        if (props.type === "home") {
            const footerNavElements =
                document.getElementById("footer-nav-marker").children;

            for (const key in footerNavElements) {
                if (Object.hasOwnProperty.call(footerNavElements, key)) {
                    footerNavElements[key].addEventListener("click", function (ev) {
                        const element = ev.target || ev.srcElement;
                        const targetSection = element.getAttribute("data-target");

                        window.scrollTo(
                            0,
                            document.getElementById(targetSection).offsetTop - 100
                        );
                    });
                }
            }
        }
    }, [])

    return (
        <footer className="global-container">
            <ul className="flex-column flex-gap-16 no-mp">
                <li>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</li>
                <li>binarcarrental@gmail.com</li>
                <li>081-233-334-808</li>
            </ul>
            <ul id="footer-nav-marker" className="flex-column flex-gap-16 no-mp">
                {selectedElements}
            </ul>
            <div className="flex-column flex-gap-16">
                <p className="no-mp">Connect with us</p>
                <div className="flex-row flex-gap-16">
                    <a href="https://www.facebook.com/">
                        <img draggable="false" src="/img/icon_facebook.png" alt="" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <img draggable="false" src="/img/icon_instagram.png" alt="" />
                    </a>
                    <a href="https://www.twitter.com/">
                        <img draggable="false" src="/img/icon_twitter.png" alt="" />
                    </a>
                    <a href="https://www.gmail.com/">
                        <img draggable="false" src="/img/icon_mail.png" alt="" />
                    </a>
                    <a href="https://www.twitch.tv/">
                        <img draggable="false" src="/img/icon_twitch.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="flex-column flex-gap-16">
                <p className="no-mp">Copyright Binar 2022</p>
                <div className="logo"></div>
            </div>
        </footer>
    )
}