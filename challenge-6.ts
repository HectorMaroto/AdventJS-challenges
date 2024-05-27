function maxDistance(movements: string): number {

    let distance: number = 0;
    let comodines: number = 0;
  
    for(const move of movements){
      if(move === '>') distance++;
      if(move === '<') distance--;
      if(move === '*') comodines++
    }
  
    return Math.abs(distance) + comodines
}
  
const movements = '>>*<'
const result = maxDistance(movements)
console.log(result) // -> 2

const movements2 = '<<<>'
const result2 = maxDistance(movements2)
console.log(result2) // -> 2

const movements3 = '>***>'
const result3 = maxDistance(movements3)
console.log(result3) // -> 5