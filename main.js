

        var affirmations =
            ["I forgive myself and set myself free.",
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

        var mantras = 
             ["Breathing in, I send myself love. Breathing out,      I send love to someone else who needs it.",
            "Don’t let yesterday take up too much of today.",
            "Every day is a second chance.", 
            "Tell the truth and love everyone.", 
            "I am free from sadness.",
            "I am enough.",
            "In the beginning it is you, in the middle it is you and in the end it  is you.",
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
        var buttonFavoriteMessage = document.querySelector("#favoriteMessage")
        var buttonViewFavoriteMessage = document.querySelector("#viewFavoriteMessageBtn")
        var buttonHome = document.querySelector(".home-button")
        var sectionMessage = document.querySelector(".uplifting-message")
        var icon = document.querySelector(".icon")
        var viewHome = document.querySelector(".home-view")
        var viewFavoritesSection = document.querySelector(".saved-messages-section")
        var viewFavoriteList = document.querySelector(".list")
        var box3 = document.querySelector(".box3")
        var viewFavoritedMessages = []
        


            buttonAddMessage.addEventListener('click', addMessage);
            buttonFavoriteMessage.addEventListener('click', favoriteMessage)
            buttonViewFavoriteMessage.addEventListener('click', displayFavoriteMessages)
            buttonHome.addEventListener('click', displayHome)
            box3.addEventListener('dblclick', deleteMessage)


        function getRandomIndex(array) {
            return Math.floor(Math.random() * array.length);
  }
            console.log(affirmations[getRandomIndex(affirmations)])

        function addMessage() {
             event.preventDefault();
            console.log('here')
            icon.classList.add("hidden")
            sectionMessage.classList.remove("hidden")
            viewFavoritesSection.classList.add("hidden") 
            buttonFavoriteMessage.classList.remove("hidden")
            buttonViewFavoriteMessage.classList.remove("hidden")
            if(radioButton1.checked === true) {
                sectionMessage.innerText = affirmations[getRandomIndex(affirmations)]
                console.log('radio1', sectionMessage.innerText)
            } else if (radioButton2.checked === true) {
                sectionMessage.innerText = mantras[getRandomIndex(mantras)]
                console.log('radio2', sectionMessage.innerText)
                    }


            }

    function favoriteMessage() {
        event.preventDefault();
        if (!viewFavoritedMessages.includes(sectionMessage.innerText)) {
         viewFavoritedMessages.push(sectionMessage.innerText)
       
       }
    } 

    function displayFavoriteMessages() {
        event.preventDefault();
        viewHome.classList.add("hidden");
        viewFavoritesSection.classList.remove("hidden") 
        box3.classList.remove("hidden")
        buttonHome.classList.remove("hidden")
        viewFavoriteList.innerHTML = ''
        for(var i = 0; i < viewFavoritedMessages.length; i++) {
            viewFavoriteList.innerHTML += `<li>${viewFavoritedMessages[i]}</li>` 
            console.log('here')
        }
    }

    function deleteMessage() {
        var deletedMessages = event.target
        console.log(deletedMessages.innerText)
        for (var i = 0; i < viewFavoritedMessages.length; i++) {
        if(deletedMessages.innerText === viewFavoritedMessages[i]) {
            viewFavoritedMessages.splice(i, 1)
            displayFavoriteMessages()
        }
     } 
    }
 
    

    function displayHome() {
      viewHome.classList.remove("hidden")
      viewFavoritesSection.classList.add("hidden") 
      box3.classList.add("hidden")
      buttonHome.classList.add("hidden") 
      icon.classList.remove("hidden")
            sectionMessage.classList.add("hidden")
            viewFavoritesSection.classList.remove("hidden") 
            buttonFavoriteMessage.classList.add("hidden")
            buttonViewFavoriteMessage.classList.add("hidden")
    }
  


// function view favoriteMessagePage() {
//     array.target.innerText

// }

// e.target?