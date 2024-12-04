
import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export const usePrevRoute = ()=> {

    const location = useLocation();
    const prevPath = useRef(null);
    useEffect(() => {
        prevPath.current = location.pathname;
    }, [location])


    return prevPath.current;   
}
