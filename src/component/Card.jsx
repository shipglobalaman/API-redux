import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteMovie, editMovie } from "../features/movieSlice";
import { useState } from "react";

function Card({ movie }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  const handleEdit = () => {
    setIsEditing(true);
  };
  const handleEditSave = () => {
    dispatch(editMovie({ id: movie.imdbID, Title: newTitle }));
    setIsEditing(false);
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src={movie.Poster}
          alt={movie.Title}
        />
        <div className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="font-bold text-xl mb-2 w-full"
            />
          ) : (
            <h2 className="font-bold text-xl mb-2">{movie.Title}</h2>
          )}
        </div>

        {isEditing ? (
          <button
            className="mt-2 mb-2 ml-2 bg-green-500 text-white px-3 py-1 rounded"
            onClick={handleEditSave}
          >
            Save
          </button>
        ) : (
          <div>
            <button
              className="mt-2 mb-2 ml-2 bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => handleDelete(movie.imdbID)}
            >
              Delete
            </button>

            <button
              className="mt-2 mb-2 ml-2 bg-green-500 text-white px-3 py-1 rounded"
              onClick={handleEdit}
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
