// var role = window.prompt("Enter Your Role : ")
// if(role == "Admin")
// {
//     console.log("You Can Do Anything");
// }
// else if(role == "Instructor")
// {
//     console.log("You Can Update, Add and Delete");
// }
// else if(role == "Student")
// {
//     console.log("You Can Watch only");
// }
// else {
//     console.log("You Can not Do Any Thing");
// }

var role = window.prompt("Enter Your Role : ")
switch(role){
    case "Admin":
        console.log("You Can Do Anything");
        break;
    case "Instructor":
    console.log("You Can Update, Add and Delete");
    break;

    case "Student":
        console.log("You Can Watch only");
        break;
    default:
        console.log("You Can not Do Any Thing");
        break;
}