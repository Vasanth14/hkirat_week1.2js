function printEvenNum() {
    let numbersCont = [0,1,2,3,4,5,6];

    for(let i=0; i<numbersCont.length;i++){
        if(numbersCont[i] % 2 == 0){
            console.log(numbersCont[i]);
        }
    }
}

printEvenNum() 