function findNaughtyStep(original: string, modified: string) {
  
    const orLen = original.length;
    const modLen = modified.length
  
    if(orLen < modLen){
      for (let i = 0; i<modLen;i++){
        if(original[i] !== modified[i]) return modified[i] 
      }
    }else{
      for (let i = 0; i<orLen;i++){
        if(original[i] !== modified[i]) return original[i] 
      }
    }
  
    
  
    return ''
}
  
const original = 'abcd'
const modified = 'abcde'
findNaughtyStep(original, modified) // 'e'