describe('Player', function(){

  beforeEach(function(){
    var player_1 = new Player('X');
    var player_2 = new Player('0');
  });

    it("player 1's symbol is X", function() {
      expect(player_1.symbol).toBe('X')
    });

    it("player 2's symbol is 0", function() {
      expect(player_2.symbol).toBe('0')
    });
});
