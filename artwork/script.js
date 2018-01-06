document.addEventListener("DOMContentLoaded", function(event){
  console.log("DOM fully loaded and parsed");

  // nav events

  console.log("reading");

    // end of nav events

  // all thumbnails

  var elements = document.querySelectorAll("li");
  var c = 0;

  // filename array
  var fileName = ["jMraz.jpg", "3women.jpg", "beach.jpg", "fma.jpg", "fox.jpg", "leo.jpg", "roxas.jpg", "rox.jpg", "spiderM.jpg", "stillLife.jpg", "ven.jpg"];

  var title = ["Portrait #1", "Three Women", "Beach", "Anime Multi-portrait", "Hipster Fox", "Portrait #2", "Roxas #1", "Rox #2", "Spiderman", "Still Life", "Ventus"];

  // description array
  var description = ["Portrait of singer/songwriter Jason Mraz, charcoal on bristol paper, 2012", "Colored pencil on tissue paper, 2011", "Watercolor, watercolor paper, 2011", "Oil paint on canvas, 2014", "Digital illustration, 2015", "Oil pastel on paper, 2012", "Pencil on paper, 2009", "Pencil on paper, 2010", "Charcoal on paper, 2011", "Pencil on paper, 2008", "Pencil on Paper, 2011"];

  var previewImg = document.getElementById("previewImg");
  var artTitle = document.getElementById("artTitle");
  var artDes = document.getElementById("artDes");

  // function preview(x, y, z){
  //
  //     previewImg.src = "images/" + x;
  //     artTitle.innerHTML = y;
  //     artDes.innerHTML = z;
  //
  // }
  var i;
  for(i = 0; i < elements.length; i++){

    console.log("looping");

    elements[i].addEventListener("click", function(){

      previewImg.src = "images/" + fileName[i];
      artTitle.innerHTML = title[i];
      artDes.innerHTML = description[i];

    });

  }


  });
