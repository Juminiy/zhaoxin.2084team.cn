$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "请确认是否填写正确?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    $.ajax({
        type: "post",
        url: "https://apih.2084team.cn:8080/message/post/recruitment",
        data: { name:$("#name").val(),id_num:$("#id_num").val(),email:$("#email").val(),qq:$("#qq").val(),major:$("#major").val(),position:$("#position").val(),message:$("#message").val()},
        success : function(result){
             
            if (result== "ok"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,"未知错误");
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "你的信息我们已经收到!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "h3 text-center tada animated text-success";
    } else {
        var msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
