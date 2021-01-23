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
            $("#progress").attr('style', `width: ${counter * (100 / 14)}%`);
        }

        const checks = () => {
            const findEnter = $("body").find('.enter');               
            if (findEnter.hasClass("startSection")) {
                $(".footer-pw").addClass('d-flex animate__animated animate__fadeIn');
            }
            if (findEnter.hasClass("dateInput")) {
                if (findEnter.find('#day').val().trim().length === 2 && findEnter.find('#month').val().trim().length === 2 && findEnter.find('#year').val().trim().length === 4) counterFunc();
            }
            if (findEnter.hasClass("opinionScale")) {
                if (findEnter.find(".opinion-sacle-span-required").length > 0) {
                    counterFunc();
                }
            } 
            if (findEnter.hasClass("pictureChoice") || findEnter.hasClass("la") || findEnter.hasClass("yesNo")) {
                if (findEnter.find(".global-header-ul-li-required").length > 0) {
                    counterFunc();
                }
            }
            if (findEnter.hasClass("yesNo")) {
                $(".footer-pw").addClass('animate__animated animate__fadeOut');
                $(".footer-create").addClass('d-flex animate__animated animate__fadeIn');
            }
           
            if (findEnter.hasClass("selectBoxSection")) {
                if (findEnter.find('#selectOption').val() === "1" || findEnter.find('#selectOption').val() === "2" || findEnter.find('#selectOption').val() === "3") counterFunc();
            }
            if (findEnter.hasClass("phoneSection")) {
                if (findEnter.find('#phone').val().length > 0) counterFunc();
            }
            if (findEnter.hasClass("shortText")) {
                if (findEnter.find('#short').val().length > 0) counterFunc();
            }
            if (findEnter.hasClass("emailAddress")) {
                if (findEnter.find('#email').val().length > 0) counterFunc();
            }
            if (findEnter.hasClass("websiteURL")) {
                if (findEnter.find('#url').val().length > 0) counterFunc();
            }
            if (findEnter.hasClass("numberSection")) {
                if (findEnter.find('#number').val().length > 0) counterFunc();
            }
            if (findEnter.hasClass("longText")) {
                if (findEnter.find('#long').val().length > 0) counterFunc();
            }
            findEnter.next().addClass("enter d-block animate__animated animate__slideInUp");
            findEnter.first().removeClass("enter").addClass("d-noneN");
        }

        // Ok & Enter Shortcut
        $(".ok").click(() => { checks(); });

        $('body').on("keyup", (e) => {
            if (e.keyCode === 13) {
                const findEnter = $("body").find('.enter');    
                if (findEnter.hasClass("submit")) return visitURL();
                if (findEnter.hasClass("starRating")) return;
                if (findEnter.hasClass("ImageUploader")) return;
                checks();
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
        $(".elementShowOk").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $("#day, #month, #year").keyup((e) => {
            $(e.target.parentElement.parentElement).next().addClass("d-block");
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
                const findEnter = $("body").find('.enter');               
                findEnter.next().addClass("enter d-block animate__animated animate__slideInUp");
                findEnter.first().removeClass("enter").addClass("d-noneN");
            }
        });
        $('input:file').fileuploader({
            limit: 1,
            maxSize: 10,
            fileMaxSize: 10,
            afterSelect: function() {
               setTimeout(() => {
                counterFunc();
                const findEnter = $("body").find('.enter');               
                findEnter.next().addClass("enter d-block animate__animated animate__slideInUp");
                findEnter.first().removeClass("enter").addClass("d-noneN");
               }, 1000)
            },

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

    const initSelect = () => {
        $('#selectOption').niceSelect();
    }


    const initGlobal = () => {
        toConsole();
        initJSDOM();
        initPhone();
        initSelect();
    }

    initGlobal();
});