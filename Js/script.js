    var maleNames = ["Kwasi", "Kwado", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
	  
	var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
	
	var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var birthday=document.getElementById('datepicker').value;
    var male=document.getElementById('male');
    var female=document.getElementById('female');

    var date=new Date(birthday);
    var weekday=date.getDay();

    function result(){
        if(male.checked===true){
            
            alert('You were born on ' + daysOfWeek[weekday] + ' and your akan name is ' + maleNames[weekday])
        }
        if(female.checked===true){
            alert('You were born on ' + daysOfWeek[weekday] + ' and your akan name is ' + femaleNames[weekday]);
        }
    }