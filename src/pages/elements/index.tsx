import Button from "@/components/Button/Button";
import SearchBar from "@/components/SearchBar/SearchBar";

const Elements = () => {
    return (
        <div>
            <SearchBar/>
            <h1>heading 1 text</h1>
            <h2>heading 2 text</h2>
            <h3>heading 3 text</h3>
            <h4>heading 4 text</h4>
            <h5>heading 5 text</h5>
            <h6>heading 6 text</h6>
            <p>paragraphy text</p>
            <div className="relative flex gap-4 items-baseline">
                <Button variant="primary" href='/'>
                primary
                </Button>
                <Button variant="secondary" href='/'>
                secondary
                </Button>
                <Button variant="action" href='/'>
                action
                </Button>
                <Button href='/' className="bg-cyan-300">
                custom
                </Button>
            </div>
        </div>
    );
}
 
export default Elements;