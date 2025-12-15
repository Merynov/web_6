function addCollapse() {
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  if (!title || !content) {
    alert('Заповніть усі поля');
    return;
  }

  const obj = {
    title: title,
    content: content
  };

  fetch('php/data.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  })
  .then(() => {
    alert('Обʼєкт збережено');
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
  });
}


if (document.getElementById('collapse-container')) {
  fetch('php/data.php')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById('collapse-container');
      container.innerHTML = '';

      data.forEach(item => {
        const btn = document.createElement('button');
        btn.textContent = item.title;

        const div = document.createElement('div');
        div.textContent = item.content;
        div.style.display = 'none';

        btn.onclick = () => {
          div.style.display =
            div.style.display === 'none' ? 'block' : 'none';
        };

        container.appendChild(btn);
        container.appendChild(div);
        container.appendChild(document.createElement('hr'));
      });
    });
}
