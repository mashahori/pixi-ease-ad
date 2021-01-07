// import { setup } from "./setup.js";

let app = new PIXI.Application({ width: 1390, height: 640 });
document.body.appendChild(app.view);
PIXI.loader
  .add([
    "images/back.png",
    "images/dec_1.png",
    "images/old_stair.png",
    "images/logo.png",
    "images/Austin.png",
    "images/btn.png",
    "images/icon_hammer.png",
    "images/circle.png",
    "images/chosen.png",
    "images/01.png",
    "images/02.png",
    "images/03.png",
    "images/btn_ok.png",
    "images/new_stair_01.png",
    "images/new_stair_02.png",
    "images/new_stair_03.png",
    "images/dec_2.png",
    "images/final.png",
  ])
  .load(setup);

const ease = new Ease.Ease();

function setup() {
  let back = new PIXI.Sprite(PIXI.loader.resources["images/back.png"].texture);

  let dec_1 = new PIXI.Sprite(
    PIXI.loader.resources["images/dec_1.png"].texture
  );
  dec_1.x = 1132;
  dec_1.y = 438;

  let dec_2 = new PIXI.Sprite(
    PIXI.loader.resources["images/dec_2.png"].texture
  );
  dec_2.x = 87;

  let old_stair = new PIXI.Sprite(
    PIXI.loader.resources["images/old_stair.png"].texture
  );
  old_stair.x = 833;
  old_stair.y = 54;

  let logo = new PIXI.Sprite(PIXI.loader.resources["images/logo.png"].texture);
  logo.x = 32;
  logo.y = 5;

  let austin = new PIXI.Sprite(
    PIXI.loader.resources["images/Austin.png"].texture
  );
  austin.x = 696;
  austin.y = 113;

  let btn = new PIXI.Sprite(PIXI.loader.resources["images/btn.png"].texture);
  btn.x = 680;
  btn.y = 560;

  let count = 0;
  app.ticker.add(() => {
    count += 0.05;
    btn.anchor.set(0.5);
    btn.scale.x = 0.7 + Math.sin(count) * 0.09;
    btn.scale.y = 0.7 + Math.sin(count) * 0.09;
  });

  let hammer = new PIXI.Sprite(
    PIXI.loader.resources["images/icon_hammer.png"].texture
  );
  hammer.x = 1087;
  hammer.y = 258;
  hammer.interactive = true;
  hammer.buttonMode = true;
  hammer.on("pointerdown", () => showMenu());
  ease.add(hammer, { shake: 3 }, { repeat: true });

  let final = new PIXI.Sprite(
    PIXI.loader.resources["images/final.png"].texture
  );
  final.visible = false;
  final.height = 0;

  let stair_1 = new PIXI.Sprite(
    PIXI.loader.resources["images/new_stair_01.png"].texture
  );
  stair_1.visible = false;
  stair_1.x = 908;
  stair_1.y = -100;

  let stair_2 = new PIXI.Sprite(
    PIXI.loader.resources["images/new_stair_02.png"].texture
  );
  stair_2.visible = false;
  stair_2.x = 908;
  stair_2.y = -100;

  let stair_3 = new PIXI.Sprite(
    PIXI.loader.resources["images/new_stair_03.png"].texture
  );
  stair_3.visible = false;
  stair_3.x = 908;
  stair_3.y = -100;

  app.stage.addChild(
    back,
    dec_1,
    dec_2,
    old_stair,
    logo,
    austin,
    btn,
    stair_1,
    stair_2,
    stair_3,
    final
  );
  setTimeout(() => app.stage.addChild(hammer), 2000);

  let circle_1 = new PIXI.Sprite(
    PIXI.loader.resources["images/circle.png"].texture
  );
  circle_1.x = 910;
  circle_1.y = 100;
  circle_1.height = 0;
  circle_1.width = 0;
  circle_1.anchor.set(0.5);
  circle_1.interactive = true;
  circle_1.buttonMode = true;
  circle_1.on("pointerdown", () => showActive(910, 1));

  let circle_2 = new PIXI.Sprite(
    PIXI.loader.resources["images/circle.png"].texture
  );
  circle_2.x = 1040;
  circle_2.y = 100;
  circle_2.anchor.set(0.5);
  circle_2.height = 0;
  circle_2.width = 0;
  circle_2.interactive = true;
  circle_2.buttonMode = true;
  circle_2.on("pointerdown", () => showActive(1040, 2));

  let circle_3 = new PIXI.Sprite(
    PIXI.loader.resources["images/circle.png"].texture
  );
  circle_3.x = 1170;
  circle_3.y = 100;
  circle_3.height = 0;
  circle_3.width = 0;
  circle_3.anchor.set(0.5);
  circle_3.interactive = true;
  circle_3.buttonMode = true;
  circle_3.on("pointerdown", () => showActive(1170, 3));

  let menu_stair_1 = new PIXI.Sprite(
    PIXI.loader.resources["images/01.png"].texture
  );
  menu_stair_1.x = 869;
  menu_stair_1.y = 28;
  menu_stair_1.visible = false;

  let menu_stair_2 = new PIXI.Sprite(
    PIXI.loader.resources["images/02.png"].texture
  );
  menu_stair_2.x = 1000;
  menu_stair_2.y = 28;
  menu_stair_2.visible = false;

  let menu_stair_3 = new PIXI.Sprite(
    PIXI.loader.resources["images/03.png"].texture
  );
  menu_stair_3.x = 1124;
  menu_stair_3.y = 36;
  menu_stair_3.visible = false;

  let btn_ok = new PIXI.Sprite(
    PIXI.loader.resources["images/btn_ok.png"].texture
  );
  btn_ok.visible = false;
  btn_ok.y = 145;
  btn_ok.interactive = true;
  btn_ok.buttonMode = true;
  btn_ok.on("pointerdown", () => showFinal());

  let chosen = new PIXI.Sprite(
    PIXI.loader.resources["images/chosen.png"].texture
  );
  chosen.y = 95;
  chosen.visible = false;
  ease.add(
    chosen,
    { alpha: 0 },
    { reverse: true, duration: 500, repeat: true }
  );

  let menu = new PIXI.Container();

  const showFinal = () => {
    menu.visible = false;
    ease.add(final, { height: 640 }, { duration: 1000 });
    final.visible = true;
  };

  const showMenu = () => {
    app.stage.addChild(menu);
    ease.add(circle_1, { width: 140, height: 140 }, { duration: 1000 });
    ease.add(circle_2, { width: 140, height: 140 }, { duration: 1000 });
    ease.add(circle_3, { width: 140, height: 140 }, { duration: 1000 });
    setTimeout(() => {
      menu_stair_1.visible = true;
      menu_stair_2.visible = true;
      menu_stair_3.visible = true;
    }, 900);
    hammer.visible = false;
  };

  const showActive = (position, number) => {
    stair_1.visible = false;
    stair_2.visible = false;
    stair_3.visible = false;
    stair_1.y = -1000;
    stair_2.y = -1000;
    stair_3.y = -1000;
    chosen.anchor.set(0.5);
    chosen.x = position;
    btn_ok.x = position - 70;
    chosen.visible = true;
    btn_ok.visible = true;

    switch (number) {
      case 1: {
        ease.add(stair_1, { position: { x: 908, y: 20 } }, { duration: 1000 });
        ease.add(stair_1, { alpha: 0 }, { reverse: true, duration: 500 });
        stair_1.visible = true;
        break;
      }
      case 2: {
        ease.add(stair_2, { position: { x: 908, y: 20 } }, { duration: 1000 });
        ease.add(stair_2, { alpha: 0 }, { reverse: true, duration: 500 });
        stair_2.visible = true;
        break;
      }
      case 3: {
        ease.add(
          stair_3,
          { alpha: 1, position: { x: 908, y: 10 } },
          { duration: 1000 }
        );
        ease.add(stair_3, { alpha: 0 }, { reverse: true, duration: 500 });
        stair_3.visible = true;
        break;
      }
    }
  };

  menu.addChild(
    circle_1,
    circle_2,
    circle_3,
    chosen,
    menu_stair_1,
    menu_stair_2,
    menu_stair_3,
    btn_ok
  );
}
