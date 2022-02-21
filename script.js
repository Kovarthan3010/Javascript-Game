function instruction()
{
    alert("1.You can find the stone ,paper and scissor images on left side.\n2.If you move your mouse over any image ,it will be highlighted.\n3.Click on the image which you want.\n4.Image you selected will be picked for that chance on right side.\n5.Score will be calculated and displayed on top.\n6.Best of three will be the winner.\n7.Stone has higher precedence,if stone and scissor are played.\n8.Paper has higher precedence,if paper and stone are played.\n9.Scissor has higher precedence ,if paper and scissor are played.")
}
var inre;
function change_inp(inre,amount)
{
    
    document.getElementById("your_inp").src=inre;
    computer_change(amount);
}
function computer_change(amount)
{
    var answer=(Math.floor((Math.random() * 10) + 1))%3;
    if(answer==0)
    {
        document.getElementById("comp_inp").src="./assets/stone.jpg";
        score_inp(1,amount);
    }
    else if(answer==1)
    {
        document.getElementById("comp_inp").src="./assets/paper.jpg";  
        score_inp(2,amount);
    }
    else
    {
        document.getElementById("comp_inp").src="./assets/scissor.jpg";
        score_inp(3,amount);
    }
    
}
let playerscore=0;
let computerscore=0;
function score_inp(disp,amount)
{
    
    if(disp==amount)
    {
    
        playerscore=playerscore;
        computerscore=computerscore;
    document.getElementById("y_score").innerHTML=playerscore;
    document.getElementById("c_score").innerHTML=computerscore;
    }
    else if(amount==1)
    {
        
        if(disp==2)
        {
            
            computerscore++;
        document.getElementById("c_score").innerHTML=computerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }
        if(disp==3)
        {
            
            playerscore++;
        document.getElementById("y_score").innerHTML=playerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }

    }
    else if(amount==2)
    {
        
        if(disp==3)
        {
            
            computerscore++;
        document.getElementById("c_score").innerHTML=computerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }
        if(disp==1)
        {
            
            playerscore++;
        document.getElementById("y_score").innerHTML=playerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }
    }
    else
    {
        if(disp==1)
        {
            
            computerscore++;
        document.getElementById("c_score").innerHTML=computerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }
        if(disp==2)
        {
            
            playerscore++;
        document.getElementById("y_score").innerHTML=playerscore;
        if(playerscore==3 || computerscore==3)
    {
        if(computerscore>playerscore)
        {
            alert("Computer Won!!!!!");
            document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
        else
        {
        alert("Great!!!\nYou Won");
        document.getElementById("y_score").innerHTML=0;
    document.getElementById("c_score").innerHTML=0;
        }
         playerscore=0;
         computerscore=0;
    }
        }
    }
    
}
