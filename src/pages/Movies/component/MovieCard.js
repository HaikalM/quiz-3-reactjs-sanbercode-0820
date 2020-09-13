import React from 'react'

const MovieCard = props => {
	return(
		<div className="movie-card">
			<img className="movie-thumbnail" src={props.data.image_url} width='200px'/>
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
					<b className="color-555">Description: </b>{props.data.description}
				</div>
			</div>
		</div>
	)
}

export default MovieCard
