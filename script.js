function a(){
    var num=document.getElementById("inputbox").value;
    var fact=1;
    if (num==1)
    print("fact is 1");
    else
    for (i=1; i<=num; i++) {
    
    fact=fact*i;
    }
    document.getElementById("output").innerHTML="Output:-The Factorial of "+num+" is "+fact+".";
    }