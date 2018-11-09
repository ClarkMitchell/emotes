import { Engine, Body, Render, Runner, MouseConstraint, Mouse, World, Bodies } from "matter-js";

const emotes = {
   81: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/pile-of-poo_1f4a9.png',
   87: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/face-with-tears-of-joy_1f602.png',
   69: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/smiling-face-with-open-mouth-and-smiling-eyes_1f604.png',
   82: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/winking-face_1f609.png',
   84: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/face-savouring-delicious-food_1f60b.png',
   89: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/smiling-face-with-sunglasses_1f60e.png',
   85: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/smiling-face-with-heart-shaped-eyes_1f60d.png',
   73: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/thinking-face_1f914.png',
   79: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/zipper-mouth-face_1f910.png',
   80: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/google/40/confused-face_1f615.png'
}

// create engine
var engine = Engine.create(),
    world = engine.world;

// create renderer
var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: window.outerWidth,
        height: window.outerHeight,
        background: "transparent",
        wireframeBackground: "transparent",
        showAngleIndicator: false,
        wireframes: false
    }
});

Render.run(render);

// create runner
var runner = Runner.create();
Runner.run(runner, engine);

// add bodies
const offset = 10
const options = {
    isStatic: true,
    render: {
        fillStyle: "transparent"
    }
};

world.bodies = [];
world.gravity.scale = 0.003;

// these static walls will not be rendered in this sprites example, see options
World.add(world, [
    Bodies.rectangle(400, -offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(400, 600 + offset, 800.5 + 2 * offset, 50.5, options),
    Bodies.rectangle(800 + offset, 300, 50.5, 600.5 + 2 * offset, options),
    Bodies.rectangle(-offset, 300, 50.5, 600.5 + 2 * offset, options)
]);

function getEmoji(url) {
    const closeToCenter = window.outerWidth / 3 + Math.floor(Math.random() * 20);
    let body = Bodies.circle(closeToCenter, 0, 50, {
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: url
            }
        }
    });

    body.restitution = 0.9;

    return body;
}

let bodies = [];

document.body.onkeydown = function(event){
    event = event || window.event;
    let keycode = event.charCode || event.keyCode;
    let modifier = event.shiftKey;

    if (modifier) {
      renderAnimatedEmotes(keycode);
    } else {
      renderPhysicsEmotes(keycode, World, bodies);
    }
};

function renderPhysicsEmotes(keycode, World, bodies) {
  if(keycode === 8){
    World.clear(world, true);
  } else if (keycode === 46) {
    World.remove(world, bodies.shift());
  } else {
    let body = getEmoji(emotes[keycode]);
    World.add(world, body);
    bodies.push(body);
  }
}

function renderAnimatedEmotes(keycode) {
  let animated = document.querySelectorAll('.animated');
  if (keycode === 16) {
    return;
  } else if (keycode === 46) {
    [].forEach.call(animated, function(el) {
      el.src = emotes[keycode];
      el.classList.add("hidden");
    });
  } else {
    [].forEach.call(animated, function(el) {
      el.src = emotes[keycode];
      el.classList.remove("hidden");
    });
  }
}

// add mouse control
var mouse = Mouse.create(render.canvas),
    mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
            stiffness: 0.2,
            render: {
                visible: false
            }
        }
    });

World.add(world, mouseConstraint);

// keep the mouse in sync with rendering
render.mouse = mouse;

// fit the render viewport to the scene
Render.lookAt(render, {
    min: { x: 0, y: 0 },
    max: { x: 800, y: 600 }
});