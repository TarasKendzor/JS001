

const a = Numbers(prompt('Enter A'));
const b = Numbers(prompt('Enter B'));
const c = Numbers(prompt('Enter C'));
 

function quadraticEquation  (a ,b ,c){
	const d = b* b - 4 *a *c ;
	
	if(d < 0){
		return('No real resuls because discriminant is under 0');
	}
	else if (d === 0 ){
		const x = (-b)/(2 * a );
		return("This is your results"+ 'x=' + x );
	}
	else{
		const dSqrt = Math.sqrt(d);
		const x1 = (-b + dSqrt) / (2 * a);
		const x2 = (- b - dSqrt) / (2 * a);
		return( ' This is your results '+ 'x1='+ x1  + 'x2=' + x2);	
	}
	

}

