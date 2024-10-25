const state = {

    view:{
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },
    valeus:{
        timerId: null,
        countDownTimerId: setInterval(countDown, 1000),
        gameVelocity: 500,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },

    actions:{

    }
};

function countDown(){
    state.valeus.curretTime--;
    state.view.timeLeft.textContent = state.valeus.curretTime;

    if(state.valeus.curretTime <= 0 ){
        alert("Game Over! O seu resultado foi:" + state.valeus.result);
        clearInterval(state.valeus.countDownTimerId);
        clearInterval(state.valeus.timerId);
        

    }
}

function randomSquare(){
    state.view.squares.forEach((square)=>{
        square.classList.remove("enemy");
    })


    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.valeus.hitPosition = randomSquare.id;

}

function moveEnemy(){
    state.valeus.timerId = setInterval(randomSquare, state.valeus.gameVelocity);
}

function addListenerHitBox(){
    state.view.squares.forEach((square)=>{
        square.addEventListener("mousedown",()=>{
           if(square.id === state.valeus.hitPosition){
            state.valeus.result++;
            state.view.score.textContent = state.valeus.result;
            state.valeus.hitPosition = null;
           }

        });
    });

}

function initalize(){
    moveEnemy();
    addListenerHitBox()

    
}

initalize();