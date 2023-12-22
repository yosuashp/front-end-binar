import "./Hero.css"

export default function Hero(props) {
    const appendElement = (
        <a className="no-mp" href="/cars">
            <button className="btn btn-success">Mulai Sewa Mobil</button>
        </a>
    )

    return (
        <section id="hero" className="container-fluid bg-grey no-mp">
            <div id="hero__text" className="flex-column flex-gap-16">
                <h1 className="no-mp">Sewa &amp; Rental Mobil Terbaik di kawasan Bandung</h1>
                <p className="no-mp">
                    Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
                    terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
                    untuk sewa mobil selama 24 jam.
                </p>
                {(props.simple === true) ? "" : appendElement}
            </div>
            <img draggable="false" src="/img/img_car.png" alt="" />
        </section>
    )
}