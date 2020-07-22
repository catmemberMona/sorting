describe("Bubble Sort", function () {
  beforeAll(function () {
    console.log(window);
    spyOn(window, "swap").and.callThrough();
  });
  it("takes 4 swaps to sort array", function () {
    window.bubbleSort([5, 2, 7, 6]);
    expect(window.swap.calls.count()).toEqual(4);
  });
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles an array with 1 item", function () {
    expect(bubbleSort([9])).toEqual([9]);
  });
  it("handles an array with multiple items", function () {
    expect(bubbleSort([5, 2, 7, 6])).toEqual([2, 5, 6, 7]);
  });
});
