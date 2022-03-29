var wall_index = 1;
show_wall(wall_index);

function next_wall(n){
    show_wall(wall_index += n);
}

function current_wall(n){
    show_wall(wall_index = n);
}

function show_wall(n){

    let i;
    let walls = document.getElementsByClassName("wall");
    let dots = document.getElementsByClassName("dot");

    if (n > walls.length){
        wall_index = 1;
    }

    if (n < 1){
        wall_index = walls.length;
    }

    for(i = 0; i < walls.length; i++){
        walls[i].style.display = "none";
    }

    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(" black", " text");
    }

    walls[wall_index-1].style.display = "flex";
    dots[wall_index-1].className = dots[wall_index-1].className.replace(" text", " black")
}