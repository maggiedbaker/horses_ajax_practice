$(document).ready(function() {
  $("#new-horse").on("click", function(event) {
    event.preventDefault();

    $.ajax({
      type: "get",
      url: "/horses/new",
    }).done(function(response) {
      $(".new-horse-form").append(response);

    })
  })

  $(".new-horse-form").on("submit", "#horse-form", function(event) {
    event.preventDefault();
    $.ajax({
      type: "post",
      url: "/horses",
      data: $(this).serialize()
    }).done(function(response) {
      $("#add-horse").append(response);
      $(".new-horse-form").empty();
    })
  })

  $("#horse-list").on("click", ".horse-link", function(event) {
    event.preventDefault();
    var url = $(this).attr("href")
    var id = $(this).attr("href").slice(-1)
    var $div = $(this).parent().next()
    $.ajax({
      type: "get",
      url: url
    }).done(function(response) {
      $div.append(response)
    }).fail(function(response) {
      alert("Try again!");
    })
  })
});
