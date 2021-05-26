"use strict";

$(document).ready(function ()
{
    var total = 0;
    
    // add hover handler and click handler to each image in table
    $("ul img").each(function ()
    {
        var temp = this.src;     //creating a temp variable to store the actual image src

        // set up event handlers for each image, on hover
        $(this).hover(function () {
        this.src = this.id;      // setting the id of image as the src on mouse enter
        }, function() {
        this.src = temp;         // setting the src to the old value upon mouse out
        }); // end hover
        

        // set up event handlers for each image, when clicked
        $(this).click(function (evt)
        {           
            var total=0.00;
            var strTotal = document.getElementById("total").textContent;
           
            if (strTotal.length < 3)
            {
                total = 0.00;           
            }
            else
            {              
                var getTotal = strTotal.substr(strTotal.indexOf("$") + 1, strTotal.length);               
                total = parseFloat(getTotal);
            }
          
            var product = this.id;
            if (product == "images/espresso_info.jpg")
            {               
                $('#order').append($('<option></option>').html("$3.45 - Espresso"));
                total = total + 3.45;
            }
            else if (product == "images/latte_info.jpg")
            {
                $('#order').append($('<option></option>').html("$5.65 - Latte"));
                total = total + 5.65;
            }
            else if (product == "images/cappuccino_info.jpg")
            {
               // $('#order').append($('<option>', { value: 1, text: "$3.45 - Cappuccino"})); another option
                $('#order').append($('<option></option>').html("$3.45 - Cappuccino"));
                total = total + 3.45;               
            }
            else if (product == "images/coffee_info.jpg")
            {
                $('#order').append($('<option></option>').html("$4.35 - Coffee"));
                total = total + 4.35;
            }
            else if (product == "images/biscotti_info.jpg")
            {
                $('#order').append($('<option></option>').html("$2.14 - Biscotti"));
                total = total + 4.35;
            }
            else
            {
                $('#order').append($('<option></option>').html("$2.95 - Scone"));
                total = total + 4.35;
            }

            // display order and total
            document.getElementById("total").textContent = "Total: $" + total.toFixed(2);

            // cancel default event of the clicked link
            evt.preventDefault();

        }); // end click
    }); // end each
   
    // add click event handler for check out button
    $("#place_order").click(function ()
    {
        $("#order_form").submit();

    }); // end click


    // add click event handler for clear button
    $("#clear_order").click( () =>
    {
        $("#order option").remove();
        document.getElementById("total").textContent = " ";

    }); // end click
}); // end ready
