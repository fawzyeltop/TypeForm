// JS Code Developed by Fawzy
$(() => {
    const toConsole = () => {
        const versionNumber = 1.0;
        console.log(`App Developed By Abdulrahman Fawzy version No: ${versionNumber}`);
    }

    const initJSDOM = () => {
        var counter = 1;
        // Start Button
        const start = $("#start");
        start.click((e) => {
            const ele = e.target.parentElement.parentElement.parentElement;
            $(ele).addClass("d-noneN");
            $(ele).next().addClass("d-block animate__animated animate__slideInUp");
            $(".footer-pw").addClass('d-flex animate__animated animate__fadeIn');
        });
       
         // Ok Button
         $(".ok").click((e) => {
            // const ele = e.target.parentElement.parentElement.parentElement.parentElement;
            // const ele = $(".d-block");
            $(".d-block").addClass("d-noneN");
            $(".d-block").next().addClass("d-block animate__animated animate__slideInUp");
            if(!$(e.target).hasClass("noCounter")) {
                counter++;
                $("#changeNum").text(`${ counter }`);
                $("#progress").attr('style', `width: ${ counter * 20 }%`);
            }
        });

        // Submit Button
        const submit = $("#submit");
        submit.click((e) => {
            const ele = e.target.parentElement.parentElement.parentElement.parentElement.parentElement;
            $(ele).addClass("d-noneN");
            $(ele).next().addClass("d-flex animate__animated animate__slideInUp");
            $(".footer-pw").addClass('animate__animated animate__fadeOut');
            $(".footer-create").addClass('d-flex animate__animated animate__fadeIn');
        });

        // goUp & goDown
        const goUp = $("#goUp"), goDown = $("#goDown");
        goDown.click(() => {
            const ele = $(".d-block");
            $(ele).addClass("d-noneN");
            $(ele).next().addClass("d-block animate__animated animate__slideInUp");
        });
        goUp.click(() => {
            const ele = $(".d-block");
            $(ele).addClass("d-noneN");
            $(ele).prev().addClass("d-blockN animate__animated animate__slideInUp");
        });

        // goTo URL method
        const visitURL = () => {
            window.open('https://www.typeform.com', '_blank');
        }

        $(".create").click(() => {
            visitURL();
        })

       

        const globalHeaderUlLi = $(".global-header-ul-li");
        globalHeaderUlLi.mouseover((e) => {
            $(e.target).find(".global-header-ul-li-span-key").addClass("d-block");
        })
        globalHeaderUlLi.mouseleave((e) => {
            $(e.target).find(".global-header-ul-li-span-key").removeClass("d-block");
        })
        globalHeaderUlLi.click((e) => {
            if($(e.target.parentElement.parentElement).hasClass("yesNo")) counter++;
            counter--;
            globalHeaderUlLi.removeClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target).addClass("animate__animated animate__bounceIn global-header-ul-li-required");
            $(e.target.parentElement).children().last().addClass("d-block");
            counter++;
            $("#changeNum").text(`${ counter }`);
            $("#progress").attr('style', `width: ${ counter * 20 }%`);
        });
        // $(".global-header-ul-li-input").click((e) => {
        //     $(e.target).addClass("changeInputClass");
        // })
        $(".global-header-ul-li-input").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
        })
        $(".global-header-ul-li-txtArea").keyup((e) => {
            $(e.target.parentElement.parentElement).children().last().addClass("d-block");
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