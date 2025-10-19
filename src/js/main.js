$(document).ready(function () {
  // Update time every second
  window.setInterval(function () {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
    };
	// Display time in status
    $("#time").html(new Date().toLocaleTimeString(undefined, options));
  }, 1000);

  window.setInterval(function () {
	// Display date in status
    $("#date").html(new Date().toLocaleDateString());
  }, 60000);

  // Fake draggable, resizable windows with jQueryUI
  $(".window").draggable({
    handle: ".window-bar",
    containment: ".desktop",
    scroll: false,
    snap: ".desktop",
    snapMode: "inner",
    stack: ".window",
  });
  $(".window").resizable({});

  $("a[data-window]").click(function () {
    const windowToOpen = $(this).data("window");
    $("input#start-menu").prop("checked", false);
    $("#" + windowToOpen).show();
  });

  $(".close-button").click(function () {
    const parent = $(this).parents(".window");
    parent.hide();
  });
});
