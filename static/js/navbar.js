$(function () {
  $(".select-field")
    .find("select")
    .change(function () {
      window.location.href = $(this).val();
    });

  $("#myModal").on("hidden.bs.modal", function () {
    $("#video").trigger("pause");
  });

  //autocomplete
  $("#search-bar").autocomplete({
    serviceUrl: "/search.php?cate=all&auto=true&size_flag=false",
    paramName: "q",
    minChars: 2,
    onSelect: function (suggestion) {
      $("form").submit();
    },
  });

  var pathname = window.location.pathname;
  var origin = window.location.origin;
  if (pathname.includes("en")) {
    var currentPath = pathname.slice(3);
    $("#zh-item").attr("href", `${origin}${currentPath}`);
    $("#english-item")
      .attr("href", `${origin}${pathname}`)
      .css("color", "#00a971");
  } else {
    $("#zh-item").attr("href", `${origin}${pathname}`).css("color", "#00a971");
    $("#english-item").attr("href", `${origin}/en${pathname}`);
  }
  // $("#zh-item").click(function () {
  //   $(this).css("color", "#00a971");
  //   $("#english-item").css("color", "#fff");
  // });

  // $("#english-item").click(function () {
  //   $(this).css("color", "#00a971");
  //   $("#zh-item").css("color", "#fff");
  // });
});

// $(function () {
//   var pathname = window.location.pathname;
//   var origin = window.location.origin;
//   if (pathname.includes("en")) {
//     var currentPath = pathname.slice(3);
//     console.log("currentPath: ", currentPath);
//     $("#zh-item").attr("href", `${origin}${currentPath}`);
//     $("#english-item").attr("href", `${origin}${pathname}`);
//   } else {
//     $("#zh-item").attr("href", `${origin}${pathname}`);
//     $("#english-item").attr("href", `${origin}/en${pathname}`);
//   }
// });
