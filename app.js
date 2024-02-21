// Komputer oylagan son;
let random = Math.floor(Math.random() * 50);

// Gamer kiritgan son;

let guess;

// Urinishlar soni
let count = 5;

// Result
let find = false;

guess = prompt(
  "Men bir son oyladim . Bu sonni topishga harakat qiling. Sizda 5 ta urinish bor."
);
count = count - 1;

guess = Number(guess);

//tekshirish 1.

if (random === guess) {
  alert("Tabriklaymiz siz bu sonni topdingiz:" + random);
  find = true;
} else if (random > guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kattaroq. Sizda ${count} - ta urinish qoldi `
  );
  guess = Number(guess);
  count -= 1;
} else if (random < guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kichikroq. Sizda ${count} - ta urinish qoldi`
  );
  guess = Number(guess);
  count -= 1;
}

//tekshirish 2.

if (random === guess && find === false) {
  alert("Tabriklaymiz siz bu sonni topdingiz:" + random);
  find = true;
} else if (random > guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kattaroq. Sizda ${count} - ta urinish qoldi `
  );
  guess = Number(guess);
  count -= 1;
} else if (random < guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kichikroq. Sizda ${count} - ta urinish qoldi`
  );
  guess = Number(guess);
  count -= 1;
}

//tekshirish 3.

if (random === guess && find === false) {
  alert("Tabriklaymiz siz bu sonni topdingiz:" + random);
  find = true;
} else if (random > guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kattaroq. Sizda ${count} - ta urinish qoldi `
  );
  guess = Number(guess);
  count -= 1;
} else if ((random, guess)) {
  guess = prompt(
    `Bu son siz oylagan sondan kichikroq. Sizda ${count} - ta urinish qoldi`
  );
  guess = Number(guess);
  count -= 1;
}

//tekshirish 4.

if (random === guess && find === false) {
  alert("Tabriklaymiz siz bu sonni topdingiz:" + random);
  find = true;
} else if (random > guess) {
  guess = prompt(
    `Bu son siz oylagan sondan kattaroq. Sizda ${count} - ta urinish qoldi `
  );
  guess = Number(guess);
  count -= 1;
} else {
  guess = prompt(
    `Bu son siz oylagan sondan kichikroq. Sizda ${count} - ta urinish qoldi`
  );
  guess = Number(guess);
  count -= 1;
}

if (find === true) {
  alert("Tabriklaymiz siz bu sonni topdingiz:" + random);
} else {
  alert("Yutqazdingiz sizda urinishlar qolmadi.");
}
