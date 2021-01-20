// JS Code Developed by Fawzy
$(() => {
    const toConsole = () => {
        const versionNumber = 1.0;
        console.log(`App Developed By Abdulrahman Fawzy version No: ${versionNumber}`);
    }

    const initJSDOM = () => {
        var counter = 0;

        const counterFunc = () => {
            counter++;
            $("#changeNum").text(`${counter}`);
            $("#progress").attr('style', `width: ${counter * 20}%`);
        }



        $(".ok").click(() => {
            if ($("body").find('.enter').hasClass("startSection")) {
                $(".footer-pw").addClass('d-flex animate__animated animate__fadeIn');
            }
            if ($("body").find('.enter').hasClass("yesNo")) {
                $(".footer-pw").addClass('animate__animated animate__fadeOut');
                $(".footer-create").addClass('d-flex animate__animated animate__fadeIn');
            }
            if ($("body").find('.enter').hasClass("pictureChoice") || $("body").find('.enter').hasClass("la") || $("body").find('.enter').hasClass("yesNo")) {
                if ($("body").find('.enter').find(".global-header-ul-li-required").length > 0) {
                    counterFunc();
                }
            }
            if ($("body").find('.enter').hasClass("opinionScale")) {
                if ($("body").find('.enter').find(".opinion-sacle-span-required").length > 0) {
                    counterFunc();
                }
            }
            if ($("body").find('.enter').hasClass("submit")) return visitURL();
            if ($("body").find('.enter').hasClass("phoneSection")) {
                if ($("body").find('.enter').find('#phone').val().length > 0) counterFunc();
            }
            
            if ($("body").find('.enter').hasClass("shortText")) {
                if ($("body").find('.enter').find('#short').val().length > 0) counterFunc();
            }
            if ($("body").find('.enter').hasClass("emailAddress")) {
                if ($("body").find('.enter').find('#email').val().length > 0) counterFunc();
            }
            if ($("body").find('.enter').hasClass("websiteURL")) {
                if ($("body").find('.enter').find('#url').val().length > 0) counterFunc();
            }
            if ($("body").find('.enter').hasClass("longText")) {
                if ($("body").find('.enter').find('#long').val().length > 0) counterFunc();
            }
            $("body").find('.enter').next().addClass("enter d-block animate__animated animate__slideInUp");
            $("body").find('.enter').first().removeClass("enter").addClass("d-noneN");

        });

        $('body').on("keyup", (e) => {
            if (e.keyCode == 13) {

                if ($("body").find('.enter').hasClass("startSection")) {
                    $(".footer-pw").addClass('d-flex animate__animated animate__fadeIn');
                }
                if ($("body").find('.enter').hasClass("pictureChoice") || $("body").find('.enter').hasClass("la") || $("body").find('.enter').hasClass("yesNo")) {
                    if ($("body").find('.enter').find(".global-header-ul-li-required").length > 0) {
                        counterFunc();
                    }
                }
                if ($("body").find('.enter').hasClass("opinionScale")) {
                    if ($("body").find('.enter').find(".opinion-sacle-span-required").length > 0) {
                        counterFunc();
                    }
                }
                if ($("body").find('.enter').hasClass("phoneSection")) {
                    if ($("body").find('.enter').find('#phone').val().length > 0) counterFunc();
                }
                if ($("body").find('.enter').hasClass("shortText")) {
                    if ($("body").find('.enter').find('#short').val().length > 0) counterFunc();
                }
                if ($("body").find('.enter').hasClass("emailAddress")) {
                    if ($("body").find('.enter').find('#email').val().length > 0) counterFunc();
                }
                if ($("body").find('.enter').hasClass("websiteURL")) {
                    if ($("body").find('.enter').find('#url').val().length > 0) counterFunc();
                }
                if ($("body").find('.enter').hasClass("longText")) {
                    if ($("body").find('.enter').find('#long').val().length > 0) counterFunc();
                }
                if ($("body").find('.enter').hasClass("submit")) return visitURL();
                if ($("body").find('.enter').hasClass("starRating")) return;
                if ($("body").find('.enter').hasClass("yesNo")) {
                    $(".footer-pw").addClass('animate__animated animate__fadeOut');
                    $(".footer-create").addClass('d-flex animate__animated animate__fadeIn');
                }
                $("body").find('.enter').next().addClass("enter d-block animate__animated animate__slideInUp");
                $("body").find('.enter').first().removeClass("enter").addClass("d-noneN");

            }
        });

        // goTo URL method
        const visitURL = () => {
            window.open('https://www.typeform.com', '_blank');
        }

        $(".create").click(() => {
            visitURL();
        })

        const globalHeaderUlLi = $(".global-header-ul-li");
        const divPic = $(".div-pic");
        divPic.mouseover((e) => {
            $(e.target).find(".global-header-ul-li-span-key").addClass("d-block");
        })
        divPic.mouseleave((e) => {
            $(e.target).find(".global-header-ul-li-span-key").removeClass("d-block");
        })
        divPic.click((e) => {
            divPic.removeClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target).addClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target.parentElement.parentElement).next().addClass("d-block");
        });
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
        $(".global-header-ul-li-input").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $(".global-header-ul-li-email").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $(".global-header-ul-li-url").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $(".global-header-ul-li-txtArea").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $(".global-header-ul-li-number").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $('.opinion-scale-span').click((e) => {
            $('.opinion-scale-span').removeClass("animate__animated animate__bounceIn opinion-sacle-span-required");
            $(e.target).addClass("animate__animated animate__bounceIn opinion-sacle-span-required");
            $(e.target.parentElement).next().addClass("d-block");
        })
        $(".start-rating").starRating({
            totalStars: 5,
            starSize: 60,
            emptyColor: 'transparent',
            hoverColor: 'rgb(95 163 255)',
            activeColor: 'rgb(31, 127, 255)',
            ratedColor: '#000',
            strokeColor: 'rgb(31, 127, 255)',
            initialRating: 3,
            ratedColors: ['rgb(31, 127, 255)', 'rgb(31, 127, 255)', 'rgb(31, 127, 255)', 'rgb(31, 127, 255)', 'rgb(31, 127, 255)'],
            useGradient: false,
            callback: () => {
               counterFunc();
                $("body").find('.enter').next().addClass("enter d-block animate__animated animate__slideInUp");
                $("body").find('.enter').first().removeClass("enter").addClass("d-noneN");
            }
        });
    }
    const initPhone = () => {
        var input = document.querySelector("#phone");
        window.intlTelInput(input, {
            initialCountry: 'auto',
            preferredCountries: ['us', 'gb', 'br', 'ru', 'cn', 'es', 'it'],
            autoPlaceholder: 'aggressive',
            utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/12.1.6/js/utils.js",
            geoIpLookup: function (callback) {
                fetch('https://ipinfo.io/json', {
                    cache: 'reload'
                }).then(response => {
                    if (response.ok) {
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