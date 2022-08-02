export type Separator = "-" | "_" | " ";
declare global {
    interface String {
      
      capitalized<T extends Separator>(sep?: T, firstChar = true): string;
    }
}
export {};