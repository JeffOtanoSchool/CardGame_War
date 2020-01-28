const Deck = {
 cardArray: [],
  load: function(){
    for(i = 0; i < suit.length; i++){
      for(j = 0; j < rank.length; j++ ){
        this.cardArray.push(new Card(suit[i],rank[j]));
      }
    }
  }

}
