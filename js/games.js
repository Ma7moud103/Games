export class Games {
  constructor() {
    if (localStorage.getItem("api") != null) {
      let data = JSON.parse(localStorage.getItem("api"));
      this.display(data);
      let activeLink = document.querySelectorAll(".games nav small ul li a.active")

      let links = Array.from(
        document.querySelectorAll(".games nav small ul li a")
      );
      links.forEach((link) => {
        link.classList.remove("active")
        if (link.id === localStorage.getItem("MainLink")) {
          link.classList.add("active")
        }
      });
    }

    let links = Array.from(
      document.querySelectorAll(".games nav small ul li a")
    );
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        this.getData(link.id);
        localStorage.setItem("MainLink", link.id)
      });
    });
  }

  async getData(category) {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "1c2656d96cmshbf7665d69cd1504p1c5330jsn34bdd63044b4",
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    let content = document.getElementById("content");
    if (content.innerHTML += "") {
      content.innerHTML = "";
    }

    let data = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    let result = await data.json();
    localStorage.setItem("api", JSON.stringify(result));
    this.display(result);
  }

  async display(result) {
    result.forEach((obj) => {
      let { developer, genre, id, platform, short_description, thumbnail } =
        obj;

      let box = `
        <div class="box col-lg-3 col-md-4 my-3 col-sm-12">
         <div id="${id}" class="card h-100 bg-transparent" role="button" "="">
            <div class="card-body">
               <figure class="position-relative">
                  <img class="card-img-top object-fit-cover h-100" src="${thumbnail}">
               
               </figure>
   
               <figcaption>
   
                  <div class="hstack justify-content-between">
                     <h3 class="h6 small">${developer}</h3>
                     <span class="badge text-bg-primary p-2">Free</span>
                  </div>
                  <p class="card-text small text-center opacity-50 py-3">
                    ${short_description}
                  </p>
   
               </figcaption>
            </div>
   
            <footer class="card-footer small hstack justify-content-between">
   
               <span class="badge badge-color">${genre}</span>
               <span class="badge badge-color">${platform}</span>
   
            </footer>
         </div>
      </div>
        `;
      let content = document.getElementById("content");
      content.innerHTML += box;
    });
  }
}

new Games();
