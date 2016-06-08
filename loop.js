function getCarsList(data){
  if(data=="ciaz"){
    return "it is maruti suzuki";
  }
  else if(data=="c2000"){
    return "it is benz"
  }
  else if(data=="wagonar"){
    return "it is volkswagon";
  }
  else{
    return "not defined";
  }
}
console.log(getCarsList("ciaz"));
console.log(getCarsList("c2000"));
console.log(getCarsList("wagonar"));