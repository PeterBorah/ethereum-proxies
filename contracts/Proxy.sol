contract Proxy {
  function execute(address _to, uint _value, bytes _data) returns (bytes32 _r) {
    _to.call.value(_value)(_data);
  }

  function() {
  }
}
