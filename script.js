/* virtual pet */

let vpetname=prompt("Name your pet!")
let energy=0;
let happiness=0;
for(i=0;i<6;i++)
{
    var useranswer=prompt(" Would you like to feed, pet or walk?");
        if (useranswer =="feed") 
          {
              energy=energy+2;
          }
       else if (useranswer=="pet")
           {
            happiness=happiness+1;
            }
        else if (useranswer=="walk")
         {
             if (energy==0) {
             alert (" Not enough energy to enjoy a walk");
             
                energy=energy;  
                happiness=happiness;    
                            }
                            else
                             {
            happiness=happiness+2;
         energy=energy-1;}
         
        } }
         console.log("your pet Name: " +vpetname);
         console.log(" happiness:" +happiness +  "   energy:" + energy );
        vpetanswer=console.log("" +vpetname +" has " +happiness +" happiness and "+ energy + " energy");
            
  