function validate(){
  let n = document.getElementById("name").value;
  let e = document.getElementById("email").value;
  let m = document.getElementById("msg").value;

  if(!n || !e || !m){
    alert("Please fill all fields");
    return false;
  }

  alert("Message sent ✨");
  return false;
}