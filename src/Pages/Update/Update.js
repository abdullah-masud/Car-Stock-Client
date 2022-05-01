import { useParams } from 'react-router-dom';

const Update = () => {
    const { inventoryId } = useParams();

    return (
        <div>
            <h2>update : {inventoryId}</h2>
        </div>
    );
};

export default Update;