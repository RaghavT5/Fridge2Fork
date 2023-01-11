function fruitList() {
  var fruitIng = document.getElementById("fruits");
  if (fruitIng.style.display === "none") {
    fruitIng.style.display = "block";
  } else {
    fruitIng.style.display = "none";
  }
}


function vegetableList() {
  var vegetableIng = document.getElementById("vegetables");
  if (vegetableIng.style.display === "none") {
    vegetableIng.style.display = "block";
  } else {
    vegetableIng.style.display = "none";
  }
}

function dairyList() {
  var dairyIng = document.getElementById("dairy");
  if (dairyIng.style.display === "none") {
    dairyIng.style.display = "block";
  } else {
    dairyIng.style.display = "none";
  }
}


function meatList() {
  var meatIng = document.getElementById("meat");
  if (meatIng.style.display === "none") {
    meatIng.style.display = "block";
  } else {
    meatIng.style.display = "none";
  }
}

function grainList() {
  var grainIng = document.getElementById("grain");
  if (grainIng.style.display === "none") {
    grainIng.style.display = "block";
  } else {
    grainIng.style.display = "none";
  }
}

function spiceList() {
  var spiceIng = document.getElementById("spice");
  if (spiceIng.style.display === "none") {
    spiceIng.style.display = "block";
  } else {
    spiceIng.style.display = "none";
  }
}

function sauceList() {
  var sauceIng = document.getElementById("sauce");
  if (sauceIng.style.display === "none") {
    sauceIng.style.display = "block";
  } else {
    sauceIng.style.display = "none";
  }
}

function bakingList() {
  var bakingIng = document.getElementById("baking");
  if (bakingIng.style.display === "none") {
    bakingIng.style.display = "block";
  } else {
    bakingIng.style.display = "none";
  }
}

function otherList() {
  var otherIng = document.getElementById("other");
  if (otherIng.style.display === "none") {
    otherIng.style.display = "block";
  } else {
    otherIng.style.display = "none";
  }
}


function addToCart(item) {
  // event.preventDefault();
  //   var cart = document.getElementById("cart");
  //   $("#cart").append("<p> <a  class='cartitem' href='#'   onclick='removeFromCart(this)'>" + item.innerHTML + "</a></p>");

  //   $('.cartitem').click(function (e) {
  //       $(e.target).remove();
  //   });

  event.preventDefault();
  var olddata = document.getElementById("ingredientInput").value;
  console.log(olddata);
///
  $("#cart").append("<li  class='cartitem' onclick='removeFromCart(this)'>" + item.innerHTML + "</li>");
  var newdata = olddata + "," + item.innerHTML;
  console.log(newdata);
  document.getElementById("ingredientInput").value = newdata;
  ////
  $('.cartitem').click(function (e) {
    $(e.target).remove();
  });



}

function recipeFetchApi(id) {

  $.get(`/api/food/recipe/${id}}`, function (data) {$("#cartA").html(data);}).done(function (data) {});
  // console.log(query);
}



function fetchApi() {

  //window.localStorage.removeItem("recipes")
  const query = {
    ingredientList: document.getElementById("ingredientInput").value
  };
  $.post("/api/food/get", query, function (data) {
    $("#cartA").html(data);
  }).done(function (data) {

    console.log(data.data);

   window.localStorage.setItem("recipes",JSON.stringify(data.data));
 
    // data.data.map((arr, index) => {
    //   var htm = `<li><h2>${arr.title}</h2><img src="${arr.image}" alt=""> <button type="button" onclick="${()=>$.get(`/api/food/recipe/${id}}`, function (data) {$("#cartA").html(data);}).done(function (data) {})}"class="btn btn-warning" id="ingredientSubmit">Find recipe</button></li>`
    //   document.getElementById("recipy").innerHTML = document.getElementById("recipy").innerHTML + htm;
    
    // })
    //  var recipes= window.localStorage.getItem("recipes");
    //  console.log(recipes);
    // // set the data
////
  });
  // console.log(query);
}


// const getUrlNow = (id) =>{
   
// $.get(`/api/food/searchResult/recipeInfo/${id}`, function(data){
//     console.log("Data: " + data );
//   });
// }



// function getRecipeUrl()
// {
//   var recipeResult=JSON.parse(window.localStorage.getItem("recipes"))
//   console.log(recipeResult)
//   var recipeSourceUrl =[]
//   recipeResult.map(async (arr, index) => {
// console.log(arr.id)
//     var data = await getUrlNow(arr.id)
    
//     recipeSourceUrl.push(data)
//   })
// console.log("Inside getRecipeUrl: ".recipeSourceUrl);

// //return recipeSourceUrl;
// }


function displayRecipes()
{
  var recipeResult=JSON.parse(window.localStorage.getItem("recipes"))
  console.log(recipeResult)
  recipeResult.map((arr, index) => {
    var htm = `<div class="col-md-3"> <img class="image" src="${arr.image}" alt="">  <a href="${arr.recipeUrl}" target="_blank"> <p onclick="getRecipeUrl()">${arr.title}</p> </a></div>`
    document.getElementById("recipe").innerHTML = document.getElementById("recipe").innerHTML + htm;
  })
  console.log("Inside displayRecipes(): ".recipeSourceUrl);
}

function removeFromCart(ele) {
  event.preventDefault()
  $("#cart").remove(ele);

}

$(function () {
  $('.item').click(function () {
    addToCart(this);
  });
});

// Feedback from


$(function()
{
    function after_form_submitted(data) 
    {
        if(data.result == 'success')
        {
            $('form#reused_form').hide();
            $('#success_message').show();
            $('#error_message').hide();
        }
        else
        {
            $('#error_message').append('<ul></ul>');

            jQuery.each(data.errors,function(key,val)
            {
                $('#error_message ul').append('<li>'+key+':'+val+'</li>');
            });
            $('#success_message').hide();
            $('#error_message').show();

            //reverse the response on the button
            $('button[type="button"]', $form).each(function()
            {
                $btn = $(this);
                label = $btn.prop('orig_label');
                if(label)
                {
                    $btn.prop('type','submit' ); 
                    $btn.text(label);
                    $btn.prop('orig_label','');
                }
            });
            
        }//else
    }

  $('#reused_form').submit(function(e)
      {
        e.preventDefault();

        $form = $(this);
        //show some response on the button
        $('button[type="submit"]', $form).each(function()
        {
            $btn = $(this);
            $btn.prop('type','button' ); 
            $btn.prop('orig_label',$btn.text());
            $btn.text('Sending ...');
        });
        

                    $.ajax({
                type: "POST",
                url: 'handler.php',
                data: $form.serialize(),
                success: after_form_submitted,
                dataType: 'json' 
            });        
        
      }); 
});

