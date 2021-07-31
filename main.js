
var HTMLstring = "";
for(var i=0; i<8; i++){
    HTMLstring += '<img src="github.png" alt="github">'
}
HTMLstring += '<button>Restore</button'

$(document).ready(function(){
    $(".wrapper").append(HTMLstring)
    $("img").click(function(){
        $(this).hide("slow");
    })

    $("button").click(function(){
        $("img").show();
    })
})




