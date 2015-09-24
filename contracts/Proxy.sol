import "Controller";

contract Proxy {
  Controller controller;

  function Proxy(Controller _controller) {
    controller = _controller;
  }

  function() {
    address target = controller.target();
    uint amount = controller.amount();

    target.call.value(amount)(msg.data);
  }
}
