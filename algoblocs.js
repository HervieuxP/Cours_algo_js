/*
setPos(300,300);
setLineWidth(10);
changeColor(color.red);

// level A1 
faceDown();
forward(200);
faceRight();
forward(100);


// initalisation A2

setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);

faceLeft();
forward(100);
faceDown();
forward(100);
faceRight();
forward(200);
faceUp();
forward(200);

//initialasition A3
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);

faceLeft();
forward(100);
faceRight();
forward(200);
faceLeft();
forward(100);
faceUp();
forward(100);
faceDown();
forward(200);

//initialisation a4

setPos(100,500);
setLineWidth(10);
changeColor(color.green);
faceRight();
forward(100);
arcLeft(50,180);
forward(50);
arcRight(50,180);
forward(100);

//initialisation A5

setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceLeft();
arcRight(100,360);
arcRight(50,180);
arcLeft(50,180);

//initialisation a6

setPos(300,300);
setLineWidth(10);
changeColor(color.blue);
faceUp();
forward(50);
up();
forward(50);
down();
forward(100);

// init a7
setPos(150,200);
setLineWidth(10);
changeColor(color.green);
faceDown();
forward(100);
arcLeft(50,180);
forward(50,180);
up();
forward(50);
down();
forward(100);
arcLeft(50,180);
forward(50);

//init a8
setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceUp();
forward(50);
faceRight();
forward(100)
faceDown();
forward(200);
faceLeft();
forward(50);
up();
forward(50);
faceUp();
down();
forward(100);


//init a9

setPos(300,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();
arcLeft(50,180);
arcRight(50,180);
forward(200);
arcRight(50,180);
arcLeft(50,180);
faceLeft();
forward(200);

// init a10

setPos(300,300);
setLineWidth(10);
faceRight();
changeColor(color.red);
arcLeft(50,180);
changeColor(color.green);
arcLeft(100,180);
changeColor(color.yellow);
arcLeft(200,180);

//init b1
setPos(300,300);
setLineWidth(10);
changeColor(color.green);
faceRight();
for (let i=0;i<4;i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();
}

//init b1

setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceUp();
for(let i=0;i<4;i++){
    forward(50);
    faceRight();
    forward(50);
    faceDown();
    forward(50);
    faceRight();
    forward(50);
    faceUp();
}

//init b2
setPos(100,300);
setLineWidth(10);
changeColor(color.aqua);
faceLeft();
for(let i=0;i<4;i++){
    forward(50);
    right(90);
}

//init b3
setPos(100,300);
setLineWidth(10);
changeColor(color.blue);
faceLeft();
for(let i=0;i<3;i++){
    forward(50);
    right(120);
}


// init b4
setPos(100,300);
setLineWidth(10);
changeColor(color.yellow);
faceUp();
forward(100);
changeColor(color.red);
for(let i=0;i<3;i++){
    forward(50);
    right(120);
}


//init b6
setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
for(let i=0;i<2;i++){
    forward(50);
    faceUp();
    forward(50);
    faceRight();
}
changeColor(color.green);
for(let i=0;i<3;i++){
    forward(50);
    faceDown();
    forward(50);
    faceRight();

}

//init b7
setPos(100,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
for (let i=0;i<3;i++){
    forward(100);
    left(120);
}
for(let i=0;i<4;i++){
    forward(100);
    right(90);
}


//initb8
setPos(100,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();
for(let i=0;i<8;i++){
    forward(200);
    right(135);
}

//init b9
setPos(100,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();
forward(50);
up();
forward(50) ;
down();
for(let i=0;i<3;i++){
    forward(50);
    right(120);
}

//init b10
setPos(300,300);
setLineWidth(10);
changeColor(color.aqua);
for(let i=0;i<8;i++){
    forward(100);
    right(135);
}
faceRight();
up();
forward(200);
down();
changeColor(color.yellow);
for(let i=0;i<8;i++){
    forward(125);
    left(135);
}
up();
right(90);
forward(75);
down();
changeColor(color.fuchsia);
for(let i=0;i<8;i++){
    forward(75);
    right(135);
}


//initb11

setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
for (let i=0;i<4;i++){
    forward(50);
    left(90);
    forward(50);
    right(90);
    forward(50);
    left(90);

}

//initb12
setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceDown();
for(let i=0;i<3;i++){  
    forward(50);
    right(90);
}
faceUp();
up();
forward(50);
down();
changeColor(color.green);
for(let i=0;i<3;i++){
    forward(50);
    right(90); 
}

// init b13
setPos(300,300);
setLineWidth(10);
changeColor(color.green);
faceLeft();
for(let i=0;i<8;i++){
    forward(100);
    left(135);
    forward(50);
    right(90);
    forward(50);
    right(90);
}


//init b14

setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();
forward(50);
right(120);
for(let i=0;i<6;i++){
    forward(100);
    left(120);
    forward(100);
    right(120);
}

//init c1
setPos(100,100);
setLineWidth(10);
changeColor(color.aqua);
faceRight();
for (let i=0;i<4;i++){
    for (let j=0;j<3;j++){
        forward(100);
        right(120);    }
    forward(100);    
}

//init c2
setPos(200,400);
setLineWidth(10);
changeColor(color.fuchsia);
faceUp();
for(let i=0;i<5;i++){
    for (let j=0;j<4;j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down(); 
}

//initc3

setPos(100,400);
setLineWidth(10);
shiftColor(0.25);
faceRight();
for(let i=0;i<3;i++){
    for(let j=0;j<8;j++){
        forward(100);
        left(135);
    }
    up();
    forward(200);
    down();
    shiftColor(0.20)
}


//innit c4

setPos(100,300);
setLineWidth(10);
faceRight();
changeColor(color.red);
for(let i=0;i<5;i++){
    for (let j=0;j<3;j++){
        changeColor(color.red)
        forward(50);
        left(120);
    }
    changeColor(color.yellow);
    for(let h=0;h<4;h++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}


//innit c5
setPos(300,300);
setLineWidth(10);
shiftColor(0);
faceRight();
for(let i=0;i<4;i++) {
    for(let j=0;j<8;j++){
        forward(100);
        left(135); 
    }
    shiftColor(0.25);
    right(90);
} 

// innit c6
setPos(300,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();
for(let i=0;i<4;i++){
    for(let j=0;j<5;j++){
        forward (100);
        left(120);
    }
    right(120);
}

//innitc7

setPos(300,300);
setLineWidth(10);
changeColor(color.red);
for(let i=0;i<8;i++){
    for (let j=0;j<3;j++){
        forward(50);
        right(120);
    }
    forward(50)
    left(45); 
}

//innit c8
setPos(100,500);
setLineWidth(10);
changeColor(color.green);
faceUp();
forward(200);
right(45);
for(let i=0;i<4;i++){
    changeColor(color.red);
    for(let j=0;j<3;j++){
        forward(100);
        right(120);
    }
    changeColor(color.yellow);
    forward(100);
    left(90);
}

//init c9
setPos(400,300);
setLineWidth(1);
faceRight();
for(let i=0;i<3;i++){
    for(let j=0;j<3;j++){
        for(let k=0;k<4;k++){
            right(90);
            forward(50);
        }
        forward(50);
        right(120);
}
left(120);
forward(200);
}


//innit d6
setPos(200,300);
setLineWidth(1);
faceRight();
changeColor(color.aqua);
let longueur=50;
forward(longueur);
faceDown();
longueur=100;
forward(longueur);
faceRight();
longueur=200;
forward(longueur)

//init d-7

setPos(300,300);
setLineWidth(10);
faceUp();
changeColor(color.red);
let longueur=50;
forward (longueur);
faceRight();
forward(longueur);
faceUp();
let longeur=100;
forward(longeur);
faceLeft();
forward(longeur);
faceDown();
let autrelongueur=25;
forward (autrelongueur);

//init d8

setPos(300,300);
setLineWidth(10);
changeColor(color.red);
faceRight();
let longueur=100;
forward(longueur);
faceDown();
forward(longueur);
for(let i=0;i<2;i++){
    faceLeft();
    let demilongueur=(50);
    forward(demilongueur);
    faceUp();
    forward(demilongueur);
}


//initd-9
setPos(300,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();
let longueur=(50);
for(let i=0;i<6;i++){
    forward(longueur);
    longueur+=(50);
    right(120);
}


//init d-10
setPos(100,300);
setLineWidth(10);
changeColor(color.yellow);
faceRight();
let longueur=(50);
for (let i=0;i<10;i++){
    forward(longueur);
    right(90);
    longueur+=(25)
}

//init d-11
setPos(100,100);
setLineWidth(10);
changeColor(color.blue);
faceRight();
let longueur=(125);
for (let i=0;i<5;i++){
    
    for(let j=0;j<3;j++){
        forward(longueur);
        right(120);
}
    forward(longueur);
    longueur+=(-25);}
    

//init d-12
setPos(300,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();
let longueur=(50);
for (let i=0;i<6;i++){
    for(let j=0;j<3;j++){
        forward(longueur);
        left(120);
    }
    forward(longueur);
    left(60);
    longueur+=(50);
}

//init d-13
setPos(300,300);
setLineWidth(10);
changeColor(color.blue);
faceRight();
let radius=(100);
for (let i=0;i<8;i++){
    arcRight(radius,180);
    up();
    radius+=(50);
    forward(100);
    down();
}

//init d-14
setPos(000,400);
setLineWidth(10);
changeColor(color.green);
faceRight();
left(45);
for (let i=0;i<2;i++){
    let length=(25);
    for (let j=0;j<4;j++){
        forward (length);
        right(90);
        forward(length);
        left(90)
        length+=(50);
    }
    left(180);
}


// init d-15
setPos(200,400);
setLineWidth(10);
changeColor(color.red);
faceDown();

let length=(100);
let angle=(90);
for (let i=0;i<10;i++){
    forward(length);
    left(angle);
    angle+=(-5);
    length+=(20);
}


// init d-16

setPos(200,400);
setLineWidth(10);
changeColor(color.green);
faceDown();

forward(100);
right(120);
forward(50);
faceLeft();
for(let i=0;i<3;i++){
    forward(50);
    right(90);
}
left(120);
forward(50);
faceRight();
up();
let radius=50
forward(50);
changeColor(color.red);
down();
for(let j=0;j<3;j++){
    arcRight(radius,180);
    up();
    radius+=25
    arcRight(radius,180);
    radius+=25
    down();
}
*/

//init exo bonus

setPos(300,600);
setLineWidth(1);
faceRight();


let side=3
for(let i=0;i<100;i++){
    for (let j=0;j<side;j++){
        forward(25);
        left(360/side);
    }
    side+=1;
    shiftColor(0.2);
}


