const playerOneName = document.getElementById('pOne');
const playerTwoName = document.getElementById('pTwo');
const playerOneBtn = document.getElementById('pOneBtn');
const playerTwoBtn = document.getElementById('pTwoBtn');
const playerOneTitle = document.getElementById('playerOnetitle');
const playerTwoTitle = document.getElementById('playerTwotitle');
const rollBtn = document.getElementById('clickToRoll');
const p1Img = document.getElementById('playerOneImg');
const p2Img = document.getElementById('playerTwoImg');
const sonuc = document.getElementById('sonuc');

let p1Name;
let p2Name;

playerOneBtn.addEventListener('click', () => {
  if (playerOneName.value && +playerOneName.value !== 0) {
    p1Name = playerOneName.value;
    document.querySelector('.playerOne').style.display = 'none';
    playerOneTitle.innerHTML = p1Name;
  }
});

playerTwoBtn.addEventListener('click', () => {
  if (playerTwoName.value && +playerTwoName.value !== 0) {
    p2Name = playerTwoName.value;
    document.querySelector('.playerTwo').style.display = 'none';
    playerTwoTitle.innerHTML = p2Name;
  }
});

rollBtn.addEventListener('click', () => {
  if (
    playerOneName.value &&
    +playerOneName.value !== 0 &&
    playerTwoName.value &&
    +playerTwoName.value !== 0
  ) {
    const randomDice1 = Math.floor(Math.random() * 6 + 1);
    const randomDice2 = Math.floor(Math.random() * 6 + 1);

    p1Img.src = `./img/Zar${randomDice1}.png`;
    p2Img.src = `./img/Zar${randomDice2}.png`;

    if (randomDice1 > randomDice2) {
      sonuc.innerText = `${playerOneTitle.innerHTML} crushed ${playerTwoTitle.innerHTML}`;
    } else if (randomDice1 < randomDice2) {
      sonuc.innerText = `${playerTwoTitle.innerHTML} showed no mercy to ${playerOneTitle.innerHTML}`;
    } else {
      sonuc.innerText = `ROUND DRAW !`;
    }
  } else {
    sonuc.innerText = `Please fill in all the blanks`;
  }
});
