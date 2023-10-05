import {sumer} from './sumer'

describe('sumer will add given numbers together',()=>{
  it('should return the number when only a single number is given',()=>{
    const result = sumer(25);
    expect(result).toBe(25)
  });

  it('should add two numbers together', ()=>{
    const result = sumer(40,37)
    expect(result).toBe(77)
  })
})