import { useState, useEffect } from 'react';

/**
 * Debounce / delay returned value for certain ms.
 * @example
 * //Usage example
 * 
 * const App = () => {
    const [inputValue, setInputValue] = useState('');
    const debouncedValue = useDebounce(inputValue, 500); // Delay of 500ms

    useEffect(() => {
      // Perform any action with the debounced value
      console.log('Debounced value:', debouncedValue);
    }, [debouncedValue]);

    const handleChange = (event) => {
      setInputValue(event.target.value);
    };

    return (
      <div>
        <input type="text" value={inputValue} onChange={handleChange} />
      </div>
    );
  };
  export default App;
*/

export const useDebounce = (value: string, delay: number) => {

  const [debouncedValue, setDebouncedValue] = useState(value);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const timer = setTimeout(() => {
      setLoading(false)
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return {debouncedValue, loading};
};