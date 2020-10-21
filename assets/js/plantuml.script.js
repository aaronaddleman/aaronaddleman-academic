$("uml").each(function() {
  var src = "//www.plantuml.com/plantuml/img/" + window.plantumlEncoder.encode( $(this).text() )
  $(this).replaceWith($('<img>').attr('src', src));
});