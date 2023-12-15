// Uppgift 6: Fetch

//
const url = "http://localhost:3000/users";

//Använder then(), översätter till en array av JavaScript-objekt
fetch(url)
  .then((response) => response.json())

  .then((users) => {
    console.log(users);

    // Uppgift 7: Skriv ut users i en HTML-lista

    //Skapar ett ul-element samt tilldelar en klass
    const userList = document.createElement("ul");
    userList.classList.add("user-list","list-group");
    userList.style.width = "18rem";
    //"list-group", "list-group-horizontal-sm"

    //Loopar igenom innehållet i users
    users.forEach((user) => {
      //skapar upp li-element och tilldelar klass.
      const userItem = document.createElement("li");
      userItem.classList.add("user-item", "list-group-item")
      //"list-group-item"
      userItem.style.backgroundColor = "#e8f8c1";
      userItem.style.borderColor = user.color;
      userItem.style.borderWidth = "2px";
      userItem.style.borderStyle = "solid";
      userItem.style.borderRadius = "5px";
      userItem.style.margin = "4px";
      
      //Lägger till html och "stylar"
      userItem.innerHTML = `
        <div class="opacity-75 card">
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
  });
