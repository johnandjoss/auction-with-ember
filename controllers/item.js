Auction.ItemController = Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      debugger;
      this.get('model').save();

      this.transitionToRoute('items');
    }

  }

});
