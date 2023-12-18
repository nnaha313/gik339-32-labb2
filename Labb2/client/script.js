// Uppgift 6: Fetch

//
const url = "http://localhost:3000/users";

//Använder then(), översätter till en array av JavaScript-objekt
fetch(url)
  .then((response) => response.json())

  .then((users) => {
    // console.log(users);

    // Uppgift 7: Skriv ut users i en HTML-lista

    //Skapar ett ul-element
    const userList = document.createElement("ul");
    userList.classList.add("d-flex", "flex-wrap");

    //Loopar igenom innehållet i users
    users.forEach((user) => {
      //skapar upp li-element och tilldelar klass.
      const userItem = document.createElement("li");
      userItem.classList.add("user-item", "list-group-item", "col-2");

      userItem.style.backgroundColor = "#FFFEEF";
      userItem.style.borderColor = user.color;
      userItem.style.borderStyle = "solid";
      userItem.style.borderWidth = "2px";
      userItem.style.borderRadius = "8px";
      userItem.style.margin = "0.5rem";
      userItem.style.width = "col-3";
      userItem.style.fontFamily = "Book Antiqua";
      userItem.style.fontSize = "1.2rem";
      userItem.style.fontStyle = "italic";
      
      //Lägger till html"
      userItem.innerHTML = `
        <div class="p-2"> 
          <p>${user.firstName} ${user.lastName}</p>
          <p>ID: ${user.id}</p>
          <p>Användarnamn: ${user.username}</p>
          <p>Färg: ${user.color}</p>
        </div>
      `;
      //Lägger till li i ul.
      userList.appendChild(userItem);
    });

    //Lägger till ul-elementet i body.
    document.body.appendChild(userList);
    document.body.style.backgroundColor = "#F1DEDC";
  });