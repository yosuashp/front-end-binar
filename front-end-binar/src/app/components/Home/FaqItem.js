export default function FaqItem(props) {
    const { key = 1, question = "PLACEHOLDER_QUESTION", answer = "PLACEHOLDER_ANSWER" } = props
    return (
        (
            <div class="accordion-item">
                <h2 class="accordion-header" id={`flush-heading${key}`}>
                    <button
                        class="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                    >
                        {question}
                    </button>
                </h2>
                <div
                    id="flush-collapseOne"
                    class="accordion-collapse collapse"
                    aria-labelledby={`flush-heading${key}`}
                    data-bs-parent="#accordionFlushExample"
                >
                    <div class="accordion-body">
                        {answer}
                    </div>
                </div>
            </div>
        )
    )
}