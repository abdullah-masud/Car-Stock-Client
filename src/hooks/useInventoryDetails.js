// import { useEffect, useState } from "react"

// const useInventoryDetails = inventoryId => {
//     console.log(inventoryId)
//     const [inventoryDetail, setInventoryDetail] = useState([]);

//     useEffect(() => {
//         const url = `inventories.json/${inventoryId}`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => setInventoryDetail(data))
//     }, [inventoryId]);


//     return [inventoryDetail];
// }

// export default useInventoryDetails;