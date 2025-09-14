const textBox = document.getElementById("text-box");
const choices = document.getElementById("choices");

let storyIndex = 0;

const story = [
  {
    text: "…눈을 뜨니 낯선 교실이었다.",
    choices: ["주위를 둘러본다", "다시 눈을 감는다"]
  },
  {
    text: "교실 안에는 파란 교복을 입은 소녀가 앉아 있었다.",
    choices: ["말을 건다", "도망친다"]
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
  }, 50); // 글자 출력 속도
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
