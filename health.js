function sethealth ()
{

    var cal = 0;
    cal = $('#healthBar').width();
    if(cal > 40)
    {
        cal = cal - (0.2*200);
        $('#healthBar').css('width', cal+'px');
        return true;
    }
    else{
        $('#healthBar').css('width','0px') ;
        $('#healthBar').text('');
        return false;
    }
}

// function readhealth ()
// {
//     var cal = 0;
//     cal = $('#healthBar').width();
//     if(cal > 40)
//     {
//         $('#healthBar').css('width', cal+'px');
//         return true;
//     }
//     else{
//         return false;
//     }   
// }