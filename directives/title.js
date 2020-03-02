import $ from "jquery";

export default {
  bind: function(el = new HTMLElement()) {
    $(el).tooltip();
  }
};
