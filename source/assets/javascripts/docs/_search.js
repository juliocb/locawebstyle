$('#search').keyup(function(){
  var searchField = $('#search').val();
  var myExp = new RegExp(searchField, "i");
  var output = '<ul class="ls-search">';
      output += '<li class="ls-no-list-style"><h2 class="ls-title-2">Resultado da busca</h2></li>';
  $.getJSON('/assets/javascripts/busca.json', function(data) {
    $.each(data, function(key, val){
      if ((val.title.search(myExp) != -1) || (val.path.search(myExp) != -1)) {
        output += '<li class="ls-no-list-style"><a class="ls-display-block" href="/'+ val.path +'">' + val.title;
        output += '<p>' + val.description + '</p></a></li>';
      }
    });
    $('#results').html(output);
  });
});