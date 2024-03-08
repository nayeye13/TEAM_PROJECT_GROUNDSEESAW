$(function () {
    var win_h = $(window).height();
    $('.page').each(function (index) {
        $(this).attr("data-index", win_h * index);
    });


    // 휠 이동
    $('.page').on("mousewheel", function (e) {
        console.log($(this))
        var pagePos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) {
            $("html, body").stop().animate({ scrollTop: pagePos - win_h });
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html, body").stop().animate({ scrollTop: pagePos + win_h });
            return false;
        }
    })
});

$(window).scroll(function(){
    let scroll=$(this).scrollTop();
    let p1=$('.section_page_1').attr('data-index');
    let p2=$('.section_page_2').attr('data-index');
    let p3=$('.section_page_3').attr('data-index');

    if(scroll < p1){
        $(".typing>li").text('');
    }

    if (scroll == p1) {
        $(".typing2>li").text('');
        // 타이핑       
        let typingBool = false;
        let typingIdx = 0;
        let liIndex = 0;
        let liLength = $(".typing_txt>li").length;
        let tyInt;

        // 타이핑될 텍스트를 가져온다 
        let typingTxt = $(".typing_txt>li").eq(liIndex).text();

        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        console.log(typingTxt)
        if (typingBool == false) {
            // 타이핑이 진행되지 않았다면 
            typingBool = true;
            tyInt = setInterval(typing, 100); // 반복동작 
        }

        function typing() {
            $(".typing li").removeClass("on");
            $(".typing li").eq(liIndex).addClass("on");
            if (typingIdx < typingTxt.length) {
                // 타이핑될 텍스트 길이만큼 반복 
                $(".typing li").eq(liIndex).append(typingTxt[typingIdx]);
                // 한글자씩 이어준다. 

                typingIdx++;
            } else if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing_txt>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);
            }
        }
       
    }

    if (scroll == p2) {
        $(".typing>li").text('');

        // 타이핑2
        let typingBool = false;
        let typingIdx = 0;
        let liIndex = 0;
        let liLength = $(".typing_txt2>li").length;
        let tyInt;

        // 타이핑될 텍스트를 가져온다 
        let typingTxt = $(".typing_txt2>li").eq(liIndex).text();

        typingTxt = typingTxt.split(""); // 한글자씩 자른다. 
        console.log(typingTxt)
        if (typingBool == false) {
            // 타이핑이 진행되지 않았다면 
            typingBool = true;
            tyInt = setInterval(typing, 50); // 반복동작 
        }

        function typing() {
            $(".typing2 li").removeClass("on");
            $(".typing2 li").eq(liIndex).addClass("on");
            if (typingIdx < typingTxt.length) {
                // 타이핑될 텍스트 길이만큼 반복 
                $(".typing2 li").eq(liIndex).append(typingTxt[typingIdx]);
                // 한글자씩 이어준다. 

                typingIdx++;
            } else if (liIndex < liLength - 1) {
                //다음문장으로  가기위해 인덱스를 1증가
                liIndex++;
                //다음문장을 타이핑하기위한 셋팅
                typingIdx = 0;
                typingBool = false;
                typingTxt = $(".typing_txt2>li").eq(liIndex).text();

                //다음문장 타이핑전 1초 쉰다
                clearInterval(tyInt);
                //타이핑종료

                setTimeout(function () {
                    //1초후에 다시 타이핑 반복 시작
                    tyInt = setInterval(typing, 100);
                }, 1000);
            } else if (liIndex == liLength - 1) {

                //마지막 문장까지 써지면 반복종료
                clearInterval(tyInt);
            }
        }
    }


    if (scroll == p3) {
        $(".typing3>li").text('');

    }
})





// section_2 effect

let w = $(window).innerWidth();

console.log(w)
$('.section_2_button_page_prev').click(function () {
    $('.section_2_paper li:last').prependTo('.section_2_paper');
    $('.section_2_paper').css('margin-left', -w);
    $('.section_2_paper').stop().animate({ marginLeft: 0 }, 800);
})

$('.section_2_button_page_next').click(function () {
    $('.section_2_paper').stop().animate({ marginLeft: -w }, 800, function () {
        $('.section_2_paper li:first').appendTo('.section_2_paper');
        $('.section_2_paper').css({ marginLeft: 0 });
    });
});

// Section_3 effect
$(function () {
    $('.section_3_chapterpage_buttonpage_next').click(function () {
        let idx = $(this).index();

        $(this).addClass('');
        $(this).siblings().removeClass('');

        $('.').eq(idx).fadeIn().css('display', 'flex');
        $('.').eq(idx).siblings('.').hide();
    });
});

// $(function () {
//     $('.best_swichi_button').click(function () {
//        let idx = $(this).index();

//        $(this).addClass('one');
//        $(this).siblings().removeClass('one');

//        $('.best_list').eq(idx).fadeIn().css('display', 'flex');
//        $('.best_list').eq(idx).siblings('.best_list').hide();
//    });
// });