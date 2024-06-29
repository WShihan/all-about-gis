let linkELe = document.getElementById('link');
let titleEle = document.getElementById('title');
let descEle = document.getElementById('desc');
let langEle = document.getElementById('lang');
let loadingEle = document.getElementById('loading');
let buttonEle = document.getElementById('buttons');
let topicEle = document.getElementById('topic');

const optionKey = 'options';
const draftKey = 'draft';

let credentials = {
  token: null,
  user: null,
  repo: null,
};

let draft = {
  title: null,
  link: null,
  desc: null,
  lang: null,
  topic: null,
};

// 获取配置信息
chrome.storage.sync.get(optionKey).then(data => {
  let savedData = JSON.parse(data[optionKey]);
  Object.assign(credentials, savedData);
});

// 获取草稿
chrome.storage.sync.get(draftKey).then(data => {
  let savedData = JSON.parse(data[draftKey]);
  Object.assign(draft, savedData);
});

// 获取当前标签页信息：URL，以及标题
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  let currentTab = tabs[0];
  linkELe.value = currentTab.url;
  titleEle.value = currentTab.title;
});

// 保存事件
document.getElementById('save').addEventListener('click', function (evt) {
  draft.topic = topicEle.value;
  draft.desc = descEle.value;
  draft.title = titleEle.value;
  draft.link = linkELe.value;
  draft.lang = langEle.value;
  save(draftKey, draft);
});

// 恢复事件
document.getElementById('restore').addEventListener('click', function (evt) {
  titleEle.value = draft.title;
  linkELe.value = draft.link;
  descEle.value = draft.desc;
  langEle.value = draft.lang;
  topicEle.value = draft.topic;
});

// 创建issue
document.getElementById('submit').addEventListener('click', function (evt) {
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

    let content =
      topic == '文章' ? `【${lange}】[${title}](${link})\n${desc}` : `[${title}](${link})\n${desc}`;
    let data = {
      title,
      body: content,
      assignees: ['WShihan'],
      labels: [topic],
    };

    if (
      credentials.token == null ||
      credentials.user == null ||
      credentials.repo == null ||
      credentials.token == '' ||
      credentials.user == '' ||
      credentials.repo == ''
    ) {
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

function save(key, data) {
  chrome.storage.sync.set({ [key]: JSON.stringify(data) }, function () {
    alert('保存成功');
  });
}

document.getElementById('clear').addEventListener('click', () => {
  clear();
});
