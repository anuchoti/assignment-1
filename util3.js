   
               function validate1()
                {
                   var user= document.getElementById("user").value;
                   
                   var re=/^[a-z-A-Z][a-z0-9#$]{1,10}$/;
                   if(!re.test(user))
                   {
                       //document.write("cannot be empty");
                       document.querySelector(".c").innerHTML="invalid username";
                       return false;
                       
                   }
                   else{
                       document.querySelector(".c").innerHTML="";
                       //document.querySelector(".c").textContent="valid username";
                       return true;
                   }
                }
                function validate11()
                {
                   
                   var mbno= document.getElementById("mbno").value;
                   var re1=/^([1-9]{1})([234789]{1})([0-9]{8})$/;

                 
                   if(!re1.test(mbno))
                   {
                       //document.write("cannot be empty");
                       document.querySelector(".c1").innerHTML="invalid mobileno";
                       return false;
                       
                   }
                   else{
                       document.querySelector(".c1").innerHTML="";
                       //document.querySelector(".c").textContent="valid username";
                       return true;
                   }
                }
                function validate12()
                {
                    var email=document.getElementById("email").value;
                    var re2=/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{3}$/;
                  
                    if(!re2.test(email))
                    {
                        //document.write("cannot be empty");
                        document.querySelector(".c3").innerHTML="invalid mail";
                        return false;
                    }
                    else{
                        document.querySelector(".c3").innerHTML="";
                        //document.querySelector(".c").textContent="valid username";
                        return true;
                    }
                 }
                 function my() {
                    if (confirm("Accepting agreements!")) {
                        document.querySelector(".c4").innerHTML="Acceepted license&agreements";
                        return true;
                    } else {
                        document.querySelector(".c4").innerHTML="YOu must accept license&agreements";
                        return false;
                    }
                     
                }
                function ValidateDOB() {
   
                    //Get the date from the TextBox.
                    var dateString = document.getElementById("dob").value;
                    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;
                
                    //Check whether valid dd/MM/yyyy Date Format.
                    if (regex.test(dateString)) {
                        var parts = dateString.split("/");
                        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
                        var dtCurrent = new Date();
                      document.querySelector(".c2").innerHTML= "Eligibility 18 years ONLY.";
                            if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
                            return false;
                        }
                
                        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {
                
                            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                                return false;
                            }
                            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                                if (dtCurrent.getDate() < dtDOB.getDate()) {
                                    return false;
                                }
                            }
                        }
                        document.querySelector(".c2").innerHTML= "";
                        return true;
                    } else {
                        document.querySelector(".c2").innerHTML= "enter format dd/mm/yyyy ";
                            return false;
                    }
                }
                
                
                function validate2()
                {

                
                if(validate1()==true && validate11()==true &&ValidateDOB()==true &&validate12()==true &&my()==true)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
