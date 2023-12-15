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
    userList.classList.add("user-list");

    //Loopar igenom innehållet i users
    users.forEach((user) => {
      //skapar upp li-element och tilldelar klass.
      const userItem = document.createElement("li");
      userItem.classList.add("user-item");

      //Lägger till html och "stylar"
      userItem.innerHTML = `
        <div style="background-color: ${user.color};">
          <h5>${user.firstName} ${user.lastName}</h5>
          <p>ID: ${user.id}</p>
          <p>Användarnamn: ${user.username}</p>
        </div>
      `;
      //Lägger till li i ul.
      userList.appendChild(userItem);
    });

    //Lägger till ul-elementet i body.
    document.body.appendChild(userList);
  });
