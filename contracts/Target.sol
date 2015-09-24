contract Target {
  uint public amount_received;
  uint public times_called;
  bool public function_called;
  uint public argument;

  function() {
    times_called += 1;
    amount_received += msg.value;
  }

  function a_function(uint an_argument) {
    function_called = true;
    argument = an_argument;
  }
}
