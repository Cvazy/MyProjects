$(document).ready(function () {


    $(".form-control").keyup(function(){
        var input = $(this).val();
        if(input != ""){
            $.ajax({
                url: 'search',
                type: "POST",
                data: {input: input} ,

                success:function(data){
                    $("#searchresult").html(data);
                }

            });

        }
    });



});

















