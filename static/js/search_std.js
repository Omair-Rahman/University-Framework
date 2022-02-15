function srcStdFunc()
{
  var Name = document.getElementById("popupN");
  var Uni = document.getElementById("popupU");
  var Submit = document.getElementById("popupS");
  if (Name.style.display === "none")
  {
    Name.style.display = "block";
    Uni.style.display = "block";
    Submit.style.display = "block";
  }
  else
  {
    Name.style.display = "none";
    Uni.style.display = "none";
    Submit.style.display = "none";
  }
}
