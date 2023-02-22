import { useState } from "react";

const FetchMovies = ({ genreOptions }) => {
  const [canSubmit, setCanSubmit] = useState(false);
  const [genre, setGenre] = useState(0);
  const [results, setResults] = useState([]);
  const [time, setTime] = useState(0);

  const handleOnSubmit = (event) => {
    event.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${currentGenre}&with_runtine.lte=${time}include_video=true&include_adult=false&api_key=a5e87382f2c41fc47e2facb317187475`
    )
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  };
  return <></>;
};

export default FetchMovies;
