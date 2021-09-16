import {useState} from 'react'

const useLocalState = (localItem) => {
    const [loc, setstate] = useState(localStorage.getItem(localItem))

    const setLocalState = (newItem) => {
        localStorage.setItem(localItem, newItem)
        setstate(newItem)
    }
    return [loc, setLocalState]
}

export default useLocalState
