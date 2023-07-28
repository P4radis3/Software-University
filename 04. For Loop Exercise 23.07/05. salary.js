function salary(input){

    let openTabs = input[0];
    let salary = Number(input[1]);

    for(let i = 2; i < input.length; i++){

        let currentTabs = input[i];

        switch(currentTabs){

            case 'Facebook': salary -= 150; break;
            case 'Instagram': salary -= 100; break;
            case 'Reddit': salary -= 50; break; 

        }

        if (salary <= 0){
            console.log('You have lost your salary.');
            break;
        }
    }

    if (salary > 0)
    console.log(salary);

}










salary(["10",
"750",
"Facebook",
"Dev.bg",
"Instagram",
"Facebook",
"Reddit",
"Facebook",
"Facebook"])



