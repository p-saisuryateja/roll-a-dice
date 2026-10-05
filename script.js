        function rollDice() {

            // Generate random number from 1 to 6
            let number = Math.floor(Math.random() * 6) + 1;

            // Dice symbols
            let diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

            let dice = document.getElementById("dice");
            let result = document.getElementById("result");

            // Add animation
            dice.classList.remove("rolling");

            // Restart animation
            void dice.offsetWidth;

            dice.classList.add("rolling");

            // Display dice face
            dice.textContent = diceFaces[number - 1];

            // Display result
            result.textContent = "You rolled: " + number;
        }