const { useState, useEffect } = require("react");
import FetchMovies from "@/Components/FetchMovies";
import "../Components/home.module.css";
import { ListContext } from "@/Context/ListContext";

const Home = () => {
  // variable that will be set to a specific genre code retrieved from API
  const [genreOptions, setGenreOptions] = useState([]);
  const [lists, setLists] = useState([{}]);
  const [listName, setListName] = useState("");

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
      <ListContext.Provider value={{ lists, setLists, listName, setListName }}>
        <FetchMovies genreOptions={genreOptions} />
      </ListContext.Provider>
    </div>
  );
};

export default Home;
