function manufacture(gifts: string[], materials: string) {
  
    const result : string[] = [...gifts];
    const len: number = gifts.length;
  
    for (let i = 0; i < len; i++){
  
      for(const letter of gifts[i]){
        if(!materials.includes(letter)){
          result.splice(i, 2)
        }
      }
      
    }
  
    return result;
  } 

  
const gifts = ['tren', 'oso', 'pelota']
const materials = 'tronesa'

manufacture(gifts, materials) // ["tren", "oso"]
// 'tren' SÍ porque sus letras están en 'tronesa'
// 'oso' SÍ porque sus letras están en 'tronesa'
// 'pelota' NO porque sus letras NO están en 'tronesa'
