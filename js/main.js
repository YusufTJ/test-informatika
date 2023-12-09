function showResult() {
            var score = 0;
            
            var q1 = document.querySelector('input[name="q1"]:checked');
            var q2 = document.querySelector('input[name="q2"]:checked');
            var q3 = document.querySelector('input[name="q3"]:checked');
            var q4 = document.querySelector('input[name="q4"]:checked');
            var q5 = document.querySelector('input[name="q5"]:checked');
            var q6 = document.querySelector('input[name="q6"]:checked');
            var q7 = document.querySelector('input[name="q7"]:checked');
            var q8 = document.querySelector('input[name="q8"]:checked');
            var q9 = document.querySelector('input[name="q9"]:checked');
            var q10 = document.querySelector('input[name="q10"]:checked');
            

            if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {

            	if (q1.value === "c") {
            		score++;
	            }if (q2.value === "b") {
	            	score++;
	            }if (q3.value === "a") {
	            	score++;
	            }if (q4.value === "b") {
	            	score++;
	            }if (q5.value === "d") {
	            	score++;
	            }if (q6.value === "d") {
	            	score++;
	            }if (q7.value === "d") {
	            	score++;
	            }if (q8.value === "b") {
	            	score++;
	            }if (q9.value === "b") {
	            	score++;
	            }if (q10.value === "b") {
	            	score++;
	            }
	        document.getElementById('result').innerHTML = ("Натича " + score + " аз 10;")
	        document.querySelector('button').style = ("display:none")

            }else {
            	 alert("Илтимос, ба хама саволхо чавоб дихед!");
            }
           
        }