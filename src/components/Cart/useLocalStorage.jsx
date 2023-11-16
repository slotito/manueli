import { useState } from 'react'

export function useLocalStorage (key, initialValue) {
    //console.log("useLocalStorage.key:", key);
    //console.log("useLocalStorage.initialValue:", initialValue);
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key)
            return item ? JSON.parse(item) : initialValue
        } catch (error) {
            console.log(error)
            return initialValue
        }
        }
  )

  const setValue = (value) => {
    try {
      setStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}

