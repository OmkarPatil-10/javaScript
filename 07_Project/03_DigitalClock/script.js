const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock');

//setInterval use to update the page every second
setInterval( function(){
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);
