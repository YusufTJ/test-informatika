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

            // $("input").attr("disabled", true);
            if (q1 && q2 && q3 && q4 && q5 && q6 && q7 && q8 && q9 && q10) {

            	if (q1.value === "c") {
            		document.getElementById("t1").style = ("font-weight:bold");
            		score++;
	            }else {
	            	document.getElementById("t1").style = ("color:green");
	            }

				if (q2.value === "b") {
					document.getElementById("t2").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t2").style = ("color:green");
	            }

	            if (q3.value === "a") {
	            	document.getElementById("t3").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t3").style = ("color:green");
	            }

	            if (q4.value === "b") {
	            	document.getElementById("t4").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t4").style = ("color:green");
	            }

	            if (q5.value === "d") {
	            	document.getElementById("t5").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t5").style = ("color:green");
	            }

	            if (q6.value === "d") {
	            	document.getElementById("t6").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t6").style = ("color:green");
	            }

	            if (q7.value === "d") {
	            	document.getElementById("t7").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t7").style = ("color:green");
	            }

	            if (q8.value === "b") {
	            	document.getElementById("t8").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t8").style = ("color:green");
	            }

	            if (q9.value === "b") {
	            	document.getElementById("t9").style = ("font-weight:bold");
	            	score++;
	            }else {
	            	document.getElementById("t9").style = ("color:green");
	            }

	            if (q10.value === "b") {
	            	document.getElementById("t10").style = ("font-weight:bold");
	            	score++;
	            }
	            else {
	            	document.getElementById("t10").style = ("color:green");
	            }
	            var inputs = document.getElementsByTagName('input');
				for( var i=0; i<inputs.length; i++){
				    inputs[i].disabled=true;
				}

	        document.getElementById('result').innerHTML = ("Натича " + score + " аз 10;")
	        document.querySelector('button').style = ("display:none")

            }else {
            	 alert("Илтимос, ба хама саволхо чавоб дихед!");
            }


           
        }
