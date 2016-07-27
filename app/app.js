require('angular');

var app = angular.module('demo',[]);

app.factory('Number', function(){
  let Number = function(){

  }

  Number.prototype.check = function(){
	
    for (xx = 1; xx <= input; xx++) {
      this.prime_number = [];
      for (x = 1; x <= ixx; x++){

			if (xx % x === 0){
				if (this.prime_number.indexOf(x)){
					this.allPrime.push(x);

				}
				this.prime_number.push(x);
			}
		}

	}


/*
	for (x = 1; x <= input; x++){
		if (input % x === 0){
			this.prime_number.push(x);
		}
	}

	if (this.prime_number.length <= 2){

		return input + ' is prime, there are' + prime_number.length +' [] number before i';
	}
*/
	return input + ' is not prime';  

}
	


  return Number;

})