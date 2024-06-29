let linkELe = document.getElementById('link');
let titleEle = document.getElementById('title');
let descEle = document.getElementById('desc');
let langEle = document.getElementById('lang');
let loadingEle = document.getElementById('loading');
let buttonEle = document.getElementById('buttons');

let credentials = {
  token: null,
  user: null,
  repo: null,
};

chrome.storage.sync.get('token').then(data => {
  const { token } = data;
  console.log(data);
  if (typeof token != 'undefined' || token != '') {
    credentials.token = token;
  }
});

chrome.storage.sync.get('user').then(data => {
  const { user } = data;
  console.log(data);
  if (typeof user != 'undefined' || user != '') {
    credentials.user = user;
  }
});

chrome.storage.sync.get('repo').then(data => {
  const { repo } = data;
  console.log(data);
  if (typeof repo != 'undefined' || repo != '') {
    credentials.repo = repo;
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let currentTab = tabs[0];
  linkELe.value = currentTab.url;
  titleEle.value = currentTab.title;
});

document.getElementById('submit').addEventListener('click', function () {
  let topic = document.getElementById('topic').value;
  let desc = descEle.value;
  let title = titleEle.value;
  let link = linkELe.value;
  let lange = langEle.value;
  try {
    if (title == '' || topic == '' || desc == '' || link == '' || lange == '') {
      alert('请填写完整信息');
      return;
    }

    let data = {
      title,
      body: `【${lange}】[${title}](${link})\n${desc}`,
      assignees: ['WShihan'],
      labels: [topic],
    };

    if (credentials.token == null || credentials.user == null || credentials.repo == null) {
      alert('请先保存github账号信息');
      return;
    }
    loadingEle.style.display = 'block';
    buttonEle.style.visibility = 'hidden';
    fetch(`https://api.github.com/repos/${credentials.user}/${credentials.repo}/issues`, {
      method: 'POST',
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${credentials.token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        alert('提交成功');
        clear();
      })
      .catch(error => {
        console.error('Error:', error);
        alert('提交失败');
      })
      .finally(() => {
        loadingEle.style.display = 'none';
        buttonEle.style.visibility = 'visible';
      });
  } catch (e) {
    console.log(e);
    alert('提交失败');
  }
});

function clear() {
  titleEle.value = '';
  linkELe.value = '';
  descEle.value = '';
}
document.getElementById('clear').addEventListener('click', () => {
  clear();
});
