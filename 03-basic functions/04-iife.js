//Immediately Invoked Function Expression(IIFE)

(function ut () {
    //named IIFE
    console.log("DB Connected");
})();
//ut()

((name)=> {
    console.log(`DB Connected Two ${name}`);
})('Upendra')