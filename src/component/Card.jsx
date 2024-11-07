import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovie, editMovie } from "../features/movieSlice";
import { useState } from "react";

function Card({ movie }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState("");
  const [editLoading, setEditLoading] = useState(false);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteMovie(id));
  };

  // Going through the Promises

  const delWithDelay = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          resolve();
        } else {
          reject("Failed to edit");
        }
      }, 2000);
    });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditSave = () => {
    setEditLoading(true);
    delWithDelay()
      .then(() => {
        dispatch(editMovie({ id: movie.imdbID, Title: newTitle }));
        setIsEditing(false);
        setEditLoading(false);
        console.log("Edited sucessfully ....");
      })
      .catch((error) => {
        setEditLoading(false);
        setIsEditing(false);
        console.error(error);
      });
  };
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <img
          className="w-full h-48 object-cover"
          src={movie.Poster}
          
        />
        <div className="px-6 py-4">
          {isEditing ? (
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="font-bold text-xl mb-2 w-full border-black border-[1px]  "
              placeholder="Write here ...."
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
