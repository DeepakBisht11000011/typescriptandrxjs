class ArrayRearrangeNegativePositive {
  private array: number[] = [12, 11, -13, -5, 6, -7, 5, -3, -6];
  public startRearrangeNumbers = () => {
    console.log(this.array);
    let length: number = this.array.length;
    this.rearrangeNumbers(0, length - 1);
    console.log(this.array);
  };
  public reverseArray = (begin: number, last: number) => {
    if (begin === last) return;
    for (let i = begin, j = last; i < j; i++, j--) {
      let temp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = temp;
    }
  };
  public rearrangeNumbers = (begin: number, last: number) => {
    if (begin >= last) return;
    this.rearrangeNumbers(begin + 1, last);
    if (this.array[begin] > 0) {
      this.reverseArray(begin + 1, last);
      this.reverseArray(begin, last);
    }
  };
}
let mainRunner = new ArrayRearrangeNegativePositive();
mainRunner.startRearrangeNumbers();
