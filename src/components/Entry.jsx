

export function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container" > 
                <img className="main-image" src={props.img} />
            </div >
            
            <div> 
                <img className="marker-img" src={props.marker} />
                <span className="country" >{props.country} </span>
                <a href={props.googleMapsLink}> View on google maps  </a>
                <h2 className="place"> {props.title} </h2>
                <p className="trip-dates"> {props.dates} </p>
                <p className="entry-text"> {props.text} </p>
            </div>
            
        </article>
    )
}