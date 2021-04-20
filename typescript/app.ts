export {};
interface Car {
  speed(s: number): number;
  type(t: string): string;
}

class BMW implements Car {
  speed(s: number): number {
    return s ?? 100;
  }
  type(t: string): string {
    return t ?? "hatchback";
  }
  static numberOfTyres = (tyre: number) => {
    return 4;
  };
}
let i58w: BMW = new BMW();
i58w.speed(200);
i58w.type("sliding window");

console.log(i58w.speed(400));
console.log(BMW.numberOfTyres(2));
