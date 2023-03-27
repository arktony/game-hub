import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => useData<Genre>("https://api.rawg.io/api/genres");

export default useGenres;
