const allUsers =[{
    firstName: 'Vasanth',
    gender: 'Male'
},
{
    firstName: 'Pradheepa',
    gender: 'Female'
},
{
    firstName: 'Navya',
    gender: 'Female'
}]

for(let i=0; i<allUsers.length;i++){
    if(allUsers[i].gender == 'Female'){
        console.log(allUsers[i].firstName)
    }
}