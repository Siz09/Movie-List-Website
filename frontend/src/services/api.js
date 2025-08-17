const API_KEY = import.meta.env.VITE_API_KEY;

//Mask function
function maskKey(key) {
  if (!key) return "";
  return key.slice(0, 4) + "****" + key.slice(-4);
}

// Log masked key
console.log("Using API Key:", maskKey(API_KEY));

const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

