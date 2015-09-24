contract('Proxy', function(accounts) {
  it("should forward transfers of ether", function(done) {
    var target = Target.at(Target.deployed_address);
    var proxy = Proxy.at(Proxy.deployed_address);

    web3.eth.sendTransaction({from: accounts[0], to: proxy.address, value:1000}, function() {
      proxy.execute(target.address, 1000, []).
          then(function() { return target.times_called.call() }).
          then(function(result) { assert.equal(result, 1) }).
          then(function() { return target.amount_received.call() }).
          then(function(result) {
            assert.equal(result, 1000);
            done();
        }).catch(done)
        });
  });
});
