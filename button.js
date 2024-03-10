// the below system collected from youtube. It's very 
// effective and efficient system than W3 school documents.
// At this issue W3 schools' explanation is more complex. 

// const buttons = document.querySelectorAll(".button-active");
// buttons.forEach(button => {
//     button.addEventListener("click", function () {
//         buttons.forEach(btn => btn.classList.remove("active"));
//         this.classList.add("active");
//     })
// })




// First rule: I modify the above system at my own system.

const buttons = document.getElementsByClassName("button-active");
// For first time I am running loop on buttons to add EventListener to each button 
for (let button of buttons) {
    button.addEventListener("click", function (event) {
        // For second time I am running loop on same buttons to remove and add 
        // the active class. 
        for (let btn of buttons) {
            // At first I removed the active class dynamically from 
            // all buttons which we got through loop.
            btn.classList.remove("active");
            // At second we add the active class to the specific button on which we clicked 
            // by using this keyword.We are using this keyword to get the 
            // currently clicked button element
            this.classList.add("active");
        }
        // const targetButton = event.target;
        // console.log(targetButton);
    })
}


// Second rule: another fantastic system to show button active 

//  I have stored the below commented codes for future using to show that 
//  which button is active among many buttons. 

// const buttons = document.querySelectorAll(".button-active");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", () => {
//       buttons.forEach((button) => {
//         removing the previously added or by default added active class from 
//         previously clicked element. 
//         button.classList.remove("active");
//       });
//       we will add the active class to clicked element and we will target the 
//       clicked element by looping index number [i];
//       after removing, newly added active class to the newly clicked element
//       buttons[i].classList.add("active");
//     });
// }



// Third rule: show active button which got dynamically from fake data/API and tailwind css 
// Third rule is implemented at "dragon-news-tailwind-done-by-me" project at my github.

// let button_list = document.querySelectorAll(".category-button");
//         button_list.forEach(element=>{
//             element.addEventListener("click",function(){
//             button_list.forEach(remove_background=>{
//             remove_background.style.color="#000000";
//             remove_background.style.background="#ECECEC";
//             });
//             this.style.color="#FFFFFF";
//             this.style.background="#000000";
//         });
//      });