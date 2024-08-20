function log()
{
const Firstname = document.getElementById("Firstname") .value;
const Lastname = document.getElementById("Lastname"). value;
const Password = document.getElementById("Password") .value;
const Zipcode = document.getElementById("Zipcode"). value;
const fullname = Firstname= " " = Lastname;

//if nothing is entered in the name tab, a message would appear
if (fullname. value === " " || fullname. value == null){
      document.getElementById("Acount Validation").innerHTML = "Need first and Last";
    }
      //if the name is under 2 characters or over 20 a message would appear 
      if (fullname. value. length >=2 || fullname.value.length <=20){
      document.getElementById("Acount Validation").innerHTML = "First and last to long";
    }
            //if the zip code isn't of the right numerical digits  a message would appear 
        if (Zipcode. length <=4){
      document.getElementById("Acount Validation").innerHTML = "Zipcode invalided";
       }
      //if the password isn't of the right numerical digits  a message would appear
          if(Password.value.length <=6)
    {
      document.getElementById("Acount Validation").innerHTML = "Password to short";
    }
        //if the password isn't of the right numerical digits  a message would appear
            if(Password.value.length >=20){
    document.getElementById("Acount Validation").innerHTML = "Password to long";
    }
else
    {
      alert("Login Complete");
    }
}
