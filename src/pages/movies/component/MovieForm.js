import React from 'react'

const MovieForm = () => {
	return(
		<div className="container">
			<form action="#">
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-image-url">Link Cover Film</label>
					</div>
					<div className="col-75">
						<input type="text" id="movie-image-url" name="movie-image-url" placeholder="Link Cover Film.."/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-title">Judul Film</label>
					</div>
					<div className="col-75">
						<input type="text" id="movie-title" name="movie-title" placeholder="Judul Film.."/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-duration">Durasi</label>
					</div>
					<div className="col-75">
						<input type="text" id="movie-duration" name="movie-duration" placeholder="Durasi Film.. (menit)"/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-genre">Genre</label>
					</div>
					<div className="col-75">
						<select id="movie-genre" name="movie-genre">
							<option value="action">Action</option>
							<option value="adventure">Adventure</option>
							<option value="Sci-Fi">Sci-Fi</option>
						</select>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-year">Tahun Tayang</label>
					</div>
					<div className="col-75">
						<input type="text" id="movie-year" name="movie-year" placeholder="Tahun Tayang"/>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-description">Deskripsi</label>
					</div>
					<div className="col-75">
						<textarea id="movie-description" name="movie-description" placeholder="Deskripsi Film.." style={{height:'200px'}}></textarea>
					</div>
				</div>
				<div className="row">
					<div className="col-25">
						<label htmlFor="movie-rating">Rating</label>
					</div>
					<div className="col-75">
						<input type="text" id="movie-rating" name="movie-rating" placeholder="Rating Film.."/>
					</div>
				</div>
				<div className="row">
					<input type="submit" value="Submit"/>
				</div>
			</form>
		</div>
	)
}

export default MovieForm
