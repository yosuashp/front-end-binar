import "./Car.css"

export default function Car(props) {
    const {
        data = {
            image,
            manufacture,
            model,
            rentPerDay,
            description,
            capacity,
            transmission,
            year
        }
    } = props

    return (
        <div>
            <div className="result-card flex-column flex-gap-16">
                <img src={data.image} alt={data.manufacture} />
                <div className="result-car-text flex-column flex-gap-8">
                    <span>{data.manufacture} - {data.model}</span>
                    <span className="title">Rp {data.rentPerDay} / hari</span>
                    <p>{data.description}</p>
                    <div className="car-data flex-column flex-gap-16">
                        <div>
                            <img src="img/icon_people.svg" alt="" />
                            <span>{data.capacity} orang</span>
                        </div>
                        <div>
                            <img src="img/icon_settings.svg" alt="" />
                            <span>{data.transmission}</span>
                        </div>
                        <div>
                            <img src="img/icon_calendar.svg" alt="" />
                            <span>Tahun {data.year}</span>
                        </div>
                    </div>
                </div>
                <button className="btn btn-success">Pilih Mobil</button>
            </div>
        </div>
    )
}