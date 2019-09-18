import Ember from "ember";

export default Ember.Component.extend({
  tagName: "",
  tecIcons: Ember.computed("tecnologias", function() {
    let tecs = this.get("tecnologias").split(", ");
    var tec_list = [];
    let name = "";
    let url = "";
    tecs.forEach(function(tec) {
      if (tec === "django") {
        name = "Django";
        url = "https://www.djangoproject.com";
      }
      if (tec === "bootstrap") {
        name = "Bootstrap";
        url = "https://getbootstrap.com";
      }
      if (tec === "html") {
        name = "HTML 5";
        url = "https://www.w3.org/html/";
      }
      if (tec === "ember") {
        name = "Ember JS";
        url = "https://emberjs.com";
      }
      if (tec === "semantic") {
        name = "Semantic UI";
        url = "https://semantic-ui.com/";
      }
      if (tec === "postgres") {
        name = "PostgreSQL";
        url = "https://www.postgresql.org";
      }
      if (tec === "rest") {
        name = "Django REST Framework";
        url = "https://www.django-rest-framework.org";
      }
      if (tec === "d3") {
        name = "D3";
        url = "https://d3js.org";
      }
      if (tec === "flask") {
        name = "Flask";
        url = "https://flask.palletsprojects.com";
      }
      if (tec === "sqlalchemy") {
        name = "SQL Alchemy";
        url = "https://www.sqlalchemy.org";
      }
      if (tec === "mirage") {
        name = "Ember Cli Mirage";
        url = "https://www.ember-cli-mirage.com";
      }
      if (tec === "nodejs") {
        name = "Node.js";
        url = "https://nodejs.org";
      }
      if (tec === "electron") {
        name = "Electron";
        url = "https://electronjs.org";
      }
      if (tec === "inkscape") {
        name = "Inkscape";
        url = "https://inkscape.org";
      }
      if (tec === "drupal") {
        name = "Drupal";
        url = "https://www.drupal.org";
      }
      if (tec === "gimp") {
        name = "GIMP";
        url = "https://www.gimp.org";
      }
      if (tec === "blender") {
        name = "Blender 3D";
        url = "https://www.blender.org";
      }
      if (tec === "kdenlive") {
        name = "KDEnlive";
        url = "https://kdenlive.org";
      }
      if (tec === "audacity") {
        name = "Audacity";
        url = "https://www.audacityteam.org/";
      }
      if (tec === "sqlite") {
        name = "SQLite";
        url = "https://www.sqlite.org";
      }
      if (tec === "php") {
        name = "PHP";
        url = "https://www.php.net";
      }
      if (tec === "osm") {
        name = "OpenStreetMap";
        url = "https://www.openstreetmap.org";
      }
      if (tec === "tachyons") {
        name = "Tachyons";
        url = "https://tachyons.io";
      }
      tec_list.push({ slug: tec, name: name, url: url });
    });
    return tec_list;
  }),
  didInsertElement() {
    Ember.$(".fluid.card .image.ebit-blog").dimmer({
      on: "hover"
    });
  }
});
