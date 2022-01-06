import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const useTheme = () => {

    const { themeData } = useSelector(state => state.common)
    useEffect(() => {
        console.log(1231321)
    }, [])
    return themeData
}

export default useTheme
