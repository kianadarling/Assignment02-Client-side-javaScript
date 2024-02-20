// constants for query selector

// function to change bg color from user input and add student id
function changeCustomColor() {
    var userInput = document.getElementById("customNumber").ariavalueMax;
    var studentId = "my student Id"; 
    document.getElementById("myStudentId").innerText = studentId;

    var body = document.body;

    if (userInput < 0 || userInput > 100) {
        body.style.backgroundColor = "red";
    } else if (userInput >= 0 && userInput < 20) {
        body.style.backgroundColor = "green";
    } else if (userInput >= 20 && userinput < 40) {
        body.style.backgroundColor = "blue";
    } else if (userInput >= 40 && userInput < 60) {
        body.style.backgroundColor = "orange";
    } else if (userInput >= 60 && userInput < 80) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "yellow";
    }

}

// function to change bg color from random no.
function changeRandomColor() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var studentId = "My student Id";
    document.getElementById("myStudentId").innerText = studentId;

    var body = document.body;

    if (randomNumber < 0 || randomNumber > 100) {
        body.style.backgroundColor = "red";
    } else if (randomNumber >= 0 && randomNumber < 20) {
        body.style.backgroundColor = "green";
    } else if (randomNumber >= 20 && randomNumber < 40) {
        body.style.backgroundColor = "blue";
    } else if (randomNumber >= 40 && randomNumber < 60) {
        body.style.backgroundColor = "orange";
    } else if (randomNumber >= 60 && randomNumber < 80) {
        body.style.backgroundColor = "purple";
    } else {
        body.style.backgroundColor = "yellow";
    }
    

}

// function to generate options for select list
function addList() {
    var images = ["image1.jpg", "image2.jpg", "image3.jpg"];
    var select = document.getElementById("imageSelect");

    //Clear existing options
    select.innerHTML = "";

    //Add default option 
    var defaultOption = document.createElement("option");
    defaultOption.text = "please choose...";
    select.addEventListener(defaultOption);

    //Add options for each imge
    images.forEach(function(image) {
        var option = document.createElement("option");
        option.text = image;
        select.add(option);
    });
    // Tip: you might have to check length condition so that the list does not keep growing when clicked
    // Tip: use createElement and appendChild inside every for loop to add elements to select list from array 
}

// function to change image
function changeImage() {
    var select = documnet.getElementById("imageSelect");
    var selectImage = select.options[select.selectedindex].text;
    var imagePath = "img/" + selectedImage;
    var image = document.getElementById("images");
    image.src = imagePath;
}

// event listeners for on click event of buttons and select

// event listeners for on change event of select


document.addEventListener("DOMContentLoaded", function() {
    //Event listener for change custom color button
    document.querySelector(".custColor").addEventListener("click", changeCustomColor);

    //Event listener for change random color button
    document.querySelector(".randColor").addEventListener("click", changeRandomColor);

    //Event listener for select list change
    document.getElementById("imageSelect").addEventListener("change", changeImage);
});