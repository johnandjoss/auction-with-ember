Auction.NewPictureController = Ember.Controller.extend({
  needs: ['item'],
  actions: {
    save: function() {
      var picture = this.store.createRecord('picture', {
        text: this.get('text')
      });
      picture.save();

      var item = this.get('model');
      item.get('pictures').pushObject(picture);
      item.save();

      this.transitionToRoute('item', item.id);
    }
  }
});