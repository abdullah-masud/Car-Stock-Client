import { useEffect, useState } from "react";
import Loading from "../Pages/Shared/Loading/Loading";

const useInventories = () => {
    const [inventories, setInventories] = useState([]);

    useEffect(() => {
        fetch('https://car-stock-server-4mqt.onrender.com/inventories')
            .then(res => res.json())
            .then(data => {
                setInventories(data)
            });
    }, [])

    return [inventories, setInventories]

}

export default useInventories;