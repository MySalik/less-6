import React, { useEffect, useState, useRef } from "react";
import moment from 'moment'


const WatchItem = ({watch, onRemove}) => {
    const [date, setDate] = useState()
    let seconds = useRef(null);
    let minutes = useRef(null);
    let hours = useRef(null);

    useEffect(() => {
        let interval = setInterval(()=>{
            let now = moment().utcOffset(Number(watch.timezone));
            setDate(now)
            changeDial(now)
            console.log(watch.name)
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, []);

    const changeDial = now => {
        let seconds_rotate = 6 * now.seconds()
        seconds.current.style.transform = `rotate(${seconds_rotate}deg)`
        let minutes_rotate = 6 * now.minutes()
        minutes.current.style.transform = `rotate(${minutes_rotate}deg)`
        let hours_rotate = 30 * now.hour()
        hours.current.style.transform = `rotate(${hours_rotate}deg)`
    } 

    if (!date) return null;

    return (
        <div className="col-3 d-flex align-items-center flex-column mb-3">
            <h2>{watch.name}</h2>
            <div className="hoursy">
                <div className="onen">12</div>
                <div className="threen">3</div>
                <div className="sixn">6</div>
                <div className="ninen">9</div>
                <div 
                    className="seconds"
                    ref={seconds}
                ></div>
                <div 
                    className="minutes"
                    ref={minutes}
                ></div>
                <div 
                    className="hours"
                    ref={hours}
                ></div>
                <div className="center"></div>
            </div>
            <button 
                className="btn btn-light material-icons"
                onClick={()=>{onRemove(watch.id)}}
            >
                close
            </button>
        </div>
    )
}


const WatchesList = ({watches, onRemove}) => {
    return (
        <div className="row">
            {watches.map((watch)=>{
                return(
                    <WatchItem watch={watch} key={watch.id} onRemove={onRemove} />
                )
            })}
        </div>
    )
}


export default WatchesList;