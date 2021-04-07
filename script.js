// Starting jQuery
$(function(){ 



    

    // Imported Code ================================
    $.fn.enterKey = function (fnc) {
        return this.each(function () {
            $(this).keypress(function (ev) {
                var keycode = (ev.keyCode ? ev.keyCode : ev.which);
                if (keycode == '13') {
                    fnc.call(this, ev);
                }
            })
        })
    }
// ==============================================



var count=0;



    $('#add').on('click',function(){
        
        if($('#task').val() == ""){
            $('#task').css({
                'border-color':'red',
                'background-color':'red',
                'color':'white'
            });
        }else{
            count++;
            var donga = $('#task').val();
            $('#myList').append("<li id="+count+" onclick='removeTask("+count+")' >"+donga+"</li>");
            
            $('#task').val("");
        }

        
    });






    $("#task").enterKey(function () {

        if($('#task').val() == ""){
            alert('please enter some task')
        }else{
            count++;
            var donga = $('#task').val();
            $('#myList').append("<li id="+count+" onclick='removeTask("+count+")' >"+donga+"</li>");
            
            $('#task').val("");
        }
    })








    $('#reset').on('click',function(){
        $('#myList').empty();
    })




    // colorize button
    $('#colorize').on('click',function(){
        $('#heading').toggleClass('red');
    });




    // $('#viewLink').on('click',function(){
    //     alert($(this).attr('href'));
        
    // })

    // $('#change').on('click',function(){
    //    $('#viewLink').attr('href','google.com');
        
    // })









}); //Ends jQuery
