function displaydata(data){
    result.value+=data
    console.log(data);
}

function allclear(){
result.value=""
}

function displayresult(){
    result.value=eval(result.value)
}

function backspace(){
    data=result.value
    result.value=data.slice(0,-1)
}