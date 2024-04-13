

const element = document.getElementById('center');
let percent = 0;
function increaseXP() {
    //get data from input box
    percent += 10;             
    document.getElementById('center').style.width = percent + "%";             
    if(percent === 110){               
        alert("Congrats! You have leveled up.")
        window.location.href = "BGP.html"; }
    

    var new_data = document.getElementById('input').value;
    var new_data = document.getElementById('input').value;
    //if there is nothing saved at the start then save an empty array
    if(localStorage.getItem('exerciseLogs') == null){
        localStorage.setItem('exerciseLogs', '[]');
    }

    //get old data and put it into new data
    var old_data = JSON.parse(localStorage.getItem('exerciseLogs'));
    if(new_data){
    old_data.push(new_data);
    }
    //save everything
    localStorage.setItem('exerciseLogs', JSON.stringify(old_data));

    document.getElementById("input").value = '';

}



function view(){
    // if there is indeed data then continue
    if(localStorage.getItem('exerciseLogs') != null){
        document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('exerciseLogs'));
    }
}

const clearExercise = () => {
    console.log("Inside clear");

    localStorage.setItem('exerciseLogs', '[]');
    view();
    
    // if(localStorage.getItem('exerciseLogs') != null){
    //     document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('exerciseLogs'));
    // }
}



