

var affirmations = ["I forgive myself and set myself free.",
        "I believe I can be all that I want to be.",
        "I am in the process of becoming the best version of myself.",
        "I have the freedom & power to create the life I desire.",
        "I choose to be kind to myself and love myself unconditionally.",   
        "My possibilities are endless.",  
        "I am worthy of my dreams.",
        "I am enough.",
        "I deserve to be healthy and feel good.",
        "I am full of energy and vitality and my mind is calm and peaceful.",
        "Every day I am getting healthier and stronger.",
        "I honor my body by trusting the signals that it sends me.",
        "I manifest perfect health by making smart choices."]

    var mantras =  ["Breathing in, I send myself love. Breathing out, I send love to someone else who needs it.",
        "Don’t let yesterday take up too much of today.",
        "Every day is a second chance.", 
        "Tell the truth and love everyone.", 
        "I am free from sadness.",
        "I am enough.",
        "In the beginning it is you, in the middle it is you and in the end it is you.",
        "I love myself.", 
        "I am present now.",  
        "Inhale the future, exhale the past.",  
        "This too shall pass.", 
        "Yesterday is not today.",
        "The only constant is change.",
        "Onward and upward."]


        var radioButton1 = document.querySelector(".radio1")
        var radioButton2 = document.querySelector(".radio2")
        var buttonAddMessage = document.querySelector(".button")
        var sectionMessage = document.querySelector(".uplifting-message")
        var icon = document.querySelector(".icon")


buttonAddMessage.addEventListener('click', addMessage);


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

function addMessage() {
    console.log('here')
    icon.classList.add("hidden")
    if (radioButton1.checked = true) {
        sectionMessage.innerText=  affirmations[getRandomIndex(affirmations)]
        console.log('radio1', sectionMessage.innerText)
   } else if (radioButton2.checked = true) {
    sectionMessage.innerText = mantras[getRandomIndex(mantras)]
    console.log('radio2', sectionMessage.innerText)
   }


}