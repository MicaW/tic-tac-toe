describe('Game', function(){

    it("a game has player 1", function() {
      expect(Game.player_1).toBe(Player())
    });

    it("a game has player 2", function() {
      expect(Game.player_2).toBe(Player())
    });
});
