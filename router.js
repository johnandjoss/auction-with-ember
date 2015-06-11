Auction.Router.map(function(){
  this.resource('items', {path: '/'});
  this.resource('item', {path: '/:item_id'}, function(){
  	this.resource('new-feedback');
  });
  this.resource('new-item');
});
