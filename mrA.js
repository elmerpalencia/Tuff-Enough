
                
const save =() => {
    //get data from input box
    var new_data = document.getElementById('input').value;
    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('exerciseLogs') == null){
        localStorage.setItem('exerciseLogs', '[]');
    }

    //get old data and put it into new data
    var old_data = JSON.parse(localStorage.getItem('exerciseLogs'));
    old_data.push(new_data);

    //save everything
    localStorage.setItem('exerciseLogs', JSON.stringify(old_data));

}



function view(){
    // if there is indeed data then continue
    if(localStorage.getItem('exerciseLogs') != null){
        document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('exerciseLogs'));
    }
}

console.log("between view and clear");

const clear = () => {
    console.log("Inside clear");

    localStorage.clear();
    
    if(localStorage.getItem('exerciseLogs') != null){
        document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('exerciseLogs'));
    }
}

console.log("after clear func");


