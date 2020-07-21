function submit() {
  const account = $("#account").val();
  const password = $("#password").val();

  $.ajax({
    url: "https://localhost:44345/api/v1/User",
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify({ UserName: account, Password: password }),
  })
    .done(function (response) {
      $("#account").val("");
      $("#password").val("");
      toastr.success(response.message);
      $.cookie("token", response.token);
      checkLogin();
    })
    .fail(function (response) {
      toastr.error(response.responseText);
    });
}

function logout() {
  $.removeCookie("token");
  toastr.success("loged out");
  checkLogin();
}
function checkLogin() {
  if ($.cookie("token") == null) {
    $("#status").text("Chưa đăng nhập");
    $("#status").removeClass("text-success");
    $("#status").addClass("text-danger");
    $("#account").prop("disabled", false);
    $("#password").prop("disabled", false);
    $("#submit").prop("disabled", false);
    $("#logout").prop("disabled", true);
  } else {
    $("#status").text("Đã đăng nhập");
    $("#status").removeClass("text-danger");
    $("#status").addClass("text-success");
    $("#status").removeClass("text-danger");
    $("#status").addClass("text-success");
    $("#account").prop("disabled", true);
    $("#password").prop("disabled", true);
    $("#submit").prop("disabled", true);
    $("#logout").prop("disabled", false);
  }
}
checkLogin();
