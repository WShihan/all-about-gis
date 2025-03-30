let linkELe = document.getElementById('link');
let titleEle = document.getElementById('title');
let descEle = document.getElementById('desc');
let langEle = document.getElementById('lang');
let loadingEle = document.getElementById('loading');
let buttonEle = document.getElementById('buttons');
let topicEle = document.getElementById('topic');
let tipEle = document.getElementById('tip');

const optionKey = 'options';
const draftKey = 'draft';

class TipType {
  static Success = '✅ 操作成功！';
  static Error = '❌ 操作失败！';
  static Null = '-_-';
  static Info = '✅ 操作成功！';
}

let timer;

let credentials = {
  token: null,
  user: 'WShihan',
  repo: 'all-about-gis',
  email: null,
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
  credentials.token = savedData.token;
  credentials.email = savedData.email;
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
  clearTip();
  titleEle.value = draft.title;
  linkELe.value = draft.link;
  descEle.value = draft.desc;
  langEle.value = draft.lang;
  topicEle.value = draft.topic;
  tip(TipType.Success);
});

// 创建issue
document.getElementById('submit').addEventListener('click', function (evt) {
  submit('issue');
});

// 创建邮箱issue
document.getElementById('submitByEmail').addEventListener('click', function (evt) {
  submit('email');
});

function clear() {
  titleEle.value = '';
  linkELe.value = '';
  descEle.value = '';
  clearTip();
  tip(TipType.Success);
}

function save(key, data) {
  clearTip();
  chrome.storage.sync.set({ [key]: JSON.stringify(data) }, function () {
    tip(TipType.Success);
  });
}

document.getElementById('clear').addEventListener('click', () => {
  clear();
});

function submit(which) {
  let topic = document.getElementById('topic').value;
  let desc = descEle.value;
  let title = titleEle.value;
  let link = linkELe.value;
  let lange = langEle.value;
  try {
    if (title == '' || topic == '' || desc == '' || link == '' || lange == '') {
      tip('❌ 请填写完整信息!');
      return;
    }

    let content =
      topic == '文章' ? `【${lange}】[链接](${link})\n${desc}` : `[${title}](${link})\n${desc}`;
    let data = {
      title,
      body: content,
      assignees: ['WShihan'],
      labels: [topic],
    };

    let api;
    let headers;
    if (which == 'issue') {
      api = `https://api.github.com/repos/${credentials.user}/${credentials.repo}/issues`;
      headers = {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${credentials.token}`,
        'X-GitHub-Api-Version': '2022-11-28',
      };
      if (credentials.token == null || credentials.token == '') {
        tip('❌ 请先设置Github密钥');
        return;
      }
    } else {
      api = 'https://wsh233.cn/api/issue';
      headers = {
        'Content-Type': 'application/json',
        email: credentials.email,
      };
      if (credentials.email == null || credentials.email == '') {
        tip('❌ 请先设邮箱');
        return;
      }
    }
    clearTip();
    loadingEle.style.display = 'block';
    buttonEle.style.visibility = 'hidden';
    fetch(api, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        tip(TipType.Success);
      })
      .catch(error => {
        console.error('Error:', error);
        tip(TipType.Error);
      })
      .finally(() => {
        loadingEle.style.display = 'none';
        buttonEle.style.visibility = 'visible';
      });
  } catch (e) {
    console.log(e);
    tip(TipType.Error);
  }
}

function tip(msg) {
  tipEle.style.visibility = 'visible';
  tipEle.innerText = msg;
  timer = setTimeout(() => {
    clearTip();
  }, 3000);
}

function clearTip() {
  tipEle.style.visibility = 'hidden';
  tipEle.innerText = TipType.Null;
  if (typeof timer !== 'undefined') {
    clearTimeout(timer);
    timer = undefined;
  }
}
