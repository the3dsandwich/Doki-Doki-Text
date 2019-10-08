import React, { useEffect, useState, useRef } from "react";


function Text({ text }) {
    const [textState, setTextState] = useState([]);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (typeof text === "string") {
            setTextState(text.split(""));
            setDisplayText("");
        }
    }, [text]);

    useInterval(() => {
        if (textState.length > 0) {
            let tempText = textState;
            setDisplayText(displayText.concat(tempText.shift()));
            setTextState(tempText);
        }
    }, 10);

    return (
        <div id="text">
            <div className="container">
                <p>{displayText}</p>
            </div>
        </div>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();

    // Remember the latest callback.
    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    // Set up the interval.
    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}

export { Text };
