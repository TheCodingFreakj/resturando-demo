$(function () {
  "use strict";
  //get elements
  const container = document.getElementById("display-products");
  const toggleCart = document.getElementById("add-cart");
  const cartContainer = document.getElementById("add");
  //Declarations

  let contentCart = null;
  const apiResult = [
    {
      id: 1,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 2,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 3,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },

    {
      id: 4,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 5,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
    {
      id: 6,
      quantity: 10,
      title: "title1",
      nutrition: [
        { Nutrient: "Protein", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Fat", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Carbs", DV: "3.2 gm", Percentage: "34%" },
        { Nutrient: "Cholestrol", DV: "3.2 gm", Percentage: "34%" },
      ],
      longdesc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui. Mauris pharetra, nunc vitae dictum efficitur, velit odio semper ipsum, vitae dictum augue metus ac metus. Proin a nunc ultricies risus placerat euismod. Etiam sit amet sollicitudin ex. Mauris ullamcorper mauris nec dolor posuere, in rutrum erat dignissim. Mauris efficitur tristique ornare. Maecenas sit amet magna non est pharetra tristique sit amet quis tellus. Maecenas vel purus ultricies massa imperdiet eleifend eu at ex. Donec sollicitudin pharetra dignissim.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus. Etiam scelerisque finibus leo. Nullam turpis quam, finibus a ligula ac, blandit sodales dui.",
      image: "./img/indian-condiments-with-copy-space-view.jpg",
      ingredients: [
        "1/2 cup chopped red onions",
        "2 ounce lemon drops ",
        "3 pound seasme seeds powder gingerbread",
        "1/4 cup jujubes jelly chupa",
        " 1/2 cup sour cream (optional)",
        "1 ounce suger plum pastry fruitcake",
        "1/4 cup jujubes jelly chupa",
      ],
      direction: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
        "Suspendisse at ipsum quis lacus tempor gravida a et eros. Praesent non mollis nisl, quis commodo velit. Cras lobortis tincidunt cursus.",
      ],
      price: "$100",
    },
  ];
  if (apiResult.length === 0) {
    container.innerHTML += `<h2>No Product Found</h2>`;
  }
console.log( JSON.parse(localStorage.getItem("addToCart")));
  //Add To Cart Funtionality
  const AddToCart = (product) => {
    let productsAdded = [];
    if (
      JSON.parse(localStorage.getItem("addToCart")) === [] ||
      JSON.parse(localStorage.getItem("addToCart")) === null
    ) {
   

      localStorage.setItem("addToCart", JSON.stringify({
        id: product.dataId,
        price: product.dataPrice,
        title: product.dataTitle,
        quantity: product.dataQuantity,
      }));
    } else {
      JSON.parse(localStorage.getItem("addToCart")).push({
        id: product.dataId,
        price: product.dataPrice,
        title: product.dataTitle,
        quantity: product.dataQuantity,
      });

      console.log("b,b",JSON.parse(localStorage.getItem("addToCart")));
    }
  };

  const configureProducts = () => {
    $(document).on("click", "p#add-to-cart", function () {
      var dataQuantity = $("p#add-to-cart").attr("data-quantity");
      var dataTitle = $("p#add-to-cart").attr("data-title");
      var dataPrice = $("p#add-to-cart").attr("data-price");
      var dataId = $("p#add-to-cart").attr("data-id");
      let selectedObject = {
        dataQuantity,
        dataTitle,
        dataPrice,
        dataId,
      };
      AddToCart(selectedObject);
    });
    apiResult.forEach((result, idx) => {
      // Create card element
      const card = document.createElement("div");
      card.classList = "card-body";

      // Construct card content
      const content = `
        <div class="col-xl-4 col-md-6 col-sm-12 custom-gap">
            <div class="card" style="width: 18rem; margin: 0  auto">
                <img src=${result.image} class="card-img-top" alt="...">
                <div class="card-body">
                    <a href="productpages.html?id=${
                      result.id
                    }" class="custom-links"> 
                    <h5 class="card-title" >${result.title}</h5>
                    </a>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item"><i class="fa-solid fa-star"></i><i
                            class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></li>
                    <li class="list-group-item">${result.price}</li>
  
                </ul>
                <div class="card-body d-xl-flex justify-content-xl-around">
                    <p class="card-link"  id="add-to-cart" data-quantity=${Number(
                      result.quantity
                    )} data-id=${Number(result.id)} data-price=${
        result.price
      } data-title=${
        result.title
      }><i class="fa-solid fa-cart-shopping"></i> Add To Cart</a>
                    <p class="card-link"><i class="fa-solid fa-heart"></i>Favorite</a>
                </div>
            </div>
        </div>
      `;

      // Append newyly created card element to the container
      container.innerHTML += content;
    });
  };
  configureProducts();
  $(document).on("click", "div#close-cart", function () {
    toggleCart.classList.remove("slider-class", "custom-index");
    toggleCart.classList.add("slider-remove");
    toggleCart.style.display = "none";
    setTimeout(function () {
      toggleCart.classList.remove("slider-remove");
    }, 1000);
  });
  $(document).on("click", "p#add-to-cart", function () {
    contentCart =
      JSON.parse(localStorage.getItem("addToCart")) !== null &&
      JSON.parse(localStorage.getItem("addToCart"))
        .map((item) => {
          $(document).on("click", "#close-row", function () {
            console.log(item);
          });
          return `
      <tr >
      <th class="close-row" scope="row">X</th>
      <td>${item.title}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>${item.title}</td>    
      </tr>        
          `;
        })
        .join("");
    cartContainer.innerHTML += contentCart;
    toggleCart.classList.add("slider-class", "custom-index");
    toggleCart.style.display = "block";
  });
  $(document).on("click", "div#empty-cart", function () {
    localStorage.removeItem("addToCart");
    contentCart = null;
    cartContainer.innerHTML = "";
  });

  console.log(JSON.parse(localStorage.getItem("addToCart")));
});
