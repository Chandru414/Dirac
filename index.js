
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB0vN1Gq_3Z8Hz6IpzHLjxA5Rkn1WTe2kE",
//   authDomain: "dirac-1e9d8.firebaseapp.com",
//   databaseURL: "https://dirac-1e9d8-default-rtdb.firebaseio.com",
//   projectId: "dirac-1e9d8",
//   storageBucket: "dirac-1e9d8.firebasestorage.app",
//   messagingSenderId: "400733642489",
//   appId: "1:400733642489:web:e9bbda34a012c83da90c28",
//   measurementId: "G-XYN80P5Z48"
// };

const firebaseConfig = {
  apiKey: "AIzaSyC8oFRTxLy4aRUAMj8Qo6bCCI5iT3Ts-Hs",
  authDomain: "dirac-aa4f9.firebaseapp.com",
  databaseURL: "https://dirac-aa4f9-default-rtdb.firebaseio.com",
  projectId: "dirac-aa4f9",
  storageBucket: "dirac-aa4f9.firebasestorage.app",
  messagingSenderId: "338919337836",
  appId: "1:338919337836:web:d4b2d0668664c554634d49",
  measurementId: "G-BJ5VFQ4275"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database()

// Set database variable
// var database = firebase.database()

setInterval(save, 1000);


const xValues = [100,200,300,400,500,600,700,800,900,1000];

let wholeData;
let sortedData;

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
  const apiUrl = 'https://dirac-aa4f9-default-rtdb.firebaseio.com/Live.json';

  // Make a GET request
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      // console.log(data);

      // var index = [];

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

      // console.log(Object.keys(data).map(key => data[key].energy));

      // const sortedData2 = Object.fromEntries(
      //   Object.entries(data).sort((a, b) => a[1].index - b[1].index)
      // );
      
      // console.log(Object.keys(data).length);
      // var j = Object.keys(data).length - 1;
      // document.getElementsByTagName("table")[0].innerHTML += "<tr><td>" + data[Object.keys(data)[j]].index + "</td><td>" + data[Object.keys(data)[j]].amphour + "</td><td>" + data[Object.keys(data)[j]].battery_temp + "</td><td>" + data[Object.keys(data)[j]].current + "</td><td>" + data[Object.keys(data)[j]].energy + "</td><td>" + data[Object.keys(data)[j]].motor_rpm + "</td><td>" + data[Object.keys(data)[j]].motor_temp + "</td><td>" + data[Object.keys(data)[j]].odometer + "</td><td>" + data[Object.keys(data)[j]].power + "</td><td>" + data[Object.keys(data)[j]].soc + "</td><td>" + data[Object.keys(data)[j]].speed + "</td><td>" + data[Object.keys(data)[j]].timestamp + "</td><td>" + data[Object.keys(data)[j]].user_float1 + "</td><td>" + data[Object.keys(data)[j]].user_float2 + "</td><td>" + data[Object.keys(data)[j]].user_float3 + "</td><td>" + data[Object.keys(data)[j]].user_float4 + "</td><td>" + data[Object.keys(data)[j]].user_int1 + "</td><td>" + data[Object.keys(data)[j]].user_int2 + "</td><td>" + data[Object.keys(data)[j]].user_int3 + "</td><td>" + data[Object.keys(data)[j]].user_int4 + "</td><td>" + data[Object.keys(data)[j]].voltage + "</td></tr>"
      // console.log(data[Object.keys(data)[j]].index,data[Object.keys(data)[j]].power,data[Object.keys(data)[j]].speed);
      
      
      
      
      // var j = Object.keys(data).length - 1;
      // document.getElementsByTagName("table")[0].innerHTML += "<tr><td>" + sortedData2[Object.keys(sortedData2)[j]].index + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].amphour + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].battery_temp + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].current + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].energy + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].motor_rpm + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].motor_temp + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].odometer + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].power + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].soc + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].speed + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].timestamp + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_float1 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_float2 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_float3 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_float4 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_int1 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_int2 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_int3 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].user_int4 + "</td><td>" + sortedData2[Object.keys(sortedData2)[j]].voltage + "</td></tr>"
      // console.log(sortedData2[Object.keys(sortedData2)[j]].index,sortedData2[Object.keys(sortedData2)[j]].power,sortedData2[Object.keys(sortedData2)[j]].speed);
      
      // console.log(Object.keys(sortedData2).map(key => sortedData2[key].energy));
      // console.log(Object.values(sortedData2).map(value => value.index));
      
      
      // var xValues = data[Object.keys(data)[j]].timestamp;
      // console.log(data[Object.keys(data)[j]].index);
      // console.log(data);
      // console.log(data);
      // chartRefresh(data);
      // sortData(data);
      


      // Sort data by energy in ascending order

      // Initial population of the table
      populateTable(data);



      chartRefresh(data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

function deleteData() {
  fetch('https://dirac-aa4f9-default-rtdb.firebaseio.com/Live.json',  {
    method: 'DELETE'
  })
}

// function populateTable1(data) {
//   const tableBody = document.getElementById("DataTable").getElementsByTagName('tbody')[0];
//   tableBody.innerHTML = ''; // Clear the existing table body

//   // Convert data object to an array, and sort by index in descending order
//   const sortedData1 = Object.entries(data)
//       .map(([key, value]) => ({
//           // Timestamp: value.timestamp,
//           // Index: value.index,
//           // Energy: value.energy,
//           // Current: value.current,
//           // Voltage: value.voltage,
//           // Odometer: value.odometer,
//           // Speed: value.speed,
//           // MotorRPM: value.motor_rpm,
//           // BatteryTemp: value.battery_temp,
//           // Power: value.power,
//           // SOC: value.soc,
//           // MotorTemp: value.motor_temp,
//           // AmpHour: value.amphour,

//           AmpHour: value.amphour,
//           BatteryTemp: value.battery_temp,
//           Current: value.current,
//           Energy: value.energy,
//           Index: value.index,
//           MotorRPM: value.motor_rpm,
//           MotorTemp: value.motor_temp,
//           Odometer: value.odometer,
//           Power: value.power,
//           SOC: value.soc,
//           Speed: value.speed,
//           Timestamp: new Date(value.timestamp * 1000),
//           Voltage: value.voltage,
//           S1:value.user_float1,
//           S2:value.user_float2,
//           S3:value.user_float3,
//           S4:value.user_float4,
//           S5:value.user_int1,
//           S6:value.user_int2,
//           S7:value.user_int3,
//           S8:value.user_int4,

//       }))
//       .sort((a, b) => b.Index - a.Index); // Sort in descending order by index

//       console.log(sortedData1);

//   // Populate the table body with the sorted data
//   sortedData1.forEach(rowData => {
//       const row = document.createElement("tr");
//       row.appendChild(createCell(rowData.Timestamp));
//       row.appendChild(createCell(rowData.Index));
//       row.appendChild(createCell(rowData.current));
//       row.appendChild(createCell(rowData.energy));
//       row.appendChild(createCell(rowData.voltage));
//       row.appendChild(createCell(rowData.energy));
//       row.appendChild(createCell(rowData.speed));
//       row.appendChild(createCell(rowData.motor_rpm));
//       row.appendChild(createCell(rowData.battery_temp));
//       row.appendChild(createCell(rowData.power));
//       row.appendChild(createCell(rowData.soc));
//       row.appendChild(createCell(rowData.motor_temp));
//       row.appendChild(createCell(rowData.amphour));
//       tableBody.appendChild(row);
//   });
// }

function populateTable(data) {
  const tableBody = document.getElementById("DataTable").getElementsByTagName('tbody')[0];
  tableBody.innerHTML = ''; // Clear the existing table body

  // Convert data object to an array, and sort by index in descending order
  const sortedData = Object.entries(data)
      .map(([key, value]) => value)  // Extract the object values
      .sort((a, b) => b.index - a.index); // Sort in descending order by index

  // Populate the table body with the sorted data
  sortedData.forEach(rowData => {
      const row = document.createElement("tr");
      
      // Loop through each property in rowData and create a cell
      for (const [key, val] of Object.entries(rowData)) {
          const cell = document.createElement("td");
          if(key == "timestamp"){
            // cell.textContent = new Date(val * 1000).toISOString().split('T')[0]; // Set cell text to the value
            date = new Date(val * 1000)
            const year = date.getFullYear();
            const month = date.getMonth() + 1; // Months are zero-indexed
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();

            cell.textContent = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
          }
          else{
            cell.textContent = val; // Set cell text to the value
          }
          
          row.appendChild(cell);
      }

      tableBody.appendChild(row);
  });
}

function createCell(text) {
  console.log(text);
  const cell = document.createElement("td");
  cell.textContent = text;
  return cell;
}



function sortData(data){
  // console.log(data);
  // sortedData = Object.fromEntries(
  //   Object.entries(data).sort((a, b) => b[1].index - a[1].index)
  // );
  // const sortedData = Object.fromEntries(
  //   Object.entries(data).sort((a, b) => b[1].energy - a[1].energy)
  // );
  // console.log(sortedData);
  // const energyLabelsAsc = Object.keys(sortedData).map(key => sortedData[key].energy);
  // const currentValuesAsc = Object.values(sortedData).map(value => value.current);
  // console.log(energyLabelsAsc);
  // console.log(currentValuesAsc);
}



var NewArr = [];

function chartRefresh(sortedData1){
  // Sort data by energy in ascending order
const sortedData = Object.fromEntries(
  Object.entries(sortedData1).sort((a, b) => a[1].index - b[1].index)
);

const xValues = Object.keys(sortedData).map(key => sortedData[key].timestamp);
const indexValues = Object.keys(sortedData).map(key => sortedData[key].index);

const amphourValues = Object.keys(sortedData).map(key => sortedData[key].amphour);
const batteryTempValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const currentValues = Object.keys(sortedData).map(key => sortedData[key].index);
const energyValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const motorRPMValues = Object.keys(sortedData).map(key => sortedData[key].index);
const motorTempValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const odoMeterValues = Object.keys(sortedData).map(key => sortedData[key].index);
const powerValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const socValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const speedValues = Object.keys(sortedData).map(key => sortedData[key].speed);
const voltageValues = Object.keys(sortedData).map(key => sortedData[key].speed);
// console.log(JSON.stringify(sortedData, null, 4));
// currentValues = Object.keys(sortedData).map(key => sortedData[key].energy); // Replace 'current' with the desired property



new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues, // Timestamps for the x-axis
    datasets: [{ 
      label: "Index", // Optional: Add a label for better understanding
      data: indexValues,
      borderColor: "red",
      fill: false
    }, { 
      label: "Amphour", // Optional: Add a label for energy
      data: amphourValues,
      borderColor: "green",
      fill: false
    }, { 
      label: "Battery Temp", // Optional: Add a label for energy
      data: batteryTempValues,
      borderColor: "blue",
      fill: false
    }, { 
      label: "Current", // Optional: Add a label for energy
      data: currentValues,
      borderColor: "yellow",
      fill: false
    }, { 
      label: "Energy", // Optional: Add a label for energy
      data: energyValues,
      borderColor: "orange",
      fill: false
    }, { 
      label: "Motor RPM", // Optional: Add a label for energy
      data: motorRPMValues,
      borderColor: "pink",
      fill: false
    }, { 
      label: "Motor Temp", // Optional: Add a label for energy
      data: motorTempValues,
      borderColor: "cyan",
      fill: false
    }, { 
      label: "Odometer", // Optional: Add a label for energy
      data: odoMeterValues,
      borderColor: "brown",
      fill: false
    }, { 
      label: "Power", // Optional: Add a label for energy
      data: powerValues,
      borderColor: "green",
      fill: false
    }, { 
      label: "SOC", // Optional: Add a label for energy
      data: socValues,
      borderColor: "Turquoise",
      fill: false
    }, { 
      label: "Speed", // Optional: Add a label for energy
      data: speedValues,
      borderColor: "blue",
      fill: false
    }, { 
      label: "Voltage", // Optional: Add a label for energy
      data: voltageValues,
      borderColor: "black",
      fill: false
    }]
  },
  options: {
    legend: { display: true },
    scales: {
      x: {
        type: 'time', // If you're dealing with timestamps, set the x-axis to time
        title: {
          display: true,
          text: 'Time'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Values'
        }
      }
    }
  }
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