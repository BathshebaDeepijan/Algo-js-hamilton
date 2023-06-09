for (let i = 2; i <= 100; i += 2) {
    console.log(i);
  }
  
  let i = 1;
  let nombreExecution = 1;
  while (i <= 99) {
    i += 1;
    nombreExecution += 1;
    console.log("nombre d'execution :" + nombreExecution );
    if (i % 2 === 0){
      console.log(i);
    }
  }