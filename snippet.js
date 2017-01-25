//function call for update_color(), starting with arbitrary hex color #52beb5
update_color("#52beb5", 10000, 10000);

//function definition for update_color();
function update_color(color, cycle_time, wait_time) {
    setInterval(function first_color() {
        document.body.style.backgroundColor = color;
        setTimeout(change_color, wait_time);
    }, cycle_time);


    //nested function definition for change_color()
    function change_color() {
        document.body.style.backgroundColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    }
};
