let count = 1;
async function getproducts() {
  const apiData = await fetch(
    `https://fakestoreapi.com/products/${count}`
  );
  const data = await apiData.json();
  document.getElementById("dispdata").innerHTML = `
                  <div class="card" style="width: 18rem;">
                  <img src=${data.image} class="card-img-top" alt="...">
                  <div class="card-body">
                      <h5 class="card-title">${data.title.slice(
                        0,
                        40
                      )}</h5>
                      <p class="card-text">${data.description.slice(
                        0,
                        80
                      )}</p>
                      <a href="#" class="btn btn-primary">Price : $${
                        data.price
                      }</a>
                  </div>
                  </div>
                        `;

        console.log(count);
      }
      function handlCount() {
          getproducts();
        count = count + 1;
        // console.log(count);
      }