import styles from "./SearchBar.module.scss"

const SearchBar = () => {
    return (
        <form action="submit" onSubmit={(e) => e.preventDefault()}>
            <div className={styles.searchBar}>
                <input type="text" name="" id="" className={styles.input}/>
                <button type="submit" className={styles.btn}>Search</button>
            </div>
        </form>
    );
}
 
export default SearchBar;