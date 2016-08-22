(function ($) {
    $('button').on('click', function () {
        // remove resultset if this has already been run
        $('.content ul').remove();
        // add spinner to indicate something is happening
        $('<i class="fa fa-refresh fa-spin"/>').appendTo('body'); 
        
        // get selected zip code from selectbox
        var zip = $('select option:selected').text().substring(0,6);

        $.getJSON('http://data.colorado.gov/resource/4ykn-tg5h.json?entitystatus=Good%20Standing&principalzipcode=' + zip, function (data) {
        	var items= [];
        	var ul;
        
        $.each(data, function(key,val){
          items.push('<li><span class="name">' + val.entityname + '</span><br>' +
          	'<span class="addr">' + val.principaladdress1 + '</span><br>' +
          	'<span class="fname">' + val.agentfirstname + " " + '</span>' +
          	'<span class="lname">' + val.agentlastname + '</span></li>')});

          if (items.length < 1) {
          	items.push('<li>There is no information available for this zip code, try again!</li>');
          }

        $(".fa-spin").remove();
        

        $ul = $('<ul/>').appendTo(".content");
        $ul.append(items);
        
        });
        });
	}(jQuery));
