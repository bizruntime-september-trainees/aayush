//start counting from page 1
var pageCounter = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {
  var ourRequest = new XMLHttpRequest();
  //page counter established on this url so that we get uninterrupted data
  //opening our request
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json');
  //loading our request
  ourRequest.onload = function() {
      //status of server if 200 then ok if 400 then error message(client error)
    if (ourRequest.status >= 200 && ourRequest.status <= 400) {
        //Json parse converts string data into javascript object
      var ourData = JSON.parse(ourRequest.responseText);
    //makes our data visible 
      renderHTML(ourData);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
    
  };
//if there is error then this function will come in action
  ourRequest.onerror = function() {
    console.log("Connection error");
  };
  //sending request 
  ourRequest.send();
  //page counter incremented 
  pageCounter++;
  //the button will appear till 3rd page then it will disappear
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
});
//to print data on our page
function renderHTML(data) {
  var htmlString = "";

  for (i = 0; i < data.length; i++) {
    htmlString += "<p>" + data[i].name + " is a " + data[i].species+ ".</p>";
    

  }
//inserts texts before end 
  animalContainer.insertAdjacentHTML('beforeend', htmlString);
}