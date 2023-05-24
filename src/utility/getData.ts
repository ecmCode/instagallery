/**
 * Fetches photo data from the JSONPlaceholder API.
 * @returns {Promise<IPhoto[]>} A promise that resolves to an array of photo objects.
 */
const getData = async (): Promise<IPhoto[]> => {
    const data : Promise<IPhoto[]>= await 
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
    return data
}
 
export default getData;