const form = document.querySelector('form');
// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // when the submit button is clicked then only we get values
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmiResults = document.querySelector('#bmiResults');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  }else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    // show the result 
    results.innerHTML = `<span>${bmi}</span>`;

    // BMI 
    if( bmi < 18.6){
      bmiResults.innerHTML = "Under Weight"
    } else if ( bmi > 24.9){
      bmiResults.innerHTML =" Over Weight"
    } else {
      bmiResults.innerHTML = "Normal Range"
    }
  }
});