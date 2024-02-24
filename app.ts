let guest_list : string [] = [`irfan`,`asma`,`subhan`,`tania`,`alisha`];
// for(let i=0; i<guest_list.length; i++){
// console.log(`Respected sir/madam` + guest_list[i] + `,\n\nwe invited you on dinner tomorrow,\n\nThank You`)
// }
let not_present : string = `asma`;
let new_guest : string = `babar azam`;
guest_list[1] = new_guest;
// for(let i=0; i<guest_list.length; i++){
//    console.log(`Respected sir/madam` + guest_list[i] + `,\n\nwe invited you on dinner tomorrow,\n\nThank You`)
//   }
guest_list.unshift(`saaim`,`urossa`,`ifra`);
// for(let i=0; i<guest_list.length; i++){
//    console.log(`Respected sir/madam` + guest_list[i] + `,\n\nwe invited you on dinner tomorrow. we found big table so we decide to invite 3 more guest,\n\nThank You`)
 //   }
console.log (`\nunfortunately we can not arrange big table . Only two people allow.`)
while(guest_list.length>2){
let remove_guest = guest_list.pop();
console.log(`Sorry Sir/Madam.${remove_guest} you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
       console.log(`Respected sir/madam` + guest_list[i] + `,\nYes you are still invited on tomorrow dinner\nThank You\n`)
       }
       guest_list.splice(0,2)
       console.log(guest_list)