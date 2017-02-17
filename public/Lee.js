let ChefsBored = []
function MenuItem(name , time , allergy='', special='', sametime=''){
        this.name = name;
        this.time = time;
        this.allergy = allergy;
        this.special = special;
        this.sametime = sametime;
        
}
function Menu2(name ,time){
    this.menu = [];
    this.newitem = function(name , time ){
            const NewEntry = new MenuItem(name ,time);
            this.menu.push(NewEntry);
            return this;
    }
};

let LeeMenu = new Menu2();
let slaw = LeeMenu.newitem('Slaw', 2 );
let springrolls = LeeMenu.newitem('Springrolls' , 5 );
let cod = LeeMenu.newitem('Black-Cod' , 15 );
let curry = LeeMenu.newitem('Chicken-Curry' , 20 );
let charsu = LeeMenu.newitem('Char-Su', 20)
let beef = LeeMenu.newitem('Braised-Beef' ,20 );
let shrimp = LeeMenu.newitem('Garlic-Shrimp' , 25 );
let letteccups = LeeMenu.newitem('Lettec-Cups' , 10);
let lamb = LeeMenu.newitem('Lamb'  , 30);
let striploin = LeeMenu.newitem('Striploin' , 40);
let chanfun = LeeMenu.newitem('Chung-Fun' , 20);

let FoodMenu = LeeMenu.menu;

let Slaw = FoodMenu[0];
let Springrolls = FoodMenu[1];
let Cod = FoodMenu[2];
let ChickenCurry = FoodMenu[3];
let CharSu = FoodMenu[4];
let BraisedBeef = FoodMenu[5];
let GarlicShrimp = FoodMenu[6];
let LettesCups = FoodMenu[7];
let Lamb = FoodMenu[8];
let Striploin = FoodMenu[9];
let ChungFun = FoodMenu[10];




function Order(){
    this.ArgumentsArr = [];
    for(let i = 0; i < arguments.length; i++ ){
        this.ArgumentsArr.push(arguments[i])
    }
    // console.log(this.ArgumentsArr);
    ChefsBored.push(this.ArgumentsArr);
    Timing(this.ArgumentsArr);
}

function Timing(ArgumentsArr){
    if(isNaN(ArgumentsArr[0])){
        cock(ArgumentsArr[0],ArgumentsArr)
        ArgumentsArr = ArgumentsArr.slice(1);
        if(ArgumentsArr.length > 1 ){
            Timing(ArgumentsArr)
        }
    }else if (isNaN(ArgumentsArr[0]) === false){
        setTimeout(function(){
            // console.log((ArgumentsArr[0] - ArgumentsArr[1].time) +' seconds passed')
            ArgumentsArr = ArgumentsArr.slice(1)
            if(ArgumentsArr.length > 1){
                Timing(ArgumentsArr);
            }
        }, ((ArgumentsArr[0]) - ArgumentsArr[1].time)*1000)
    }else{console.log('This shouldnt log')}
}

function cock(menuitem , ArgumentsArr){
    console.log('Fire '+ menuitem.name+' for table '+ ArgumentsArr[ArgumentsArr.length-1])
    setTimeout(function(){
    console.log(menuitem.name + ' is ready! PICK UP to table '+ ArgumentsArr[ArgumentsArr.length-1]) }, (menuitem.time)*1000);
};

// install axios
// make post request to server
// send whatever data you need in post request to server