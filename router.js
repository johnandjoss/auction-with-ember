Auction.Router.map(function(){
  this.resource('items', {path: '/'});
  this.resource('item', {path: '/:item_id'});
  this.resource('new-item');
});
