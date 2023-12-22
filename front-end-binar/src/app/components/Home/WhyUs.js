import "./WhyUs.css"

export default function WhyUs() {
    return (
        <section id="why-us" className="global-container flex-column flex-gap-16">
            <h2 className="no-mp">Why Us?</h2>
            <p className="no-mp">Mengapa harus pilih Binar Car Rental?</p>
            <ul className="no-mp">
                <div className="card">
                    <img width="32" src="/img/icon_complete.png" alt="card-icon" />
                    <div className="card-body no-mp flex-column flex-gap-16">
                        <span className="title">Mobil Lengkap</span>
                        <p>
                            Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan
                            terawat
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img width="32" src="/img/icon_price.png" alt="card-icon" />
                    <div className="card-body no-mp flex-column flex-gap-16">
                        <span className="title">Harga Murah</span>
                        <p>
                            Harga murah dan bersaing, bisa bandingkan harga kami dengan rental
                            mobil lain
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img width="32" src="/img/icon_24hrs.png" alt="card-icon" />
                    <div className="card-body no-mp flex-column flex-gap-16">
                        <span className="title">Layanan 24 Jam</span>
                        <p>
                            Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga
                            tersedia di akhir minggu
                        </p>
                    </div>
                </div>
                <div className="card">
                    <img width="32" src="/img/icon_professional.png" alt="card-icon" />
                    <div className="card-body no-mp flex-column flex-gap-16">
                        <span className="title">Sopir Profesional</span>
                        <p>
                            Sopir yang profesional, berpengalaman, jujur, ramah dan selalu
                            tepat waktu
                        </p>
                    </div>
                </div>
            </ul>
        </section>
    )
}