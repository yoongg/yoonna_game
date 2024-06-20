var Engine=Matter.Engine,
    Render=Matter.Render,
    Runner=Matter.Runner,
    Bodies=Matter.Bodies,
    World=Matter.World;

// 엔진 선언
const engine=Engine.create();

// 렌더 선언
const render=Render.create({
    engine,
    element:document.body,
    options:{
        wireframes:false,//true면 색적용 안됨
        background:'#F7F4C8',
        width:620,
        height:850,
    }
});
// 월드 선언
const world=engine.world;

// 왼쪽 벽 생성
const leftWall=Bodies.rectangle(15,395,30,790,{
    isStatic: true, // 고정해주는 기능
    render : {fillStyle:'#E6B143'} // 생상 지정
})

const rightWall=Bodies.rectangle(605,395,30,790,{
    isStatic: true, // 고정해주는 기능
    render : {fillStyle:'#E6B143'} // 생상 지정
})
const ground=Bodies.rectangle(310,820,620,60,{
    isStatic: true, // 고정해주는 기능
    render : {fillStyle:'#E6B143'} // 생상 지정
})
const topLine=Bodies.rectangle(310,150,620,2,{
    isStatic: true, // 고정해주는 기능
    render : {fillStyle:'#E6B143'} // 생상 지정
})
// 벽 배치
World.add(world,[leftWall,rightWall,ground,topLine]);

Render.run(render);
Runner.run(engine);


