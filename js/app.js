var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + $.cookie("token"));

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch("https://localhost:44345/api/v1/NewsCategory", requestOptions)
  .then((response) => response.json())
  .then((result) => console.log(result))
  .catch(function () {
    console.log("fail");
  });
