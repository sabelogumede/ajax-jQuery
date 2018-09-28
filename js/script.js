$(document).ready(function(){
    // my code here

// selecting by tag (h1, p, div, )--------

// selecting by #id ----------
    // $('#container').text('Hello Sabelo');
    // $('#container').html('<strong>Hello Sabelo</strong>');

// selecting by .class ----------
    // $('.class1').text('Hello Sabelo');


// select "multiple elements" -------------------------------
    // $('.class1, .class2').addClass('highligted');

// selecting descendants ---nested---"child inside a parent"
    // $('#listing li').addClass('highligted');
    // $('#listing > li').addClass('highligted');

// --------------------form-----------------------------

// selecting atributes
    // $('input[required]').addClass('highligted');
    // $('input[placeholder=Email]').addClass('highligted');
    // $('input[placeholder*=Name]').addClass('highligted');

// --------------------CSS selectors-----------------------
    // var result = $('#animals .creature');
    // console.log(result);

//select direct decendent 
    // var result = $('#animals > .creature');
    // console.log(result);

// --------------------dom traversing (more efficient)----------------------------
    // result = $('#animals').find('.creature');
    // console.log(result);

//select direct decendent 
    // result = $('#animals').children('.creature');
    // console.log(result)

// first(), last()
    // var result = $('#animals').children().first().children('.creature').last();
    // console.log(result);

// prev()
    // result = $('#animals').children().first().children().last().prev();
    // console.log(result);

// next()
    // result = $('#animals').children().first().children('.creature').first().next();
    // console.log(result);

// traversing Parent Elements--from Child --> Parent------

// parent()
    // var result = $('#cat').parent();
    // console.log(result);

// parents()
    // result = $('#cat').parents();
    // console.log(result);

    // result = $('#cat').parents('.category');
    // console.log(result);

// closest()
    // result = $('#cat').closest('.category');
    // console.log(result);



// ---------------------------------------------Events!!!-------------------------------------------------------

// click event
    // $('#example').on('click', function(){
    //     // console.log(this);
    //     // console.log($(this));

    //     // $(this).addClass('highlighted');
    //     $(this).toggleClass('highlighted');
    // });

// event delegation
    // $('#example').on('click', 'button.switch', function() {
    //     console.log($(this));
    
    //     $(this).parent().toggleClass('highlighted');

    // });


// ------------------Event Listerning--- using delegation

    // $('#example').on('click', 'button', function(){
    //     var selected = $('#place option:selected');
    //     var value = selected.val();
    //     // var price = selected.attr('data-price');
    //     var price = selected.data('price');

    //     console.log(value);
    //     console.log(price);
    //     console.log(selected.attr('data-price'));

        
    //     if(price) {
    //         $('#result').html(value + ' ' +price);
    //     }

    // });


// ------------------Change event --- event delegation

/* "event delegation" is mostly useful when elements get dynamicaly loaded
or are not part of the document at first load */


    
    // $('#example').on('change', 'select', function() {
    //     var selected = $(this).find('option:selected');
    //     var value = selected.val();
    //     var price = selected.data('price');

    //     console.log(selected);
    //     console.log(value);
    //     console.log(price);

    //     if(price) {
    //         $('#result').html(value + ' ' +price);
    //     }
    // });


// ------------------Keyboard event --- 

// keydown, keyup
    // $('#example').on('keydown', 'input', function() {
    //     $('#result').html('Your name is: ' + $(this).val());
    // });

    // $('#example').on('keyup', 'input', function() {
    //     $('#result').html('Your name is: ' + $(this).val());
    // });


// ------------------ Preventing Default Behavior in Events ---------------------
    // stop event from probegation to the top of the page

    // $('#example').on('click', 'a', function(e) {
    //     e.preventDefault(); //stop link from taking us onto the links
    //     e.stopPropagation(); //we stop the event from going other elements in the dom
    //     console.log('hello');
    // });

    // $('#example').on('click', function(e) {
    //     e.preventDefault();
    //     console.log('hello container');
    // });


// -------------------------------Dom Manipulation---append()----prepend()-------after()------before()------------

    $('#add-container').on('click', 'button', function(){
        var value = $('#add-container input').val();
        console.log(value);

        var html = '<div class="item">\             <div class="remove">X</div>' + value + '</div>';
        console.log(html); 
        
    // append() html
        $('#places-container').append(html);
        // $(html).appendTo('#places-container');
    // prependTo()
        // $(html).prependTo('#places-container');

    // after()
        // $('#places-container').children().last().after(html);

    // before()
        // $('#places-container').children().first().before(html);

    });

// this doesn't work for newly added elements!!
    // $('#places-container .remove').on('click', function(){
    //     $(this).parent().remove();
    // });

/* because this targets the parent element only that is there in the begining
 then looking for a "attribute" on the clicked item*/
    $('#places-container').on('click', '.remove', function(){
        $(this).parent().remove();
    });



});



// chain jquery traversing element examples??