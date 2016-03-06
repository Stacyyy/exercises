$(function(){
	$.ajax(
		{
		url: "./origin.json",
		dataTypes : "JSON",
		type: "GET",
		success: function(data){
			var item = data,
				height,
			    content = " ";
			for(var i = 0; i < item.length; i++){
				
				if(item[i].tag){
					content += "<div><h1>" + item[i].tag + "</h1>" + "<h2>&nbsp;" + item[i].year + "</h2></div>";			
				}
				else
				{
					content += "<div><h4>" + item[i].data + "</h4>" + "<h3>&nbsp;" + item[i].name + "</h3></div>";
				}
	
			};

			$(".container").html(content);
			height = $('.container').height();
			$(".container div").each(function(index){
				var that = this;
				$(this).css("display","none").delay(300*index).fadeIn(1000).addClass("on");
				//'display、delay and fadeIn' will effect the height of '.container',
				//they are asynchronous executions. 
			});
					
			$(".line").height(height+"px").css("display","none").slideDown(2500);
		}
	});

	
})