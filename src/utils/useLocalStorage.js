import { useEffect, useState } from "react";

function useLocalStorage(key, initialvalue) {

    const [storedValue, setStoredValue] = useState(() => {
        
        const storageValue = localStorage.getItem(key)

        return storageValue ? JSON.parse(storageValue) : initialvalue

    })

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(storedValue))
    }, [key, storedValue])

    return [storedValue, setStoredValue]

}

export default useLocalStorage;