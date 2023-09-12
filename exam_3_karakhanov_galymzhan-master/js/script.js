function battle(griffin, witcher) {
  griffin = {
    name: "Griffin",
    hp: 2000, // Жизненная энергия
    defense: 120, // Защита
    str: 150, // Сила
    weapon: 0, // Оружие
    getStatus: function () {
      console.log(`${this.name}: ${this.hp} HP`);
    },
    changeHP: function (hp) {
      this.hp = Math.max(0, this.hp + hp);
    },
  };

  witcher = {
    name: "Witcher",
    hp: 1000,
    defense: 100,
    str: 120,
    weapon: 250,
    getStatus: function () {
      console.log(`${this.name}: ${this.hp} HP`);
    },
    changeHP: function (hp) {
      this.hp = Math.max(0, this.hp + hp);
    },
  };

  function attackGriffon(witcher) {
    const damadeGriffines = witcher.str + witcher.weapon - griffin.defense;
    griffin.changeHP(-damadeGriffines);
    console.log(
      `${witcher.name} attacked ${griffin.name} for ${damadeGriffines} damage`
    );
    console.log(`${griffin.name}: ${griffin.hp} HP `);
    if (griffin.hp <= 0) {
      console.log(`${griffin.name} Mirror X`);
    }
  }

  function attackWitcher(griffin) {
    const damadeWitcher = griffin.str + griffin.weapon - witcher.defense;
    witcher.changeHP(-damadeWitcher);
    console.log(
      `${griffin.name} атаковал ${witcher.name} и получил ${damadeWitcher} урона`
    );
    console.log(`${witcher.name}: ${witcher.hp} HP `);
    if (witcher.hp <= 0) {
      console.log(`${witcher.name} Mirror X`);
    }
  }

  const listenToLutikPhrases = [
    '"Хватит валять дурака, пора уже тушить пожар в этой программе"',
    '"Говорят, грифон никогда не наступит на лежащего ведьмака."',
    '"Когда скромняга бард, отдыхал от дел, с Геральтом из Ривии, он песню эту пел..."',
    '"Трус умирает сто раз. Мужественный человек – лишь однажды."',
    '"Людям для жизни необходимы три вещи: еда, питье и сплетни."',
  ];

  while (griffin.hp > 0 && witcher.hp > 0) {
    let action = parseInt(
      prompt(`что ${witcher.name} будет делать?
			1. Атаковать
			2. Использовать Игни
			3. Слушать Лютика
			4. Убежать`)
    );

    switch (action) {
      case 1:
        if (Math.random() < 0.75) {
          attackGriffon(witcher);
        } else {
          console.log(`${witcher.name} пропустил атаку`);
        }
        break;
      case 2:
        let damage = Math.floor(Math.random() * (200 - 150) + 150);
        griffin.changeHP(-damage);
        console.log(
          `${witcher.name} использован знак Игни, роздан ${damage} урона `
        );
        console.log(`${griffin.name}: ${griffin.hp} HP`);
        break;
      case 3:
        console.log(
          `${witcher.name} ${
            listenToLutikPhrases[
              Math.floor(Math.random() * listenToLutikPhrases.length)
            ]
          }`
        );
        break;
      case 4:
        console.log(`${witcher.name} убежал.`);
        console.log(`Witcher HP: ${witcher.hp}`);
        console.log(`Griffin HP: ${griffin.hp}`);
        return;
      default:
        console.log("Неверное действие, пожалуйста, выберите еще раз");
    }

    if (Math.random() < 0.5) {
      attackWitcher(griffin);
    } else {
      console.log(`${griffin.name} не причинил вреда ${witcher.name}`);
    }

    console.log("==============================");
    witcher.getStatus();
  }

  console.log("==============================");
}

battle();
