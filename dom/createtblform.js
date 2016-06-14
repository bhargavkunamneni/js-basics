function getEmployeeDetails(){
  var employess=[{
    id:100,
    name:"balaram",
    salary:20000,
    department:"gis"},
    {
      id:101,
    name:"surendra",
    salary:50000,
    department:"oracle apps" 
    },
    {
       id:102,
    name:"ashok",
    salary:20000,
    department:"dba"
    },];
  return employess;
}
function getTbl(){
  var tblContent=document.getElementById("tbl");
  return tblContent;
}
function createRow(){
  var row= document.createElement("tr");
  return row;
  
}
function createColumn(data){
  var column=document.createElement("td");
  column.innerHTML=data;
  return column;
}
function buildEmpData(){
  var empData = getEmployeeDetails();
  for(var i=0;i<empData.length;i++){
    var row=createRow();
    var id= empData[i].id;
    var name= empData[i].name;
    var salary= empData[i].salary;
    var department= empData[i].department;
    
    var idColumn=createColumn(id);
    var nameColumn=createColumn(name);
    var salaryColumn=createColumn(salary);
    var departmentColumn=createColumn(department);
    
    row.appendChild(idColumn);
    row.appendChild(nameColumn);
    row.appendChild(salaryColumn);
    row.appendChild(departmentColumn);
    
    var table=getTbl();
    table.appendChild(row);
    
  }
}
buildEmpData();