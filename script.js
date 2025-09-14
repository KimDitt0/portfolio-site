const textBox = document.getElementById("text-box");
const choices = document.getElementById("choices");

let storyIndex = 0;

const story = [
  {
    text: "������ �ߴ� ���� �����̾���.",
    choices: ["������ �ѷ�����", "�ٽ� ���� ���´�"]
  },
  {
    text: "���� �ȿ��� �Ķ� ������ ���� �ҳడ �ɾ� �־���.",
    choices: ["���� �Ǵ�", "����ģ��"]
  }
];

function showText(text, callback) {
  textBox.innerHTML = "";
  let i = 0;
  let interval = setInterval(() => {
    textBox.innerHTML += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 50); // ���� ��� �ӵ�
}

function showChoices(choicesArr) {
  choices.innerHTML = "";
  choicesArr.forEach(choice => {
    const btn = document.createElement("button");
    btn.innerText = choice;
    btn.classList.add("choice-btn");
    btn.onclick = () => nextStory();
    choices.appendChild(btn);
  });
}

function nextStory() {
  const current = story[storyIndex];
  showText(current.text, () => showChoices(current.choices));
  storyIndex++;
}

nextStory();
