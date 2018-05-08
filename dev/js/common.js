/**
 * Created by captain on 2016/12/21.
 */
function nextPage() {
    // 下一步
    $('.nextPage').on('click', function () {
        var status = window.location.pathname;
        switch (status){
            case "/sd-ddo/Front-end/dev/html/chooseTemplate.html":
                window.location.href = "./chooseData.html";
                break;
            case "/sd-ddo/Front-end/dev/html/chooseData.html":
                window.location.href = "./chooseIndicator.html";
                break;
            case "/sd-ddo/Front-end/dev/html/chooseIndicator.html":
                window.location.href = "./chooseConditions.html";
                break;
            case "/sd-ddo/Front-end/dev/html/chooseConditions.html":
                window.location.href = "./chooseFinal.html";
                break;
            case "/sd-ddo/Front-end/dev/html/chooseFinal.html":
                // ajax POST DATA 后端
                break;
        }
    })
}
nextPage();