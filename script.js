const messages = document.getElementById("messages");
const choices = document.getElementById("choices");

// 캐릭터 이미지
const characters = {
  player: "images/player.png",
  npc: "images/npc.png"
};

// 효과음
function playSFX(url){
  const sfx = new Audio(url);
  sfx.play();
}

// 말풍선 출력
function writeMessage(text, speaker="npc"){
  const msgDiv = document.createElement("div");
  msgDiv.className = "message";

  const img = document.createElement("img");
  img.src = characters[speaker];

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.innerText = text;

  if(speaker === "player"){
    msgDiv.style.flexDirection = "row-reverse";
  }

  msgDiv.appendChild(img);
  msgDiv.appendChild(bubble);
  messages.appendChild(msgDiv);

  messages.scrollTop = messages.scrollHeight;
}

// 선택지 표시
function setChoices(options){
  choices.innerHTML = "";
  options.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt.text;
    btn.onclick = () => {
      playSFX('audio/click.mp3');
      opt.action();
    };
    choices.appendChild(btn);
  });
}

// 게임 시작
function startGame(){
  writeMessage("당신은 포트폴리오의 세계에 들어왔습니다.", "npc");
  setChoices([
    { text: "작업물 보기", action: () => {
        writeMessage("여기서 제 포트폴리오 문서를 확인할 수 있습니다.", "player");
        setChoices([{ text: "뒤로가기", action: startGame }]);
    }},
    { text: "기획자로서의 이야기 듣기", action: () => {
        writeMessage("저는 수집형 RPG QA 경험과 기획 역량을 바탕으로 새로운 도전을 하고 있습니다.", "player");
        setChoices([{ text: "뒤로가기", action: startGame }]);
    }}
  ]);
}

startGame();
