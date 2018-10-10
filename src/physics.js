import { Engine, Body, Render, Runner, MouseConstraint, Mouse, World, Bodies } from "matter-js";

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

function getEmoji() {
    const closeToCenter = window.outerWidth / 3 + Math.floor(Math.random() * 20);
    let body = Bodies.circle(closeToCenter, 0, 50, {
        render: {
            strokeStyle: '#ffffff',
            sprite: {
                texture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Noto_Emoji_KitKat_263a.svg/128px-Noto_Emoji_KitKat_263a.svg.png'
            }
        }
    });

    body.restitution = 0.9;

    return body;
}

document.body.onkeydown = function(event){
    event = event || window.event;
    let keycode = event.charCode || event.keyCode;

    if(keycode === 13){
        World.add(world, getEmoji());
    }

    if(keycode === 8){
        World.clear(world, true);
    }
};

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