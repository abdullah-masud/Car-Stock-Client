import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://car-stock-server-4mqt.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return [reviews]
}

export default useReviews;