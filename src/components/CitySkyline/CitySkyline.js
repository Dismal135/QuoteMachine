import './CitySkyline.css'

const CitySkyline = ({isDay}) => {

    return (
        <><div className={`background-buildings ${isDay ? "sky" : "night-sky"}`}>
            <div></div>
            <div></div>
            <div className="bb1 building-wrap">
                <div className={`bb1a ${isDay ? "bb1-window" : "night-bb1-window"}`} ></div>
                <div className={`bb1b ${isDay ? "bb1-window" : "night-bb1-window"}`}></div>
                <div className={`bb1c ${isDay ? "bb1-window" : "night-bb1-window"}`}></div>
                <div className={`${isDay ? "bb1d" : "night-bb1d"}`}></div>
            </div>
            <div className="bb2">
                <div className={`${isDay ? "bb2a" : "night-bb2a"}`}></div>
                <div className={`${isDay ? "bb2b" : "night-bb2b"}`}></div>
            </div>
            <div className={`${isDay ? "bb3" : "night-bb3"}`}></div>
            <div></div>
            <div className="bb4 building-wrap">
                <div className={`${isDay ? "bb4a" : "night-bb4a"}`}></div>
                <div className={`${isDay ? "bb4b" : "night-bb4b"}`}></div>
                <div className={`${isDay ? "bb4c" : "night-bb4c"}`}>
                    <div className={`${isDay ? "bb4-window" : "night-bb4-window"}`}></div>
                    <div className={`${isDay ? "bb4-window" : "night-bb4-window"}`}></div>
                    <div className={`${isDay ? "bb4-window" : "night-bb4-window"}`}></div>
                    <div className={`${isDay ? "bb4-window" : "night-bb4-window"}`}></div>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>

            <div className="foreground-buildings">
                <div></div>
                <div></div>
                <div className="fb1 building-wrap">
                    <div className={`${isDay ? "fb1a" : "night-fb1a"}`}></div>
                    <div className={`${isDay ? "fb1b" : "night-fb1b"}`}></div>
                    <div className={`${isDay ? "fb1c" : "night-fb1c"}`}></div>
                </div>
                <div className="fb2">
                    <div className={`${isDay ? "fb2a" : "night-fb2a"}`}></div>
                    <div className={`${isDay ? "fb2b" : "night-fb2b"} window-wrap`}>
                        <div className={`${isDay ? "fb2-window" : "night-fb2-window"}`}></div>
                        <div className={`${isDay ? "fb2-window" : "night-fb2-window"}`}></div>
                        <div className={`${isDay ? "fb2-window" : "night-fb2-window"}`}></div>
                    </div>
                </div>
                <div></div>
                <div className="fb3 building-wrap">
                    <div className={`${isDay ? "fb3a" : "night-fb3a"} window-wrap`}>
                        <div className={`${isDay ? "fb3-window" : "night-fb3-window"}`}></div>
                        <div className={`${isDay ? "fb3-window" : "night-fb3-window"}`}></div>
                        <div className={`${isDay ? "fb3-window" : "night-fb3-window"}`}></div>
                    </div>
                    <div className={`${isDay ? "fb3b" : "night-fb3b"}`}></div>
                    <div className={`${isDay ? "fb3b" : "night-fb3b"}`}></div>
                    <div className={`${isDay ? "fb3b" : "night-fb3b"}`}></div>
                </div>
                <div className="fb4">
                    <div className={`${isDay ? "fb4a" : "night-fb4a"}`}></div>
                    <div className={`${isDay ? "fb4b" : "night-fb4b"}`}>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                        <div className={`${isDay ? "fb4-window" : "night-fb4-window"}`}></div>
                    </div>
                </div>
                <div className={`${isDay ? "fb5" : "night-fb5"}`}></div>
                <div className={`${isDay ? "fb6" : "night-fb6"}`}></div>
                <div></div>
                <div></div>
            </div></>
    )
}

export default CitySkyline