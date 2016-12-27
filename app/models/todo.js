import DS from 'ember-data';

export default DS.Model.extend({
  sno: DS.attr('number'),
  itemTitle : DS.attr('string'),
  dueDate : DS.attr('date')
});
