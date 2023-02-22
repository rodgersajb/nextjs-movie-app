const { useState, useEffect } = require("react");
import FetchMovies from "@/Components/FetchMovies";

const Home = () => {
  // variable that will be set to a specific genre code retrieved from API
  const [genreOptions, setGenreOptions] = useState([]);

  // API request
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=a5e87382f2c41fc47e2facb317187475`
    )
      .then((response) => response.json())
      .then((data) => setGenreOptions(data.genres));
  }, []);
  return (
    <div className="home">
      <FetchMovies genreOptions={genreOptions} />
    </div>
  );
};

export default Home;