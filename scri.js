$(document).ready(function (){
  $("#form").submit(function (event){
    userInputs.forEach(function (userInput){

      userInput=$("input:radio[name]:checked").val();
      var userInputs=["input1","input2","input3","input4","input5","input6","input7","input8","input9","input10"];
      input1=$("input:radio[name=js1]:checked").val();
      input2=$("input:radio[name=js2]:checked").val();
      input3=$("input:radio[name=js3]:checked").val();
      input4=$("input:radio[name=js4]:checked").val();
      input5=$("input:radio[name=js5]:checked").val();
      input6=$("input:radio[name=js6]:checked").val();
      input7=$("input:radio[name=js7]:checked").val();
      input8=$("input:radio[name=js8]:checked").val();
      input9=$("input:radio[name=js9]:checked").val();
      input10=$("input:radio[name=js10]:checked").val();

      ansr=$("input:radio[value]:checked").val();
      var ansrs=["ansr1","ansr2","ansr3","ansr4","ansr5","ansr6","ansr7","ansr8","ansr9","ansr10"];
      ansr1=$("input:radio[value=four]:checked").val();
      ansr2=$("input:radio[value=one]:checked").val();
      ansr3=$("input:radio[value=three]:checked").val();
      ansr4=$("input:radio[value=one]:checked").val();
      ansr5=$("input:radio[value=one]:checked").val();
      ansr6=$("input:radio[value=one]:checked").val();
      ansr7=$("input:radio[value=one]:checked").val();
      ansr8=$("input:radio[value=three]:checked").val();
      ansr9=$("input:radio[value=four]:checked").val();
      ansr10=$("input:radio[value=two]:checked").val();

      var pts=0;
      for(var i=0;i<userInputs.length;i++){

      if(ansrs[i]==userInputs[i]){
        pts=pts+1;
      }
      else{
        pts=pts;
      }return pts;}
    });$("#pts").show("pts");

    event.preventDefault();

  });
});
