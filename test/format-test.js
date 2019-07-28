var tape = require("tape"),
    duration = require("../");

tape("Test default formatter", function(test) {
  const formatter = duration.format();
  test.equal(formatter(0), "00:00");
  test.equal(formatter(1000), "00:01");
  test.equal(formatter(30000), "00:30");
  test.equal(formatter(11111), "00:11.111");
  test.equal(formatter(59999), "00:59.999");
  test.equal(formatter(60000), "01:00");
  test.equal(formatter(66000), "01:06");
  test.equal(formatter(86399999), "23:59:59.999");
  test.equal(formatter(172800000), "48:00:00");
  test.end();
});
