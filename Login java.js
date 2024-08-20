
function log()
{
const Firstname = document.getElementById("Firstname") .value;
const Lastname = document.getElementById("Lastname"). value;
const Password = document.getElementById("Password") .value;
const Zipcode = document.getElementById("Zipcode"). value;
const fullname = Firstname= " " = Lastname;


if (fullname. value === " " || fullmane.value == null){
      document.getElementById("Acount Validation").innerHTML = "Need first and Last";
    }
      if (fullname. value.lenght >=2 || fullmane.value.lenght <=20){
      document.getElementById("Acount Validation").innerHTML = "First and last to long";
    }

        if (Zipcode.lenght <=4){
      document.getElementById("Acount Validation").innerHTML = "Zipcode invalided";
       }
          if(Password.value.lenght <=6)
    {
      document.getElementById("Acount Validation").innerHTML = "Password to short";
    }
            if(Password.value.lenght >=20){
    document.getElementById("Acount Validation").innerHTML = "Password to long";
    }
else
    {
      alert("Login Complete");
    }
}
