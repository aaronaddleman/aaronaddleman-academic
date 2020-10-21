$(".language-plantuml").each(function() {
  var src = "//www.plantuml.com/plantuml/img/" + window.plantumlEncoder.encode( $(this).text() )
  $(this).append($('<img>').attr('src', src));
});