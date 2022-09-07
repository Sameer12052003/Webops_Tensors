fetch('Task.json')
 .then(response =>{
    return response.json();//converted to object
})
 .then(obj=>{
    console.log(obj);
    
    let array ="";
   (obj.results).map((values)=> {
    array +=  `<div class="card">
    <img src ="https://media.istockphoto.com/vectors/user-avatar-profile-icon-black-vector-illustration-vector-id1209654046?k=20&m=1209654046&s=612x612&w=0&h=Atw7VdjWG8KgyST8AXXJdmBkzn0lvgqyWod9vTb2XoE=" class = "img">    
    <h1 class="name">Name : ${values.name}</h1>
    <p class = "height"> Height :${values.height}</p>
    <p class="mass"> Mass : ${values.mass}</p>
    <p class="birthYear"> Birth year : ${values.birth_year}</p>
    <p class ="gender"> Gender : ${values.gender}</p>
    </div>`  
    
   })
   document.getElementById('cards').innerHTML = array;
})
  .catch(error=>{   
    console.log(error);
  })
  