import {useLocalStorage} from './useLocalStorage'

export const useDarkMode = (key) => {
    const[darkMode, setDarkMode] = useLocalStorage('darkMode')

    return [darkMode, setDarkMode]
}

