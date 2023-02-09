function expand(p) {
    if(p.className == 'project-selected'){
        p.className = "project";
    }
    else{
        var i, x;
        x = document.getElementsByClassName("project-selected");
        console.log(x);
        for (i = 0; i < x.length; i++) {  
        x[i].className = "project";
        }
        p.className = "project-selected";   
    }
}

function vert_expand(p) {
    if(p.className == 'vproject-selected'){
        p.className = "project";
    }
    else{
        var i, x;
        x = document.getElementsByClassName("vproject-selected");
        console.log(x);
        for (i = 0; i < x.length; i++) {  
        x[i].className = "project";
        }
        p.className = "vproject-selected";   
    }
}