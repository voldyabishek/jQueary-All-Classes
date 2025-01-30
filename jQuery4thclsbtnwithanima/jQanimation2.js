$(document).ready(function () {
    // 1. Show the box
    $('#show').click(function () {
        $('#box').fadeIn(1000);
    });

    // 2.hide the box
    $('#hide').click(function () {
        $('#box').fadeOut(2000);
    });

    //  3.toggle box
    $('#toggle').click(function () {
        $('#box').fadeToggle(1000);
    });

    // 4.animate the box
    $('#animate').click(function () {
        $('#box').animate(
            {
                left: "+=100px"//reverse pantrthuku "-=100px"
            }
            , 1000);
    });

    // 5.fade the box
    $('#fade').click(function () {
        $('#box').fadeTo(1000, 0.3);//1000-->1second,0.3-->opacity visiblity (0.1-1) range
    });

    //6.slide the box
    $('#slide').click(function() {
        $('#box').slideDown();
    });

    
//7.add item
 $('#addItem').click(function() {
    $('#itemContainer').append('<div class="item">New Item</div>');  //apend mean(add)pantrathu
 });

//8.remove item
$('#removeItem').click(function(){
    $('#itemContainer .item:last').remove();
});

//9.chnage css
$('#cssChange').click(function() {
    $('#box').css
    ({
        'background-color':'yellow',
        'border':'5px solid red',

    });
});

//10.change text of the meassage

 $('#textChange').click(function(){
    $('#message').text('Text Has Been changed');
 });

 //11.change input  value
     $('#inputChange').click(function(){
        $('#inputData').val('Changed Input');
     });

//12.clear input field
   $('#inputClear').click(function(){
    $('#inputData').val('');
   });


//13.clone the box
$('#Clone').click(function(){
    $('#box').clone().appendTo('#itemContainer').fadeIn();
});

//14.Detach the box
 $('#Detach').click(function(){
    $('#box').detach();
 });

 //15.append Item
  $('#Append').click(function(){
    $('#itemContainer').append('<div class="Item">Append Item</div>');
  });

//16/Prepand item
$('#Prepend').click(function(){
    $('#itemContainer').prepend('<div class="Item">Prepand Item</div>');

});

//17.reset animation
$('#AnimationReset').click(function(){
    $('#box').stop(true,true).css({left:'0',opacity:'1'});
});

//18.Handle form Submission(html la ulla input form la kudukura data va mela show pana vaikirathu)
 $('#dataForm').on('submit',function(e){
    e.preventDefault();
    const inputData = $('#inputData').val();
    $('#message').text(`you entered:${inputData}`);
    $('#inputData').val('');
 });

 
//19.Ajax request to fetch random user data
  $('#FetchData').click(function(){
    $.ajax(
        {
            url: 'https://jsonplaceholder.typicode.com/users/1',
            method: 'GET',
            success:function(data){
                $('#message').text(`Name:${data.name},Email:${data.email}`);
            },
            error:function(){
                $('#message').text('Faild to fetch data');
            }
        }
    )
  })
});