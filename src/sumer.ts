function sumer (...numbers:number[]):number {
  let result:number=0
  numbers.forEach(number=>{
    result +=number
  })
  return result
}

export {sumer}