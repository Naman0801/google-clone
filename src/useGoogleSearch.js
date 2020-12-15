import { useEffect, useState } from 'react'
import API_KEY from './keys';

// GOOGLE SEARCH ENGINE KEY THAT SEARCH'S THE WHOLE ENGINE
const CONTEXT_KEY = 'YOUR_SERACH_ENGINE_KEY'

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            fetch (`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
                .then(response => response.json())
                .then(result => setData(result))
        }

        fetchData();
    }, [term])

    return { data };
}

export default useGoogleSearch
