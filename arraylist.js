let a = [1,2,3,4,40,50,60,600,700]

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

    const k = admin.find(admin=>{
        return admin.id==3;
    });

   document.write(JSON.stringify(k));
   console.log(k);



//a.pop()
//a.push(800)

//console.log (a)


// let m = a.filter(a=>{
//     return a>50
// })

// console.log (m);


// let m = a.find(a=>{
//     return a==50
// })


// console.log (m);
    
a.forEach(a=>{
    console.log(a);
})