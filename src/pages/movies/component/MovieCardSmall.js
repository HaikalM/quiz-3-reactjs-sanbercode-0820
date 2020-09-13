import React from 'react'

const MovieCardSmall = props => {
	return(
		<div className="movie-card-small">
			<img className="movie-thumbnail" src={props.data.image_url} alt={props.data.name} width='200px'/>
			<div className="movie-information">
				<div className="title-section">
					<div className="movie-title">{props.data.title}</div>
					<div className="movie-rating">{parseFloat(props.data.rating)}</div>
				</div>
				<div className="movie-overview">
					<div className="movie-genre">{props.data.genre}</div>
					<div className="movie-duration">
						<b className="color-555">Duration:</b> {parseInt(props.data.duration/60)} Hour
					</div>
				</div>
				<div className="movie-description">
					<b className="color-555">Description: </b>
					{props.data.description.substring(0, 100)}
				</div>
				<div className="movie-action">
					<button className="btn btn-primary mr-2">Edit</button>
					<button className="btn btn-link-danger">Delete</button>
				</div>
			</div>
		</div>
	)

}

export default MovieCardSmall
