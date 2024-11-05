import React from "react";

function Card({  movieData =[] ,onDelete })  {
    
  return (
    <div className="grid grid-cols-3 gap-4 mt-10 ml-20">
        {movieData.map((movie)=>(<div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img className="w-full h-48 object-cover" src={movie.Poster} alt={movie.Title} />
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl mb-2">{movie.Title}</h2>
        </div>
        <button
              className="mt-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => onDelete(movie.imdbID)}
            >
              Delete
            </button>
      </div>))}
    </div>
  );
}

export default Card;
