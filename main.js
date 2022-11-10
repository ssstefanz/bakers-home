$(function() {
  console.log('DOM is ready, javascript loading.');

  // set generic ratios
  let fields = [
    {
      name: 'flour',
      label: 'Flour (A typical boule is 500g.)',
      value: 500
    },
  /*  {
      name: 'Water',
      label: 'Water',
      value: 375
    },*/
    {
      name: 'hydration',
      label: 'Hydration Percentage',
      value: 75
    },
    {
      name: 'time',
      label: 'For How Many Hours Can Your Dough Ferment?',
      value: 3
    }
  /*  {
      name: 'Salt',
      label: 'Salt',
      value: 10
    },
    {
      name: 'Yeast',
      label: 'Yeast',
      value: 1
    } */
  ];

  // create form and append to article
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  $('#dough-calc').append(form);



  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');

    input.setAttribute('id', field.name);
    input.setAttribute('value', field.value);

    form.appendChild(label);
    form.appendChild(input);
  }

  /*//create and add ingredient button
  const addBut = document.createElement('button');
  form.appendChild(addBut);
  addBut.setAttribute('type', 'submit');
  addBut.setAttribute('value', 'Submit');
  addBut.setAttribute('class', 'calc-button');
  addBut.textContent = 'Add an ingredient';*/

  //create and add calculate submitButton
  const calcBut = document.createElement('button');
  form.appendChild(calcBut);
  calcBut.setAttribute('type', 'submit');
  calcBut.setAttribute('value', 'Submit');
  calcBut.setAttribute('class', 'calc-button');
  calcBut.textContent = 'Calculate dough';

  function addField() {

  }

  //the main dough calculator
  const flourInput = $('#flour');
  let flour = Number(flourInput.val())
  const hydrationInput = $('#hydration');
  let hydration = Number(hydrationInput.val());
  const timeInput = $('#time');
  let time = Number(timeInput.val());

  $('#form').submit(function(event) {
    event.preventDefault();
    alert('Dough is caclutating!');
    calculateDough(flour, hydration, time);

  });

  function calculateDough(f, h, t) {
    //flour
    $('#flour-print').html('Flour = ' + f + 'g');

    //water
    h /= 100;
    let water = f * h;
    $('#water-print').html('Water = ' + water + 'g');

    //time
    if (t < 3) {
      $('#yeast-print').html('You must let your dough ferment for at least three hours. Try again, ass hat.');
    } else {

    }
  }



});
