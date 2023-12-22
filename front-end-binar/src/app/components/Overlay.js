export default function Overlay(props) {
    const {
        zIndex,
        active
    } = props

    return (
        <span
            id="form-overlay"
            className={`overlay ${(active) ? "active" : ""}`}
            style={{ zIndex: zIndex }}
        ></span>
    )
}