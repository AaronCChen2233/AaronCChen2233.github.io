        // ==============================================================================================================
        // Game 1: Hello John, let’s start! - Ayaka
        // You should create a page that gets the user’s name and as a result of clicking a button it would come up
        // with a new page that prints
        // Hello &lt;the name that user input&gt;, Nice work! Let’s start!
        // ==============================================================================================================
        
        function unfunction(){
            document.querySelector("#name").addEventListener("invalid", function(event) {
            event.preventDefault();
        }, false);

        }

        function greeting(){
            var name = document.getElementById( "name" ).value;
            var outputStyle = document.getElementById('output');
            if(name == ""){
            document.getElementById("outputName").innerHTML="Ooops. Please type your name." + "<br>";
            document.getElementById("toOtherGames").style.display = "none";

            // outputStyle.style.backgroundImage = 'none';

            outputStyle.style.backgroundImage = 'url("image/ghost.png")';
            outputStyle.style.backgroundRepeat = 'no-repeat';
            outputStyle.style.backgroundSize = '10%';
            outputStyle.style.backgroundPosition = 'left';
            topFunction();
            
            }else{
            document.getElementById("outputName").innerHTML="Hi " + name + "!" + "<br>" + "Nice to meet you. Let’s start😁" + "<br>";
            
            // outputStyle.style.backgroundImage = 'url("image/cloud.png")';
            // outputStyle.style.backgroundRepeat = 'no-repeat';
            // outputStyle.style.backgroundSize = '100%';

            outputStyle.style.backgroundImage = 'url("image/cloud_without_back.png")';
            outputStyle.style.backgroundRepeat = 'no-repeat';
            outputStyle.style.backgroundSize = '50%';
            outputStyle.style.backgroundPosition = 'center';

            document.getElementById("toOtherGames").style.display = "block";
            }
        }

        function scrollFunction() {
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
                mybutton.style.display = "block";
            } else {
                mybutton.style.display = "none";
            }
        }

        var nIntervId;

        // When the user clicks on the button, scroll to the top of the document
        function topFunction() {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;

            resetPrimeNumber();
            resetCalculation();
            resetLottery();
            //here will scroll to top then hide game;
            nIntervId = window.setInterval(hideAllGame, 500);

        }

        function hideAllGame(){
            var elmnt2 = document.getElementById("game2div");
            var elmnt3 = document.getElementById("game3div");
            var elmnt4 = document.getElementById("game4div");
            elmnt2.style.display = "none";
            elmnt3.style.display = "none";
            elmnt4.style.display = "none";
            clearInterval(nIntervId);
        }

        function showGame(){
            var gameClassName = document.activeElement.id;

            hideAllGame();

            switch(gameClassName){
                case "game2":
                    document.getElementById("game2div").style.display = "block";
                    break;
                case "game3":
                    document.getElementById("game3div").style.display = "block";
                    createCalculationQuection();
                    break;
                case "game4":                    
                    document.getElementById("game4div").style.display = "block";
                    break;
            }

            window.scrollTo(0,document.body.scrollHeight);
            console.log(gameClassName);
        }

        //===================================================================================================
        // Game 2: Prime Number - Yuki
        // In this game the user inputs an integer and shows it's a prime number or not.
        // ==================================================================================================
        function resetPrimeNumber(){
            document.getElementById("textForm").value="";
            document.getElementById("primeOutput").innerHTML ="";
        }

        function check() {
            // connect button element to JS
            // var button = document.getElementById("check");
            var flag =0;
            // get textForm element to use next condition
            var textForm = document.getElementById("textForm").value;

            // condition to judge a Prime number or not
            if (document.getElementById('textForm').value == ""|| textForm >100 || textForm <= 0)  {
                document.getElementById("primeOutput").innerHTML = ('ERROR. PLEASE TYPE A NUMBER 1 TO 100.😵');
                return false;
            }else{
                for( i = 2 ; i < textForm ; i++){
                    if(textForm % i == 0){
                        flag = 1;
                        break;
                    }
                }
            }

            // show the result
            if(flag == 0){
                document.getElementById("primeOutput").innerHTML = (textForm + ' 　IS A PRIME NUMBER😍　💫🎉💫🎉'); 
            }else if(textForm == 1){
                document.getElementById("primeOutput").innerHTML = (textForm + ' 　IS A PRIME NUMBER😍　💫🎉💫🎉');
            }else{
                document.getElementById("primeOutput").innerHTML = (textForm + ' IS NOT A PRIME NUMBER😌😌😌');
            }
        }
        function resetPrimeNumber(){
            document.getElementById("textForm").value="";
            document.getElementById("primeOutput").innerHTML ="";
        }

        // ====================================================================================================
        // Game 3: Calculate - Peri
        // Create a game to ask two numbers and answer as well. Later it shows correct answer with “You are
        // correct” or “You are wrong, work har1der”. 
        // =====================================================================================================

        var n1, n2, n3;
        function createCalculationQuection(){

            n1 = getRndInteger(1, 20);
            document.getElementById("n1").innerHTML = n1;
    
            var formula = ["+", "-", "*", "/"];
            n2 = formula[getRndInteger(0,4)];
            document.getElementById("n2").innerHTML = n2;
    
            n3 = getRndInteger(1, 20);
            document.getElementById("n3").innerHTML = n3;
        }

        function getRndInteger(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function calculation() {
            var ans = document.getElementById("input").value;
            if("" == ans){
                document.getElementById("demo").innerHTML = "PLEASE ANSWER IT.";
                return 
            }
        
            var sum = 0;
            var ans = document.getElementById("input").value;
            if("+" == n2) {
                sum = n1 + n3;
            } else if("-" == n2) {
                sum = n1 - n3;
            } else if("*" == n2) {
                sum = n1 * n3;
            } else if("/" == n2) {
                sum = Math.round(n1 / n3);
            }
            
            var result = "OOPS, PLEASE TRY AGAIN!";
            if(ans == sum){
                result = "BINGO! YOU ARE SO SMART!";
            }
            
            document.getElementById("demo").innerHTML = result;
        }

        function resetCalculation(){
            document.getElementById("input").value = "";
            document.getElementById("demo").innerHTML ="";
        }

        //===================================================================================================
        // Game 4: Lottery - Aaron
        // Create a lottery program using three digits. Later it shows as below;
        // ● all the numbers are correct(even the order): $10,000 prize
        // ● all the numbers are correct, but not order: $3,000 prize
        // ● two numbers are correct out of three numbers:$1,000 prize
        // ● all others: No prize
        // ==================================================================================================

        var randomNumbersArray = [];
        var chosenNumberArray = [];

        function numberBoxClick(){
            /*if already chosen just go back*/
            if(chosenNumberArray.length >= 3){
                return;
            }

            /*Get button*/
            var c = document.activeElement;
            c.disabled = true;

            /*Save user choose numbers*/
            chosenNumberArray.push(parseInt(c.innerHTML));

            if(chosenNumberArray.length == 3){
                /*enable try again button*/
                document.getElementById("playAgain").disabled = false;
                
                createRandomThreeNumbers();

                /*For later check*/
                var correctCount = 0;
                // var correctButOrderCount = 0;

                /*default set you are lost*/
                document.getElementById("result").innerHTML = "Sorry! you lost. The Lottery numbers are "+randomNumbersArray;

                /*use tostring for compare can check all the numbers are correct(even the order)*/
                if(chosenNumberArray.toString() === randomNumbersArray.toString()){
                    document.getElementById("result").innerHTML = "Congratulations! you won $10,000 prize. The Lottery numbers are " + randomNumbersArray;
                    return;
                }
                
                /*check here*/
                for(var i =0; i<3; i++){

                    if(randomNumbersArray.some((arrNum) => arrNum == chosenNumberArray[i])){

                        correctCount++;

                        if(correctCount == 3){
                            document.getElementById("result").innerHTML = "Congratulations! you won $3,000 prize. The Lottery numbers are " + randomNumbersArray;
                        }

                        if(correctCount == 2){
                            document.getElementById("result").innerHTML = "Congratulations! you won $1,000 prize. The Lottery numbers are " + randomNumbersArray;
                        }

                        // if(randomNumbersArray[i] == chosenNumberArray[i]){
                            // correctCount++;
                        // }
                        // else{
                        //     correctButOrderCount++;
                        // }
                    }
                    else{
                        continue;
                    }
                }

            }
        }

        function createButton(){
            var numberBox = document.getElementById("numberBox");
            for(var i = 1; i <= 5; i++){
                var numberButton = document.createElement("BUTTON");
                numberButton.innerHTML = i;
                numberButton.onclick = numberBoxClick;
                numberBox.appendChild(numberButton);
            }
        }

        function createRandomThreeNumbers(){

            var rn = 0;
            randomNumbersArray = [];
            
            for(var i = 0 ; i<3 ;i++){
                do {
                    rn = parseInt(Math.random()*5+1);
                    /*check numbers are distinct*/
                }while(randomNumbersArray.some((arrNum) => rn === arrNum))
                randomNumbersArray.push(rn);
            }
            console.log(randomNumbersArray);
        }

        function resetLottery(){

            // createRandomThreeNumbers();
            chosenNumberArray = [];
            var c = document.getElementById("playAgain");
            c.disabled = true;
            var buttons = document.getElementById("numberBox").getElementsByTagName('*');
            /*enable all button*/
            for(var i = 0; i < buttons.length; i++){
                buttons[i].disabled = false;
            }
            
            document.getElementById("result").innerHTML = "Good luck!"
        }