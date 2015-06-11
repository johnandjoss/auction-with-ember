Auction.NewItemController = Ember.Controller.extend({
  actions: {
    save: function() {
      var newItem = this.store.createRecord('item', {
        title: this.get('title'),
        description: this.get('description'),
        owner: this.get('owner'),
        bidNumber: this.get('bidNumber'),
        price: this.get('price'),
        pic1: this.get('pic1'),
        pic2: this.get('pic2'),
        pic3: this.get('pic3'),
        pic4: this.get('pic4'),
        pic11: this.get('pic11'),
        pic22: this.get('pic22'),
        pic33: this.get('pic33'),
        pic44: this.get('pic44')
      });
      newItem.save();
      this.transitionToRoute('items');
    }
  }
});
