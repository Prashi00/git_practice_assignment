let check = 1;
    for(let i = 2;i<=num-1;i++){
        if(num%i==0){
            check = 0;
            break;
        }    
        
    }
    if(check==1){
        console.log("Yes");
    }else{
        console.log("No");
    }