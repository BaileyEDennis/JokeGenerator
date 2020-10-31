import axios from 'axios';

const jokeDom = () => {
  $('#app').html(`
  <div>
    <h1>Welcome to the Joke Generator!</h1>
  </div>
  <div>
  <button type="button" class="btn btn-primary" id="get-joke-btn">Get a Joke!</button>
  </div>
  `);
};

$('body').on('click', '#get-joke-btn', () => {
  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then((response) => {
      $('#app').html(`<h2>${response.data.setup}</h2>
    <button type="button" class="btn btn-primary" id="get-punch-btn">Get the Punchline!</button>
    `);
      $('body').on('click', '#get-punch-btn', () => {
        $('#app').html(`<h2>${response.data.punchline}  <i class="far fa-laugh"></i></h2>`);
        setTimeout(jokeDom, 3000);
      });
    });
});

export default { jokeDom };
