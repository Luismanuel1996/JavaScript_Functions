// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds ( count ){
    for (let i = 0 ; i < count ; i++ )
    { if ( i % 2 == 1 ) 
    console.log(i) ;}

} 

printOdds(8) 

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");


function checkage ( userName , age ) {
let aboveSixteen = `Congrats ${userName}, You can drive!` ;
let belowSixteen = `Sorry! ${userName}, You can't drive Yet!` ;

if ( age >= 16 ) {
console.log (aboveSixteen); 
} else { console.log (belowSixteen); }
    
}

checkage("Luis", 15)

function cartesianPlane ( x , y) {
let quad1 = 'this is in Quadrant 1'  
let quad2 = 'this is in Quadrant 2'
let quad3 = 'this is in Quadrant 3'  
let quad4 = 'this is in Quadrant 4'

if ( x == 0 && y == 0)
console.log("you're on origin point") ;
else if ( x > 0 && y > 0 ) 
console.log (quad1) ;
else if ( x < 0 && y < 0 )
console.log (quad2) ;
else if ( x < 0 && y < 0)
console.log(quad3) ;
else if ( x > 0 && y < 0)
console.log(quad4) ; 
else if ( x == 0 )
console.log ("y-axis") ;
else if ( y == 0)
console.log ( "X-axis") ;
}

cartesianPlane ( 5, 0)


function triangle (side1, side2, side3) {
     if ( (side1 + side2) < side3 || side2 + side3 <= side1 || side1 + side3 <= side3 ) 
    console.log("Not a triangle dude, try again") ;
    else if ( side1 === side3 && side2 === side3 )
    console.log("This is an equilateral triangle man!") ; 
    else if ( side1 == side2 || side2 == side3 || side1 == side3 )
    console.log("This is an isosceles triangle man!, Nice :D") ; 
    else 
    console.log("this is scalene my man") ;
    
     
}
triangle (3,3,9)


