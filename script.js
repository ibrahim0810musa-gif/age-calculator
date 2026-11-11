const date = document.getElementById("date");

const calculateAgeButton = document.getElementById("calculate-age");

const message  = document.getElementById("message");


calculateAgeButton.addEventListener("click", () =>{
     
     const usersDate = date.value;
     
     if(usersDate === "") {
     message.textContent = "";
     
  alert("Please enter your date");
          
         return;
          
     }
     
     const today = new Date();
     const birthDate = new Date(usersDate);
     
     if(birthDate > today) {
     message.textContent = "";
          alert("Please enter a valid date of birth. Future dates are not allowed.");
          return;
     }
     
     const birthYear = birthDate.getFullYear();
     
     const birthMonth = birthDate.getMonth();
     
     const birthDay = birthDate.getDate();
     
     
     const currentYear = today.getFullYear();
     
     const currentMonth = today.getMonth();
     
     const currentDay = today.getDate();
     
     
     let age = currentYear - birthYear;
     
     if(birthMonth > currentMonth || (birthMonth === currentMonth && birthDay > currentDay )
          ) {
          age--;
                   
     }
     
     message.textContent = "You are " + age + " years old ";
     
     
     
     if(birthMonth === currentMonth && birthDay === currentDay ) {
          message.textContent = "You are " + age + " years old " + "🎉🎊Happy birthday to you ";
     }
     
});