export function ddText() {
    const pool = "¡¢£¤¥¦§¨©ª«¬®¯°±²³´µ¶·¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞğĠġĢģĤĥĦħĨĩĪīĬĭĮįİıĲĳĴĵĶķĸĹĺĻļĽľĿŀŁłŃńŅņŇňŉŊŋŌōŎŏŐőŒœŔŕŖŗŘřŚśŜŝŞşŠšŢţŤťŦŧŨũŪūŬŭŮůŰűŲųŴŵŶŷŸŹźŻżŽž  ".split(
        ""
    );
    let tempText = "";
    for (let i = 0; i < Math.floor(Math.random() * 5000); i++) {
        tempText = tempText.concat(
            pool[Math.floor(Math.random() * pool.length)]
        );
        if (Math.random() < 0.06) tempText = tempText.concat(" ");
    }
    return tempText;
}
