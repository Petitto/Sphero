

//main function~
async function startProgram() {
    // Write code here
    setMainLed({r: 0, g: 0, b: 225});
    await speak("Hello Square",true);
    await delay(1);
    for(var i = 0; i < 4; i++){
        setMainLed(getRandomColor());
        await Sound.Game.Coin.play(true);
        await roll((getHeading() + 90), 60, 1);
        await delay(1);
    }
}