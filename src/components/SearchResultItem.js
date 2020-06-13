import React from 'react';
import ReactImageFallback from 'react-image-fallback';

const SearchResultItem = ({title, poster_path, release_date, overview}) => {
    return (
        <div className="search-result-item">
            <ReactImageFallback
                src={`https://image.tmdb.org/t/p/w92${poster_path}`}
                fallbackImage="/images/default_poster.png"
                initialImage="/images/loader.gif"
                alt={`poster image for ${title}`}
                className="search-result-item__poster"
            />
            <div className="search-result-item__info">
                <h3>{title}</h3>
                <span>{release_date}</span>
                <p>{overview}</p>
            </div>
            <div className="search-result-item__button">
                <button className="button">+</button>
            </div>
        </div>
    )
}

export default SearchResultItem