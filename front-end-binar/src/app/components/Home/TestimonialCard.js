export default function TestimonialCard(props) {
    const {
        testimony = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscingelit, sed do eiusmod",
        rating = 5,
        image = "/img/img_photo-1.png",
        person = {
            name: "John Dee",
            age: 32,
            from: "Bromo"
        }
    } = props

    const ratingAppend = (key) => (<img key={key} src="/img/rating_star.svg" alt="" width="16" height="16" />)
    const ratingElements = []
    for (let i = 0; i < rating; i++) {
        ratingElements.push(ratingAppend(i))
    }

    return (
        <div className="bg-grey testimonial-card">
            <img src={image} alt="" width="80" height="80" />
            <div className="rating-container flex-row">
                {ratingElements}
            </div>
            <p>
                &ldquo;{testimony}&rdquo;
            </p>
            <span className="body-bold">{`${person.name} ${person.age}, ${person.from}`}</span>
        </div>
    )
}