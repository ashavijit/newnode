declare global {
  interface Number {
    
    between(min: number, max: number): boolean;
  }
}
export {};