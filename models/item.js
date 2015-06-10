Auction.Item = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  price: DS.attr()
});
