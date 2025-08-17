import "../css/Favorites.css";
import { useMovieContext } from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

function  Favorites() {
    const {favorites} = useMovieContext();

    if(favorites){
        return (
        <di className="favorites">
            <h2>Your Favorites</h2>
            <div className="movies-grid">
            {favorites.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
            ))}
            </div>
        </di>
    )}


    return (
    <div className="favorites-empty">
        <h2>No Favorite Movies Yet</h2>
        <p>Start adding some movies to your favorites list!</p>
    </div>
  );

}

export default Favorites;
