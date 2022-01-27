import React, { useState } from "react";
import WatchesForm from "./WatchesForm"
import WatchesList from "./WatchesList"
import { nanoid } from 'nanoid';


const WatchesApp = () => {
    const [watches, setWatches] = useState([])
    
    const onRemove = id => {
        setWatches(watches.filter(watch => watch.id != id))
    }

    const onAdd = form => {
        form["id"] = nanoid();
        setWatches(prevWatches => [...prevWatches, form])
    }

    return (
        <div className="container">
            <div className="mb-5">
                <WatchesForm onAdd={onAdd} />
            </div>
            {watches.length > 0 
                ? <WatchesList watches={watches} onRemove={onRemove} />
                : <p>Часов не обнаружено</p>
            }
        </div>
    )
}

export default WatchesApp;