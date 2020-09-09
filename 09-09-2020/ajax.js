document.getElementById('button').addEventListener('click', loadUsers);

    // Loading  Github random Users
    function loadUsers(){
      var abc = new XMLHttpRequest();
      //opening the request to get elements from server
      abc.open('GET', 'https://api.github.com/users', true);
      //loading the function
      abc.onload = function(){
        if(this.status == 200){
          var users = JSON.parse(this.responseText);
          //stored in variable output
          var output = '';
          for(var i in users){
            output +=
              '<div class="user">' +
              '<img src="'+users[i].avatar_url+'" width="70px" height="70px">' +
              '<ul>' +
              '<li>ID: '+users[i].id+'</li>' +
              '<li>Login: '+users[i].login+'</li>' +
              '</ul>' +
              '</div>';
          }
          //returns inner content
          document.getElementById('users').innerHTML = output;
        }
      }
      
      abc.send();
    }