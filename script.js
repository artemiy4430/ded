// let day = 2;
// let dayName ;
// switch(day){

//     case 1: 
// dayName = 'Monday'
// break;
    
//     case 2: 
//     dayName = 'Tuesday'
//     break;

//     default: 
//     dayName = 'undefined'; 
//     break;


// }
// console.log(dayName);




// let mark = 5;
// let markName ; 
// switch(mark){

//     case 1 :
//         markName = 'Погано'
//         break;

//      case 2 : 
//      markName = 'Задовільно'
//      break;
       
     
//      case 3 : 
//      markName = 'Добре'
//      break;

//      case 4 : 
//      markName = 'Відмінно'
//      break;

//      case 5 : 
//      markName = 'Відмінно з відзнакою'
//      break;

//      default: 
//      markName = 'undefined '
//      break;

// }
// console.log(markName); 







// let number = parseInt(prompt('введіть число'));
// switch(true){
//      case( number >= 55 && number <= 99) : 
//      console.log('потрапляє в діапазон')
//      break; 

//   default: 
//    console.log('не потрапляє'); 
//    break; 
   
// }

let age = parseInt(prompt('введіть кількість років'));
let myButton = document.querySelector('.button'); 
let baby = document.querySelector('.baby');
let toddler = document.querySelector('.toddler'); 
let teen = document.querySelector('.teen'); 
let adult = document.querySelector('.adult'); 
let ded = document.querySelector('.ded'); 



switch(true){
   case (age > 0 && age < 3) :
   
   if( baby.className === 'baby'){
     baby.classList.add('active')
      }
      else{
         baby.classList.remove('active')
      }
   }

 switch(true){
      case ( age > 4 && age < 12 ) : 

      if(toddler.className === 'toddler'){
         toddler.classList.add('active')
      }
      else{
         toddler.classList.remove('active')
      }
}
switch(true){
   case( age > 12 && age < 18) : 

   if(teen.className === 'teen'){
      teen.classList.add('active')
   }
   else{
      teen.classList.remove('active')
   }
}
switch(true){
   case( age > 12 && age < 18) : 

   if(teen.className === 'teen'){
      teen.classList.add('active')
   }
   else{
      teen.classList.remove('active')
   }
}


switch(true){
   case( age > 17 && age < 64) : 

   if(adult.className === 'adult'){
      adult.classList.add('active')
   }
   else{
      adult.classList.remove('active')
   }
}


switch(true){
   case( age > 64 && age < 180) : 

   if(ded.className === 'ded'){
      ded.classList.add('active')
   }
   else{
      ded.classList.remove('active')
   }
}






