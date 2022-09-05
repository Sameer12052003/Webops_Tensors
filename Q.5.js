/* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */
/* Write your code here.*/
let array = [];
function sorting(people) {
    for( i=1; i<Object.keys(people).length; i++){ 
        
        for(let j =i+1;j<=Object.keys(people).length; j++){
         if (people[i].age > people[j].age) {
             
             temp =people[i].age;
             people[i].age = people[j].age;
             people[j].age = temp;
            
             temp =people[i].name;  /*swiping names along with numbers*/
             people[i].name = people[j].name;
             people[j].name = temp;
             
        }        
     }

}
    let array = [] ;
    for(k=0; k<Object.keys(people).length;k++) {
         array[k] = people[k+1].name;
    }
     return array;
}

 

/* You need to log the array of names using console.log().*/
console.log(sorting(people));

