function validateForm(){
  var name=
  document.getElementById('studentName').value;
  var name=
  document.getElementById('parentName').value;
  var name=
  document.getElementById('email').value;
  var name=
  document.getElementById('phone').value;
  var name=
  document.getElementById('gradeLevel').value;
  var name=
  document.getElementById('department').value;
  if (studentName === "" || parentName === ""|| email === ""|| phone === ""|| gradeLevel === ""|| department === ""){
    alert("Fill in the required fields correctly");
    return false;
  }
  //redirect to registration success
  window.location.href='registration-success.html';

  //prevent default form submission
  return false;
}