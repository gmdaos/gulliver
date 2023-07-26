const apiKey = 'eb80c8fbcd779b287346fdf68c0e56aa';
// const page = 1;
const baseUrl = 'https://api.themoviedb.org/3/person/popular?';

export const getPopularPersons = async (page:number = 1) => {
  try {
    const response = await fetch(`${baseUrl}api_key=${apiKey}&$page=${page}`);

    const data = await response.json();
    return data.results;
  } catch (error) {
    throw console.log(error);
  }
};