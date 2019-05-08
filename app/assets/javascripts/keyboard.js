function consoleprint() {
	$('.key').click(function(){
		console.log($(this).text());
	});
}

$(document).ready(function(){
	consoleprint();
	Hide();
	Show();
 
});

class KeyboardController {
    constructor(id) {
        this.id = id;
    }

    greet() {
        return `${this.name} says hello.`;
    }
};

function Hide(){
  $("#hide").click(function(){
	$(".key").hide();
  });
};
function Show(){
  $("#show").click(function(){
	$(".key").show();
  });
};