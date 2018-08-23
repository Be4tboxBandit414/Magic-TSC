$(() => {
  const queryInput = $("#query");

  queryInput.click(() => {
    queryInput.val("").css("color", "black");
  });

  queryInput.focusout(() => {
    if (queryInput.val() == "") {
      queryInput.val("Search for Magic...").css("color", "#d7d9dd");
    }
  });
});
