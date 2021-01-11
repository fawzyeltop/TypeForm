// JS Code Developed by Fawzy
$(() => {
    const toConsole = () => {
        const versionNumber = 1.0;
        console.log(`App Developed By Abdulrahman Fawzy version No: ${versionNumber}`);
    }

    const initJSDOM = () => {
        const start = $("#start"), hiThere = $("#hi-there"), la = $("#la"), phoneSection = $("#phone-section"), Statement = $("#Statement"), yesNo = $("#yesNo");
        const shortText = $("#shortText-section"), longText = $("#longText-section");
        start.click(() => {
            hiThere.addClass("d-none");
            la.addClass("d-block animate__animated animate__slideInUp");
        })
        const globalHeaderUlLi = $(".global-header-ul-li");
        const OK1 = $("#1-Ok"), phoneOK = $("#phoneOK"), OK3 = $("#3-Ok"), longTxtOK = $("#longTxtOK");
        globalHeaderUlLi.mouseover((e) => {
            $(e.target).find(".global-header-ul-li-span-key").addClass("d-block");
        })
        globalHeaderUlLi.mouseleave((e) => {
            $(e.target).find(".global-header-ul-li-span-key").removeClass("d-block");
        })
        globalHeaderUlLi.click((e) => {
            globalHeaderUlLi.removeClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target).addClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target.parentElement).children().last().addClass("d-block");
        });
        OK1.click(() => {
            la.addClass("d-noneN");
            phoneSection.addClass("d-block animate__animated animate__slideInUp");
        })
        phoneOK.click(() => {
            phoneSection.addClass("d-noneN");
            shortText.addClass("d-block animate__animated animate__slideInUp");
        })
        $(".global-header-ul-li-input").click((e) => {
            $(e.target).addClass("changeInputClass");
        })
        $(".global-header-ul-li-input").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("animate__animated animate__lightSpeedInLeft d-block");
        })
        $(".global-header-ul-li-txtArea").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("animate__animated animate__lightSpeedInLeft d-block");
        })
        OK3.click(() => {
            shortText.addClass("d-noneN");
            longText.addClass("d-block animate__animated animate__slideInUp");
        })
        longTxtOK.click(() => {
            longText.addClass("d-noneN");
            Statement.addClass("d-block animate__animated animate__slideInUp");
        })
    }
    const initPhone = () => {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            initialCountry: 'auto',
            preferredCountries: ['us','gb','br','ru','cn','es','it'],
            autoPlaceholder: 'aggressive',
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
              geoIpLookup: function(callback) {
                fetch('https://ipinfo.io/json', {
                    cache: 'reload'
                }).then(response => {
                    if ( response.ok ) {
                         return response.json()
                    }
                    throw new Error('Failed: ' + response.status)
                }).then(ipjson => {
                    callback(ipjson.country)
                }).catch(e => {
                    callback('us')
                })
            }
        });
    }

    const initGlobal = () => {
        toConsole();
        initJSDOM();
        initPhone();
    }

    initGlobal();

});