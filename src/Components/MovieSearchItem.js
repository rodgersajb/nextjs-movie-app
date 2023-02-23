import MovieCard from "./MovieCard";
import {
  getDatabase,
  push,
  ref,
  set,
  update,
  onValue,
} from "firebase/database";
import { useEffect, useState } from "react";

import firebase_app from "../firebase/config";

const MovieSearchItem = (props) => {
  console.log(props, "PROPS");
  const [selectedList, setSelectedList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState([]);

  const handleMovieOnChange = (event) => {
    setSelectedMovie(props.movie);
  };

  useEffect(() => {
    const dbMovieRef = ref(firebase_app, `/${selectedList}`);
    onValue(dbMovieRef, (snapshot) => {
      const data = snapshot.val();

      const movieAdd = data
        ? Object.values(data)
            .map((key) => {
              return { id: key, ...data[key] };
            })
            .sort((a, b) => {
              return a - b;
            })
        : [];
      setSelectedList(selectedList);
      console.log(selectedList, "SELECTED LIST");

      console.log(movieAdd, "MOVIE ADDITION");
    });
  }, [selectedList]);

  const handleOnSubmitChange = (event) => {
    event.preventDefault();
    const movieRef = ref(database, `/${selectedList}/movies/${props.movie.id}`);
    console.log(movieRef, "LIST REF");
    update(movieRef, props.movie);
  };

  console.log(selectedMovie, "SELECTED MOVIE");

  return (
    <>
      <li key={props.index}>
        <MovieCard {...props.movie} />

        <label htmlFor="add-to-list"></label>
        <select onChange={handleMovieOnChange} name="created-lists" id="">
          <option value="">--Add Movie--</option>
          {props.listChoices.map((list, index) => {
            return (
              <option key={index} value={list.key}>
                {list.name}
              </option>
            );
          })}
        </select>
        <button onClick={handleOnSubmitChange}>Add</button>
      </li>
      {selectedList.map((selected, index) => {
        console.log(selected, "SELECTED");
        return (
          <li key={index}>
            <p>{selected.movie}</p>
            <p>{selected.overview}</p>
          </li>
        );
      })}
    </>
  );
};

export default MovieSearchItem;
