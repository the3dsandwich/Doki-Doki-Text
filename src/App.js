import React, { useState, useEffect } from "react";
import { ddText } from "./generateText";
import { Text } from "./Text";

function App() {
    const [text, setText] = useState("Hello.");

    useEffect(() => {
        const unregister = setInterval(() => {
            if (Math.random() < 0.1) {
                setText(ddText());
            }
        }, 150);
        return () => {
            clearInterval(unregister);
        };
    }, [text]);

    return (
        <div id="app" onClick={() => setText(ddText())}>
            <Text text={text} />
        </div>
    );
}

export default App;
