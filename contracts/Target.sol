contract Target {
  uint public amount_received;
  uint public times_called;

  function() {
    times_called += 1;
    amount_received += msg.value;
  }
}
