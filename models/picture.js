Auction.Picture = DS.Model.extend({
  thumbnail: DS.attr(),
  fullSize: DS.attr(),
  text: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
