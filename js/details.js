export class Detalis {
  constructor() {
    let boxs = document.querySelectorAll("#content .box .card");
    boxs.forEach((box) => {
      box.addEventListener("click", () => {
        $("#item").css("display", "block");
        let data = JSON.parse(localStorage.getItem("api"));
        data.forEach((data) => {
          if (data.id == box.id) {
            this.displayData(data);
          }
        });
      });
    });
  }

  async displayData(api) {
    let {
      developer,
      game_url,
      genre,
      id,
      platform,
      short_description,
      thumbnail,
    } = api;

    let detailsContent = document.getElementById("detailsContent");
    detailsContent.innerHTML = `
    <div class="col-md-4">
                        <img src="${thumbnail}" class="w-100" alt="image details">
                    </div>
                    <div class="col-md-8">
                        <h3>Title: ${developer}</h3>
                        <p>Category: <span class="badge text-bg-info"> ${genre}</span> </p>
                        <p>Platform: <span class="badge text-bg-info"> ${platform}</span> </p>
                        <p>Status: <span class="badge text-bg-info"> Live</span> </p>
                        <p class="small">${short_description.split(" /")}</p>
                        <a class="btn btn-outline-warning" target="_blank"
                            href="${game_url}">Show Game</a>
                    </div>

      `;
  }
}

new Detalis();
