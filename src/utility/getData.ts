/**
 * Fetches photo data from the JSONPlaceholder API.
 * @returns {Promise<IPhoto[]>} A promise that resolves to an array of photo objects.
 */

export const getData = async (): Promise<IPhoto[]> => {
  const data: Promise<IPhoto[]> = await fetch(
    "https://jsonplaceholder.typicode.com/photos"
  )
    .then((res) => res.json())
    .catch(() => new Error("API failed to fetch"));
  return data;
};
