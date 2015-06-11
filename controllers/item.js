Auction.ItemController = Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
  
      this.get('model').save();

      this.transitionToRoute('items');
    },
    delete: function(){
      if(confirm("are you sure?")) {
        this.get('model').destroyRecord();
        this.transitionToRoute('items');
      }
}
  }

});
