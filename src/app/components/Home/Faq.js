import "./Faq.css"

export default function Faq(props) {
    const PLACEHOLDER_ANSWER = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis egetpharetra nibh.Nullam diam eros, volutpat in sapien a, tempusornare enim.Fusce nunc libero, hendrerit at posuere a,ullamcorper et velit.Nunc in nisi dolor.Vestibulum sed lectus atrisus pellentesque condimentum.Ut aliquet nec felis a tempor."
    const { qa = {
        "Apa saja syarat yang dibutuhkan?": PLACEHOLDER_ANSWER,
        "Berapa hari minimal sewa mobil lepas kunci?": PLACEHOLDER_ANSWER,
        "Berapa hari sebelumnya sabaiknya booking sewa mobil?": PLACEHOLDER_ANSWER,
        "Apakah Ada biaya antar-jemput?": PLACEHOLDER_ANSWER,
        "Bagaimana jika terjadi kecelakaan?": PLACEHOLDER_ANSWER
    } } = props
    const appendElement = []
    let n = 0;
    for (let [question, answer] of Object.entries(qa)) {
        appendElement.push(
            <div className="accordion-item" key={n}>
                <h2 className="accordion-header" id={`flush-heading${n}`}>
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse${n}`}
                        aria-expanded="false"
                        aria-controls={`flush-collapse${n}`}
                    >
                        {question}
                    </button>
                </h2>
                <div
                    id={`flush-collapse${n}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${n}`}
                    data-bs-parent="#faq-accordion"
                >
                    <div className="accordion-body">
                        {answer}
                    </div>
                </div>
            </div>
        )
        n++;
    }

    return (
        <section id="faq" className="global-container">
            <div className="flex-column flex-gap-16">
                <h2>Frequently Asked Question</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div id="faq-accordion" className="accordion accordion-flush">
                {appendElement}
            </div>
        </section>
    )
}