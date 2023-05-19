const getData = async () => {
    const data = await 
        fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
    return data
}
 
export default getData;