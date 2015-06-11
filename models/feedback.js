Auction.Feedback = DS.Model.extend({
  text: DS.attr(),
  item: DS.belongsTo('item', {async: true})
});
