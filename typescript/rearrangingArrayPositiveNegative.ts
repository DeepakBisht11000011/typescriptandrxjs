class RearrangeEvenOddPositions {
  private array: number[] = [1, 3, 2, 2, 5];
  public mainRunner = () => {
    this.doRearranging();
  };
  public doRearranging = () => {
    console.log(this.array);
    for (let i = 1; i < this.array.length; i++) {
      if (i % 2 === 0 && this.array[i] > this.array[i - 1]) {
        this.swap(i, i - 1);
      }
      if (i % 2 !== 0 && this.array[i] <= this.array[i - 1]) {
        this.swap(i, i - 1);
      }
    }
    console.log(this.array);
  };
  public swap = (a: number, b: number) => {
    let temp = this.array[a];
    this.array[a] = this.array[b];
    this.array[b] = temp;
  };
}
let main = new RearrangeEvenOddPositions();
main.mainRunner();
