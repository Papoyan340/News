import { useCallback, useState } from "react";


const withLessMore = (Component) => {
    return (props) => {
        
        const [show, setShow] = useState(false)
        const toggleShow =useCallback(() => {
            setShow(show => !show)
        }, [])

        return <Component {...props}  {...{toggleShow, show}}  />
    }
}

export default withLessMore

