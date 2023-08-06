function readText(input){

    let index = 0;

    let string = input[0];
    index++;

    while(true){
        if(string === "Stop"){
            break;
        }
        console.log(string);

        string = input[index];
        index++;
    }
}

readText(["Nakov",
"SoftUni",
"Sofia",
"Bulgaria",
"SomeText",
"Stop",
"AfterStop",
"Europe",
"HelloWorld"])