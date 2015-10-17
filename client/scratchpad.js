var enemiesSelector = d3.selectall(enemies)

enemiesSelector.transition().duration(5000).attr('cx', randomX).attr('cy', randomY);

d3.timer(300, function(){
  // each enemy instance to call .move
  enemyInstances.transition(d3.transition(/*details*/).duration().tween(function(){/*call .move*/}).attr('cx', this.x))
});