import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/inventories')
            .then(res => res.json())
            .then(data => {
                setInventories(data)
            });
    }, [])

    return [inventories, setInventories]

}

export default useInventories;