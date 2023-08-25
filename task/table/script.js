// let str1="a";
// let str2="A";

// console.log(str1===str2);
// console.log(str1==str2);  //? ASCI codedan ishlatilarkan

// console.log(" \t \n" +2 );
// console.log(" \t \n" +2 );
// console.log(" \t \n" +2 );

// console.log(null+1); //1
// console.log(undefined+1); //NAN
// console.log(undefined-1); //NAN
// console.log(undefined*3); //NAN
// console.log(undefined/1); //NAN

// console.log("2" > "12");
// console.log(undefined == null);
// console.log(undefined === null); //? type larni ham tekshiradi shuning uchun false olgan ekan

// if ("") {
//     console.log("hello");
// }

// console.log(false==+"\n0\n");

// console.log(1 !== "0" || (false && "hey")); //! true
// console.log(1 !== "0" || (true && "hey")); //! hey
// console.log(true && "hey");

// console.log(1 !== "0");
// console.log(true||(true && "hey"));
// debugger
// console.log((true && "hey"));

// console.log(1 !== "0" || (true && "hey"));

// bundan keyin   true qolganini hisoblamay ketvoradi dediz

// endi  siz
// console.log(1 !== "0" || true && "hey");
// bu bo'lganda
//  true || true bo'lib qoladi demoqchidiz
// men true || hey bo'ladi deb o'ylagapman

// let temp="Ecmascript"

// if(temp=="Ecmascript"){
//     console.log("Right");
// }else{
//     console.log("You don't know 'Ecmascript'");
// }

// console.log(0 || '1');
// console.log(0 ?? '1');
// console.log(0 ?? 1);
// console.log(0 || 1);

// let temp = 3;
// switch (temp) {
//   case 1:
//     console.log("bulut");
//     break;
//   case 2:
//     console.log("yomgir");
//     break;
//   case 3:
//     console.log("qor");
//     break;
//   case 4:
//     console.log("shamol");
//     break;

//   default:
//     console.log("undan nomalum obhavo");
//     break;
// }


// jfjhgd


// let weeks="Tuesday";

// switch (weeks) {
//     case "Monday":
//         console.log("Need go for works");
//         break;
//     case "Tuesday":
//         console.log("Need go for walks");
//         break;
//     case "Wednesday":
//         console.log("I play footbal");
//         break;
//     case "Thursday":
//         console.log("Coding days");
//         break;
//     case "Friday":
//         console.log("Need go for Juma mosque");
//         break;
//     case "Satuday":
//         console.log("I'm going to Valley");
//         break;
//     case "Sunday":
//         console.log("Rest in my house");
//         break;
//     default:
//         console.log("repeat days")
//         break;
// }


// function drawPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//         let space = ' '.repeat(rows - i);
//         let stars = '* '.repeat(i);
//         console.log(space + stars);
//     }
// }

// drawPattern(5);


// function drawPattern(rows) {
//     for (let i = 1; i <= rows; i++) {
//       let spaces = ' '.repeat(rows - i);
//       let stars = '* '.repeat(i);
//       console.log(spaces + stars);
//     }
    
//     for (let i = rows - 1; i >= 1; i--) {
//       let spaces = ' '.repeat(rows - i);
//       let stars = '* '.repeat(i);
//       console.log(spaces + stars);
//     }
//   }
  
//   drawPattern(5);
  