import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  tecIcons: Ember.computed("tecnologias", function() {
    let tecs = this.get("tecnologias").split(", ");
    var tec_list = [];
    tecs.forEach(function(tec) {
      if (tec === "django") {
        name = "Django";
      }
      if (tec === "bootstrap") {
        name = "Bootstrap";
      }
      if (tec === "html") {
        name = "HTML 5";
      }
      if (tec === "ember") {
        name = "Ember JS";
      }
      if (tec === "semantic") {
        name = "Semantic UI";
      }
      if (tec === "postgres") {
        name = "PostgreSQL";
      }
      if (tec === "rest") {
        name = "Django REST Framework";
      }
      if (tec === "d3") {
        name = "D3";
      }
      if (tec === "flask") {
        name = "Flask";
      }
      if (tec === "sqlalchemy") {
        name = "SQL Alchemy";
      }
      if (tec === "mirage") {
        name = "Ember Cli Mirage";
      }
      if (tec === "nodejs") {
        name = "Node.js";
      }
      if (tec === "electron") {
        name = "Electron";
      }
      if (tec === "inkscape") {
        name = "Inkscape";
      }
      if (tec === "drupal") {
        name = "Drupal";
      }
      if (tec === "gimp") {
        name = "GIMP";
      }
      if (tec === "blender") {
        name = "Blender 3D";
      }
      if (tec === "kdenlive") {
        name = "KDEnlive";
      }
      if (tec === "audacity") {
        name = "Audacity";
      }
      if (tec === "sqlite") {
        name = "SQLite";
      }
      if (tec === "php") {
        name = "PHP";
      }
      tec_list.push({ slug: tec, name: name });
    });
    return tec_list;
  }),
  didInsertElement() {
    Ember.$(".fluid.card .image.ebit-blog").dimmer({
      on: "hover"
    });
  }
});
