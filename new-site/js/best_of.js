$(document).ready(function(){

    $(".best_of_thumb").click(function(){

        if ($(".replace_image:animated").length) {
            return false;
        } else {


            var mainImageId = $(this).attr("data-main");
            var newImageId = $(this).attr("data-thumb");
            var gender = $(this).attr("data-gender");

            var imageURL = "/stormsites/fcuk/images/ss14/features/best_of/" + gender + "/product_" + mainImageId + "_" + newImageId + ".jpg";

            console.log(imageURL);

            $("#main_image_" + mainImageId + " .replace_image img").attr("src", imageURL);

            $("#main_image_" + mainImageId + " .replace_image").animate({
                opacity: 1
            },500, function(){
                $("#main_image_" + mainImageId + " .main_image img").attr("src", imageURL);
                $("#main_image_" + mainImageId + " .replace_image").css({
                    opacity: 0
                });
            });

        }


    });


});