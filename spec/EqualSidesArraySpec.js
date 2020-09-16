describe("findEvenIndex", function() {

  it("returns 0 when given an array of one number", function() {
    expect(findEvenIndex([2])).toEqual(0)
  })

  it("returns 1 when given a symmetrical array of 3 numbers", function() {
    expect(findEvenIndex([2, 3, 2])).toEqual(1)
  })
})