let tokenEle = document.getElementById('token');
let userEle = document.getElementById('user');
let repoEle = document.getElementById('repo');

chrome.storage.sync.get('token').then(data => {
  const { token } = data;
  if (typeof token != 'undefined' || token != '') {
    tokenEle.value = token;
  }
});

chrome.storage.sync.get('user').then(data => {
  const { user } = data;
  if (typeof user != 'undefined' || user != '') {
    userEle.value = user;
  }
});

chrome.storage.sync.get('repo').then(data => {
  const { repo } = data;
  if (typeof repo != 'undefined' || repo != '') {
    repoEle.value = repo;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  let savetoken = document.getElementById('saveToken');
  let saveUser = document.getElementById('saveUser');
  let saveRepo = document.getElementById('saveRepo');

  savetoken.addEventListener('click', function () {
    const token = tokenEle.value;
    save({ token: token });
  });

  saveUser.addEventListener('click', function () {
    const val = userEle.value;
    save({ user: val });
  });

  saveRepo.addEventListener('click', function () {
    const val = repoEle.value;
    save({ repo: val });
  });
});

function save(data) {
  chrome.storage.sync.set(data, function () {
    alert('保存成功');
  });
}
