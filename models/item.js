Auction.Item = DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  owner: DS.attr(),
  bidNumber: DS.attr(),
  price: DS.attr(),
  pic1: DS.attr(),
  pic2: DS.attr(),
  pic3: DS.attr(),
  pic4: DS.attr(),
  pic11: DS.attr(),
  pic22: DS.attr(),
  pic33: DS.attr(),
  pic44: DS.attr(),
  feedbacks: DS.hasMany('feedback', {async: true})
});
