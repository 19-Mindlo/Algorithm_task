function convertFahrToCelsius(fahrenheit) {
    let celcius;
    celcius = (fahrenheit - 32) * 5 / 9;
    return celcius;
};

convertFahrToCelsius(39).toFixed(4);

function checkYuGiOh(num) {

    for(var i = 1; i < num; i++) {
        if(i % 2 === 0) {
            console.log("Yu");
        }

        else if(i % 3 === 0) {
            console.log("Gi");
        }

        else if(i % 5 === 0) {
            console.log("oh");
        }

        else (console.log(i));
    }
}

checkYuGiOh(10);
