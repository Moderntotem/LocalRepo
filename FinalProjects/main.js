$(document).ready(function() {



    document.addEventListener("click", (function() {
        function stringToArray(str) {

            var inputString = document.getElementById('wordInput').value;

            var newArray = inputString.split("");
            console.log(newArray);

            var counts = {};
            newArray.forEach(function(x) {
                counts[x] = (counts[x] || 0) + 1;
                console.log(counts);
            });
        }
    }))
})
