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
    },
    showFullsize: function() {
      $(".picture-group").addClass('hidden');
      $(".fake").removeClass('hidden');
    },
    hideFullsize: function() {
      $(".picture-group").removeClass('hidden');
      $(".fake").addClass('hidden');
    },
    showFullsize2: function() {
      $(".picture-group").addClass('hidden');
      $(".fake2").removeClass('hidden');
    },
    hideFullsize2: function() {
      $(".picture-group").removeClass('hidden');
      $(".fake2").addClass('hidden');
    },
    showFullsize3: function() {
      $(".picture-group").addClass('hidden');
      $(".fake3").removeClass('hidden');
    },
    hideFullsize3: function() {
      $(".picture-group").removeClass('hidden');
      $(".fake3").addClass('hidden');
    },

    showFullsize4: function() {
      $(".picture-group").addClass('hidden');
      $(".fake4").removeClass('hidden');
    },
    hideFullsize4: function() {
      $(".picture-group").removeClass('hidden');
      $(".fake4").addClass('hidden');
    },

  }

});
