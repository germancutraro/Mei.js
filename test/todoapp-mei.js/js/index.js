(() => {
  Mei.getElement('#btn-submit', 'click', () => {
    let task = Mei.getElement('#task');
    // UI
    Mei.createElement('tr', {
      parent: Mei.getElement('#task-list'),
      children: [
        { element: 'td', textContent: task.value },
        { element: 'td', textContent: 'Remove', className: 'delete' }
      ]
    });
    // Remove
    Mei.getElements('.delete', 'click', e => Mei.removeElement(e.target.parentElement));
    // get all the elements
    let data = Mei.displayStore('local', 'tasks');
    // add to tasks
    data.push(task.value);
    // set store
    Mei.store({
      store: 'local',
      item: 'tasks',
      data
    });
    task.value = '';
  });

  document.addEventListener('DOMContentLoaded', () => {
    let data = Mei.displayStore('local', 'tasks');
    let output;
    if (data.length > 0) {
      Mei.displayStore('local', 'tasks').map(task => {
        output = `
          <tr>
            <td>${task}</td>
            <td class="delete">Remove</td>
          </tr>
        `;
      });
      Mei.getElement('#table-body').innerHTML = output;
    }
  });

  Mei.getElements('#task-list', 'click', e => {
    if (e.target.classList.contains('delete')) {
      // take the value of the item clicked
      let el = e.target.previousElementSibling;
      // get the data
      let data = Mei.displayStore('local', 'tasks');
      // Remove from localStorage
      data.find((item, i) => el.textContent === item ? data.splice(i, 1) : false);
      Mei.store({
        store: 'local',
        item: 'tasks',
        data
      });
      // Delete from UI
      Mei.removeElement(e.target.parentElement);
    }
  });
})()



