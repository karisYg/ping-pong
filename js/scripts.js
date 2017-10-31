$(document).ready(function () {

	var listnumber=[];
	var index;

	var btnsubmit = $("#btnpress");
	var inputnum = $("input#number");
	var pwarning =$("p#warning");
	var ul_nums = $("ul#returnednums");
	inputnum.click(function() {
		/* Act on the event */
			$(this).val("");
		ul_nums.html("<li style='color:green;'>Adding new number</li>");

	});
	btnsubmit.click(function() {
		ul_nums.html("");
		if (inputnum.val()!="") {


			// console.log(inputnum.val());
			// console.log(parseInt(inputnum.val()));

			for (index=0;index<parseInt(inputnum.val())+1;index++){
				listnumber.push(index);
				// console.log(listnumber);

				ul_nums.prepend("<li>"+ping(listnumber[index])+"</li>");

			}

			console.log(listnumber);
			console.log(ping(3));

		}else{
			pwarning.html("fill in the input field with a number");
			inputnum.css({
				border: '1px solid red',
				outline: 'red',
				padding:"2px",
				textIndent :'10px'
			});
		}
	});

	function ping (num) {
		if (num%15==0) {
			return "pingpong";
		}else if (num%5==0){
			return "ping";
		}else if(num%3==0){
			return "ping";
		}else{
			return num;
		}
	}



});

