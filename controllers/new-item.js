Auction.NewItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        bidNumber: this.get('bidNumber'),
        price: this.get('price')
      });
      newItem.save();
      this.transitionToRoute('items');
    }
  }
});
