$( document ).ready(function() {

	// Display time in status
	window.setInterval(function(){
		$("#time").html(new Date().toLocaleTimeString())
	}, 1000)


	// Fake draggable, resizable windows with jQueryUI
	$(".window").draggable({
		handle:".window-bar",
		containment: ".desktop", 
		scroll: false,
		snap: ".desktop", 
		snapMode: "inner",
		stack: ".window"
	});
	$(".window").resizable({
	});

	$("a[data-window]").click(function(){
		const windowToOpen = $(this).data("window")
		$("input#start-menu").prop( "checked", false );
		$("#" + windowToOpen).show();
	})

	$(".close-button").click(function(){
		const parent = $(this).parents(".window")
		parent.hide()
	})
	
});