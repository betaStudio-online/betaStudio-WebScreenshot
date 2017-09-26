

    var page = require('webpage').create();

    page.viewportSize = { width: 1024, height: 768 };

  page.zoomFactor = 1;
            page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2049.0 Safari/537.36';  

    page.open('http://localhost/', function () {
        page.render('localhost1262856048_1024_768.jpg');
        phantom.exit();
    });


    