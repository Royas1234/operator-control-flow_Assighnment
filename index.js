// ------------question 3--------------

function determineSubject( studentClass){
    
let artSubject = "Government, Economics, Literature, History";
let scienceSubjects ="Physics, Chemistry, Biology, Technical Drawing";
let socialScienceSubjects = "Accounting, Commerce, Marketing, Geography ";
let generalSubjects ="English, Mathematics";
   
    if ( studentClass == "ART" ){
      console.log( "Bolatito"+ " in ART class will offer the following subject: "+ artSubject + generalSubjects)
    }
    else if ( studentClass == "SCIENCE"){
        console.log(scienceSubjects + generalSubjects) ;
    } else if ( studentClass == "SOCIAL SCIENCE"){
        console.log(socialScienceSubjects + generalSubjects) ;
    } else {
     console.log(generalSubjects );
    }
}
determineSubject("ART");

// let classSubject =  ;
// console.log(classSubject);
// console.log(   + determineSubject("ART"));


// ---------------question 5--------------






function highestPowerof2(num)
{
	// Invalid input
	if (num< 1)
		return 0;

	let res = 1;


	for (let i=0; i<16; i++)
	{
		let curr = 1 << i;


		if (curr > num)
		break;

		res = curr;
	}

	return res;
}

// Driver code

let num = 24 ;
console.log(highestPowerof2(num));










