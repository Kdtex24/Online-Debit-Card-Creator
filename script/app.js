const elem = element => document.querySelector(`.${element}`);
const elemAll = element => document.querySelectorAll(`.${element}`);

//Prevent default form submittion
elem('card-form').addEventListener('submit', e => e.preventDefault());

//Grab all input fields
const elem_all = elemAll('input-field');
elem_all.forEach(elem => {
  elem.addEventListener('input', function(e) {
    // Handle Holder Name
    if (e.target.classList.contains('name')) {
      const name = e.target.value;

      const name_array = name.split(' ');

      let display_name = '';

      name_array.forEach(name => {
        display_name += `${name.charAt(0).toUpperCase()}${name.slice(1)} `;
      });

      //console.log(name.charAt(0).toUpperCase());

      if (!isNaN(name)) {
        e.target.nextElementSibling.textContent =
          '*Please enter a valid name (Max: 25 characters)';
        e.target.nextElementSibling.classList.add('incorrect');
      } else {
        e.target.nextElementSibling.textContent = 'Name of Card Holder';
      }

      document.querySelector(
        '.card-holder-name'
      ).textContent = display_name.slice(0, 25);
    }

    // Handle Card Number
    if (e.target.classList.contains('number')) {
      const num = e.target.value;

      if (isNaN(num)) {
        e.target.nextElementSibling.textContent =
          '*Please enter a valid card number(max: 16 numbers)';
        e.target.nextElementSibling.classList.add('incorrect');
      } else {
        e.target.nextElementSibling.textContent = 'Card Number';
      }

      const display_number = `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(
        8,
        12
      )} ${num.slice(12, 16)}`;

      document.querySelector('.card-number').textContent = display_number;

      document.querySelector('.number-initial').textContent = num.slice(0, 4);
    }

    //HAndle Expire Date
    if (e.target.classList.contains('date')) {
      const date = e.target.value;

      const regEx = /[0-9]{2}\/[0-9]{2}/;

      if (!regEx.test(date)) {
        e.target.nextElementSibling.textContent =
          '*Please enter a valid date number(mm/yy)';
        e.target.nextElementSibling.classList.add('incorrect');
      } else {
        e.target.nextElementSibling.textContent = 'Expire Date(mm/yy)';
      }

      document.querySelector('.card-date').textContent = date;
    }
  });
});

// Back of Card

elem('three-digit-number').addEventListener('focus', () => {
  elem('card-back').classList.add('reverse-flip');
  elem('card-front').classList.add('flip');
});

elem('three-digit-number').addEventListener('blur', () => {
  elem('card-back').classList.remove('reverse-flip');
  elem('card-front').classList.remove('flip');
});

// Handle Back of card details
elem('three-digit-number').addEventListener('input', e => {
  const digit = e.target.value;

  if (isNaN(digit)) {
    e.target.nextElementSibling.textContent =
      '*Please enter a valid digit number(Max: 3 charaters)';
    e.target.nextElementSibling.classList.add('incorrect');
  } else {
    e.target.nextElementSibling.textContent = 'Three Digit Number';
  }

  elem('three-digit').textContent = digit.slice(0, 3);
});
