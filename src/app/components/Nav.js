import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Nav.css"

export default function Nav(props) {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Hapus token dari local storage
        localStorage.removeItem('token');
        localStorage.removeItem('userRole');
        
        // Navigasi ke halaman login
        navigate('/login');
    }

    const homeElements = (
        <>
            <li><a className="link" data-target="services">Services</a></li>
            <li><a className="link" data-target="why-us">Why Us</a></li>
            <li><a className="link" data-target="testimonial">Testimonial</a></li>
            <li><a className="link" data-target="faq">FAQ</a></li>
            <li><button className="btn btn-success" onClick={handleLogout}>Logout</button></li>
        </>
    )
    const otherElements = (
        <>
            <li><a className="link" href="/#services">Services</a></li>
            <li><a className="link" href="/#why-us">Why Us</a></li>
            <li><a className="link" href="/#testimonial">Testimonial</a></li>
            <li><a className="link" href="/#faq">FAQ</a></li>
            <li><button className="btn btn-success" onClick={handleLogout}>Logout</button></li>
        </>
    )

    const selectedElements = (props.type === "home") ? homeElements : otherElements;

    useEffect(() => {
        if (props.type === "home") {
            // Scroll offset with navbar
            let sidebarElements = document.getElementById("sidebar-marker").children;
            let topNavElements = document.getElementById("nav-marker").children;
            let footerNavElements =
                document.getElementById("footer-nav-marker").children;
            let navElements = [
                ...topNavElements,
                ...footerNavElements,
                ...sidebarElements,
            ];
            for (const key in navElements) {
                if (Object.hasOwnProperty.call(navElements, key)) {
                    navElements[key].addEventListener("click", function (ev) {
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
        <>
            <nav className="global-container bg-grey">
                <span className="logo"></span>
                <ul id="nav-marker" className="flex-row flex-gap-32 grid-end no-mp nav-list">
                    {selectedElements}
                </ul>
                <button
                    id="sidebar-toggle"
                    className="menu-toggle"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight"
                >
                    <img src="/img/icon-burger.svg" width="24" height="24" alt="" />
                </button>
            </nav>

            <div
                id="offcanvasRight"
                className="flex-column flex-gap-16 offcanvas offcanvas-end"
                tabIndex="-1"
                aria-labelledby="offcanvasRightLabel"
            >
                <div className="flex-row">
                    <span className="body-bold">BCR</span>
                    <button
                        id="sidebar-exit"
                        className="menu-exit-toggle no-mp"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                        <img src="/img/icon_x.svg" width="24" height="24" alt="" />
                    </button>
                </div>
                <ul id="sidebar-marker" className="flex-column flex-gap-16 grid-end no-mp">
                    {selectedElements}
                </ul>
            </div>
        </>
    )
}
