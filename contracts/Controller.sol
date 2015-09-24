contract Controller {
  address public target;
  uint public amount;

  function set_parameters(address _target, uint _amount) {
    target = _target;
    amount = _amount;
  }
}
