import { useSelector } from 'react-redux'

const useTheme = () => {
    const { themeData } = useSelector(state => state.common)
    
    return themeData
}

export default useTheme
