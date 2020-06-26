
function Get_num(num){

    var result = document.getElementById("input");
    result.value += num;
}

function Clear_data(){

    var result = document.getElementById("input")
    result.value = "";
}

function Get_result(){

    var result = document.getElementById("input");
    result.value = eval(result.value);
}