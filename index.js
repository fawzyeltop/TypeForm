// JS Code Developed by Fawzy
$(() => {
    const versionNumber = 1.0;
    console.log(`App Developed By Abdulrahman Fawzy version No: ${ versionNumber }`);
    const start = $("#start"), hiThere = $("#hi-there"), la = $("#la");
    start.click(() => {
        hiThere.addClass("d-none");
        la.addClass("d-block animate__animated animate__slideInUp");
    })
    const globalHeaderUlLi = $(".global-header-ul-li");
    globalHeaderUlLi.mouseover((e) => {
        $(e.target).find(".global-header-ul-li-span-key").addClass("d-block");
    })
    globalHeaderUlLi.mouseleave((e) => {
        $(e.target).find(".global-header-ul-li-span-key").removeClass("d-block");
    })
    globalHeaderUlLi.click((e) => {
        globalHeaderUlLi.removeClass("animate__animated animate__bounceIn global-header-ul-li-required");
        $(e.target).addClass("animate__animated animate__bounceIn global-header-ul-li-required");
    })
});