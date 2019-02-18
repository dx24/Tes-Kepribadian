function condisionalQShow(answerContent) {
	var lengthAC = answerContent.length;
	if (lengthAC <=3) {
	var qFlag = lengthAC + 1;
	$(".quiz").slideUp();
	$("#q"+qFlag).slideDown();
	$("#s"+lengthAC).removeClass("badge-secondary").addClass("badge-light");
	$("#s"+qFlag).removeClass("badge-light").addClass("badge-secondary");	
	}else {
		var urlResult = answerContent+".html"
		
		$("#loader").show();
		//set loading 5second 
		setTimeout(function() {
			//redirect
			window.location.href= urlResult;	
		},3000);
	}
}

$(document).ready(function() {
	//cek answer-content//
	var answerContent = $("#answer-content").val();
	if (answerContent == '') {
		$("#q1").show();
		$("#s1").removeClass("badge-light").addClass("badge-secondary");
	}else{
		condisionalQShow(answerContent);
	}

	//cek button click//
	$("button").on("click", function() {
		//get data value
		var dataValue = $(this).attr("data-value");
		//get exist data value
		var existDV = $("#answer-content").val();
		var newDV = existDV + dataValue;
		//insert data to data value
		$("#answer-content").val(newDV);

		//kondisional q show
		var answerContent = $("#answer-content").val();
		condisionalQShow(answerContent);

	});
});