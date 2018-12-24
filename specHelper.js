var tea = {

  check: function(description, test) {
    try {
      test();
      console.log(`%c PASS: ${description}`, "color: green");
    } catch(e) {
      console.log(`%c FAIL: ${description}`, "color: red");
      console.log(e.stack);
    }
  },

  assert: function(val) {
    if (val) return true;

    throw new Error('Assertion failed');
  }

}
