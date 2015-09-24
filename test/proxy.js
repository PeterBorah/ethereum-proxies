contract('Proxy', function(accounts) {
  it("should forward transfers of ether", function(done) {
    var controller = Controller.at(Controller.deployed_address);
    var target = Target.at(Target.deployed_address);

    Proxy.new(controller.address).
      then(function(proxy) {
        controller.set_parameters(target.address, 1000).
        then(function() { web3.eth.sendTransaction({from: accounts[0], to: proxy.address, amount:1000}, function() {
        web3.eth.sendTransaction({from: accounts[0], to: proxy.address}, function() {
          target.times_called.call().
          then(function(result) { assert.equal(result, 1) }).
          then(function() { return target.amount_received.call() }).
          then(function(result) {
            assert.equal(result, 1000);
            done();
        }).catch(done)
        });
        });
    }).catch(done)
    }).catch(done)
  });
});
