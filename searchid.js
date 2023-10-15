let admin = [
    {
        name: 'manoj',
        id: 1
    },

    {
        name: 'amulya',
        id: 2
    },

    {
        name: 'manish',
        id: 3
    },

    {
        name: 'Rohit',
        id: 4
    }
]

function SearchId(){
  const k = document.getElementById("searchInput").value
// console.log();

const result = admin.find(admin=>{
    return admin.id==k;
});
console.log(result);
// document.write(JSON.stringify(result));
document.getElementById("Name").innerHTML=result.name
document.getElementById("userId").innerHTML=result.id
}


