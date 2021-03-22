$(".language-plantuml").each(function() {
  var src = "//www.plantuml.com/plantuml/img/" + window.plantumlEncoder.encode( $(this).text() )
  $(this).prepend($('<img>').attr('src', src));
});
