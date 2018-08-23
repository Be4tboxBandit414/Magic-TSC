$(() => {
  const queryInput = $("#query");

  queryInput.click(() => {
    queryInput.val("");
    queryInput.css("color", "black");
  });

  queryInput.focusout(() => {
    if (queryInput.val() == "") {
      queryInput.val("Search for Magic...");
      queryInput.css("color", "#d7d9dd");
    }
  });

  //   $(".sort-results select, #sort-dropdown").hover(() => {
  //     console.log("hovering");
  //   });
});
