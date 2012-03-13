/*
Miu Project 3
by: Tony Butler
date: 3/12/2012
term: 1203
*/

var parseEForm = function(data){

	console.log(data);
};

$(document).ready(function(){},
	
	var eform = $('#entryform');
	
	eform.validate({
		invalidHandler: function(form, validator){},
		submitHandler: function(){
			var data = eform.serializeArray();
			parseEForm(data);
		{
	});

});

$(document).ready(function() 
{
    /* $('#submit').button('enable') */ /* Console says "Uncaught TypeError: Object [object Object] has no method 'button'" */
    $('#submit').attr("disabled", true);
    /* Do stuff */
    $('#form').live('keyup change', function()
    {
    if (isEmailValid && isTextValid)
    {
        /* $('#submit').attr("disabled", false); */ /* Button is not enable */
        $('#submit').button('enable');
    }
    });
})
...
<div class="content-primary">
    <form id="form">
    <button data-theme="a" id="submit" type="submit">Submit</button>
    </form>
</div>
