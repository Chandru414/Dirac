
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0vN1Gq_3Z8Hz6IpzHLjxA5Rkn1WTe2kE",
  authDomain: "dirac-1e9d8.firebaseapp.com",
  databaseURL: "https://dirac-1e9d8-default-rtdb.firebaseio.com",
  projectId: "dirac-1e9d8",
  storageBucket: "dirac-1e9d8.firebasestorage.app",
  messagingSenderId: "400733642489",
  appId: "1:400733642489:web:e9bbda34a012c83da90c28",
  measurementId: "G-XYN80P5Z48"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()

// Set database variable
// var database = firebase.database()

setInterval(save, 1000);

function save() {
  // var email = document.getElementById('email').value
  // var password = document.getElementById('password').value
  // var username = document.getElementById('username').value
  // var say_something = document.getElementById('say_something').value
  // var favourite_food = document.getElementById('favourite_food').value

  // database.ref('users/' + username).set({
  //   email : email,
  //   password : password,
  //   username : username,
  //   say_something : say_something,
  //   favourite_food : favourite_food
  // })

  // alert('Saved');

  // Define the API URL
  const apiUrl = 'https://dirac-1e9d8-default-rtdb.firebaseio.com/Live.json';

  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);

      var index = [];

      //   for (var x in data) {
      //     index.push(data[x].timestamp);
      //  }

      for (var i = 0; i < Object.keys(data).length; i++) {
        // console.log(i);
        // console.log(Object.keys(data)[i+1]);
        // console.log(data[Object.keys(data)[i+1]]);
        // console.log(data[Object.keys(data)[i+1]].index);
        // console.log(data[Object.keys(data)[i+1]].current);
        // console.log(data[Object.keys(data)[i+1]].energy);
        // document.getElementsByTagName("table")[0].innerHTML+= "<tr><td>"+data[Object.keys(data)[i+1]].index+"</td><td>"+data[Object.keys(data)[i+1]].current+"</td><td>"+data[Object.keys(data)[i+1]].energy+"</td></tr>"


      };
      console.log(Object.keys(data).length);
      var j = Object.keys(data).length - 1;
      document.getElementsByTagName("table")[0].innerHTML += "<tr><td>" + data[Object.keys(data)[j]].index + "</td><td>" + data[Object.keys(data)[j]].amphour + "</td><td>" + data[Object.keys(data)[j]].battery_temp + "</td><td>" + data[Object.keys(data)[j]].current + "</td><td>" + data[Object.keys(data)[j]].energy + "</td><td>" + data[Object.keys(data)[j]].motor_rpm + "</td><td>" + data[Object.keys(data)[j]].motor_temp + "</td><td>" + data[Object.keys(data)[j]].odometer + "</td><td>" + data[Object.keys(data)[j]].power + "</td><td>" + data[Object.keys(data)[j]].soc + "</td><td>" + data[Object.keys(data)[j]].speed + "</td><td>" + data[Object.keys(data)[j]].timestamp + "</td><td>" + data[Object.keys(data)[j]].user_float1 + "</td><td>" + data[Object.keys(data)[j]].user_float2 + "</td><td>" + data[Object.keys(data)[j]].user_float3 + "</td><td>" + data[Object.keys(data)[j]].user_float4 + "</td><td>" + data[Object.keys(data)[j]].user_int1 + "</td><td>" + data[Object.keys(data)[j]].user_int2 + "</td><td>" + data[Object.keys(data)[j]].user_int3 + "</td><td>" + data[Object.keys(data)[j]].user_int4 + "</td><td>" + data[Object.keys(data)[j]].voltage + "</td></tr>"


    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function (snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email: email,
    password: password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}