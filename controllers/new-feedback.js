Auction.NewFeedbackController = Ember.Controller.extend({
  isEditing: false,
  needs: ['item'],
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      this.set('isEditing', false);
      var feedback = this.store.createRecord('feedback', {
        text: this.get('text')
      });
      feedback.save();

      var item = this.get('model');
      item.get('feedbacks').pushObject(feedback);
      item.save();

      this.transitionToRoute('item', item.id);
    }
  }
});
