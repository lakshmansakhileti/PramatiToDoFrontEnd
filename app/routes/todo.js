/**
 * Created by lakshmanar on 26/12/16.
 */

import Ember from "ember";

export default Ember.Route.extend({
  todoList : function () {
    return this.get('model');
  }
});
