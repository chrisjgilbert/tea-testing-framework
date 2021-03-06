var tea = {

  describe: function(desc, fn) {
    console.log(desc)
    fn()
  },

  it: function(desc, fn) {
    this.describe("#" + desc, fn)
  },

  check: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy")
    } else {
      console.log('%c Test passed!', "color: green")
    }
  }
  
}
