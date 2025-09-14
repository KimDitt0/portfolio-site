const messages = document.getElementById("messages");
const choices = document.getElementById("choices");

// ĳ���� �̹���
const characters = {
  player: "images/player.png",
  npc: "images/npc.png"
};

// ȿ����
function playSFX(url){
  const sfx = new Audio(url);
  sfx.play();
}

// ��ǳ�� ���
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

// ������ ǥ��
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

// ���� ����
function startGame(){
  writeMessage("����� ��Ʈ�������� ���迡 ���Խ��ϴ�.", "npc");
  setChoices([
    { text: "�۾��� ����", action: () => {
        writeMessage("���⼭ �� ��Ʈ������ ������ Ȯ���� �� �ֽ��ϴ�.", "player");
        setChoices([{ text: "�ڷΰ���", action: startGame }]);
    }},
    { text: "��ȹ�ڷμ��� �̾߱� ���", action: () => {
        writeMessage("���� ������ RPG QA ����� ��ȹ ������ �������� ���ο� ������ �ϰ� �ֽ��ϴ�.", "player");
        setChoices([{ text: "�ڷΰ���", action: startGame }]);
    }}
  ]);
}

startGame();
