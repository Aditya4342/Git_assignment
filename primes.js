 let num=13;
count = true;
  if (num==0 || num == 1) {
    count = false;
  }
  if(num<0){
      count=false;
  }

  for (let i = 2; i <= num/2; i++)
  {
    if (num % i == 0) {
      count = false;
      break;
    }
  }
    if (count)
   {console.log("Prime");}
  else
   {console.log("Not a Prime");}
