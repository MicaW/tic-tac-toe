describe('Player', function(){

    it("player 1's symbol is X", function() {
      var player_1 = new Player('X');
      expect(player_1.symbol).toBe('X')
    });

    it("player 2's symbol is 0", function() {
      var player_2 = new Player('0');
      expect(player_2.symbol).toBe('0')
    });
});
