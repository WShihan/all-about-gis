let tokenEle = document.getElementById('token');
const optionKey = 'options'

let options = {
  token: null,
};

chrome.storage.sync.get(optionKey).then(data => {
  let savedData = JSON.parse(data[optionKey]);
  Object.assign(options, savedData);
  tokenEle.value = options.token;
});


document.addEventListener('DOMContentLoaded', function () {
  let saveButton = document.getElementById('saveButton');
  saveButton.addEventListener('click', function () {
    save({ token: tokenEle.value });
  });
});

function save(data) {
  chrome.storage.sync.set({[optionKey]: JSON.stringify(data)}, function () {
    alert('保存成功');
  });
}
