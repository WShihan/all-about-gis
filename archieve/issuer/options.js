let tokenEle = document.getElementById('token');
let userEle = document.getElementById('user');
let repoEle = document.getElementById('repo');
const optionKey = 'options'

let options = {
  token: null,
  user: null,
  repo: null,
};

chrome.storage.sync.get(optionKey).then(data => {
  let savedData = JSON.parse(data[optionKey]);
  Object.assign(options, savedData);
  tokenEle.value = options.token;
  userEle.value = options.user;
  repoEle.value = options.repo;
});


document.addEventListener('DOMContentLoaded', function () {
  let saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function () {
    save({ token: tokenEle.value, user: userEle.value, repo: repoEle.value });
  });
});

function save(data) {
  chrome.storage.sync.set({[optionKey]: JSON.stringify(data)}, function () {
    alert('保存成功');
  });
}
