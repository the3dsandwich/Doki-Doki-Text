import React, { useState, useEffect } from "react";
import { Text } from "./Text";

function App() {
    const pool = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž  ".split(
        ""
    );

    const [text, setText] = useState(null);

    useEffect(() => {
        const unregister = setInterval(() => {
            if (Math.random() < 0.1) {
                let tempText = "";
                for (let i = 0; i < Math.floor(Math.random() * 5000); i++) {
                    tempText = tempText.concat(
                        pool[Math.floor(Math.random() * pool.length)]
                    );
                    if (Math.random() < 0.06) tempText = tempText.concat(" ");
                }
                setText(tempText);
            }
        }, 150);
        return () => {
            clearInterval(unregister);
        };
    }, [pool, text]);

    return (
        <div id="app">
            <Text text={text} />
        </div>
    );
}

export default App;
