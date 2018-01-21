(() => {
  Mei.getElement('#btn-submit', 'click', () => {
    let task = Mei.getElement('#task');
    // Element Creation
    Mei.createElement('li', {
      textContent: `${task.value} `,
      className: 'item',
      parent: Mei.getElement('#task-list'), 
      children: [{element: 'span', className: 'fa fa-times delete'}]
    });
    // clear the input
    task.value = '';
    // Remove
    Mei.getElements('.delete', 'click', e => Mei.removeElement(e.target.parentElement));
  });
})()