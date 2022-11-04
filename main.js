$(function() {
  console.log('DOM is ready, javascript loading!');

  let fields = [
    {
      name: 'flour',
      label: 'Flour'
    },
    {
      name: 'water',
      label: 'Water'
    },
    {
      name: 'salt',
      label: 'Salt'
    },
    {
      name: 'yeast',
      label: 'Yeast'
    }
  ];

  const form = document.createElement('form');
  document.body.appendChild(form);

  for (let i = 0; i < fields.length; i += 1) {
    const field = fields[i];

    const label = document.createElement('label');
    label.textContent = field.label;
    label.setAttribute('for', field.name);

    const input = document.createElement('input');

    input.setAttribute('id', field.name);

    form.appendChild(label);
    form.appendChild(input);
  }
});
