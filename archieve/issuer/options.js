let tokenEle = document.getElementById('token');
let emailEle = document.getElementById('email');
const optionKey = 'options'

let options = {
  token: null,
  email: null,
};

chrome.storage.sync.get(optionKey).then(data => {
  let savedData = JSON.parse(data[optionKey]);
  Object.assign(options, savedData);
  tokenEle.value = options.token;
  emailEle.value = options.email;
});


document.addEventListener('DOMContentLoaded', function () {
  let saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function () {
    save({ token: tokenEle.value, email: emailEle.value });
  });
});

function save(data) {
  chrome.storage.sync.set({[optionKey]: JSON.stringify(data)}, function () {
    alert('保存成功');
  });
}
