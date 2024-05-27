function adjustLights(lights: string[]): number {
    const red = '🔴';
    const green = '🟢';
    const len = lights.length;
    let changes = 0;
  
    for (let i = lights.length-1; i>0; i--){
      if(lights[i] === red && lights[i-1] === red){
        lights[i-1] = green;
        changes++;
      }else if(lights[i] === green && lights[i-1] === green){
        lights[i-1] = red;
        changes++;
      }
    }
    return changes;
}
  
adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])
// -> 1 (cambias la cuarta luz a 🔴)

adjustLights(['🔴', '🔴', '🟢', '🔴', '🟢'])
// -> 1 (cambia la primera luz a verde)

adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])
// -> 2 (cambias la segunda luz a 🟢 y la tercera a 🔴)

adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])
// -> 0 (ya están alternadas)

adjustLights(['🔴', '🔴', '🔴'])
// -> 1 (cambias la segunda luz a 🟢)