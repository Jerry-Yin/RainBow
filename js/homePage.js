

function scanCode() {
    console.log('follow clicked1');
    iDialog({
        title:false,
        id:'scanCode',
        // content:'<img src="src/image/img_scan_code.png">',
        content:
        '<div class="dialog_div">' +
            '<img class="dialog_s1" src="/src/image/img_scan_code.png">' +
            '<img class="dialog_s2" id="btn_dismiss1" src="src/image/img_close_black.png" onclick="dismissDialog()" style="margin-top: 5px; margin-right: 5px;"></img>' +
        '</div>',
        lock: true,
        width:500,
        fixed: true,
        height:300,
        esc: true,
        opacity:0.4,
        drag: true
    });
}

function dismissDialog() {
     console.log('dismiss dialog');
    // console.log($.dialog.get('scanCode'))
    // $.dismissdialog.get('scanCode')
    // Ω iDialog.get('scanCode').hide()
    // dialog.hide();
    console.log('this: '+this);
    $.dialog({
        id:'scanCode',
        title: false
        // content:'<img src="src/image/img_scan_code.png">'
    }).hide();
    // console.log(iDialog.get);
    // console.log(iDialog.hide())
    // console.log($.dialog());
    // console.log($.dialog('scanCode'));

    // iDialog.hide();
    // window.dialog.hide();
}

function showJoinDialog() {
    console.log('follow clicked1');
    iDialog({
        title:false,
        id:'join',
        // content:'<img src="src/image/img_scan_code.png">',
        content:
        '<div class="dialog_div">' +
        '<img class="dialog_s1" src="src/image/img_join_dialog.png">' +
        '<img class="dialog_s2" id="btn_dismiss1" src="src/image/img_close_black.png" onclick="dismissJoinDialog()" style="margin-top: 5px; margin-right: 5px;"></img>' +
        '</div>',
        lock: true,
        width:500,
        fixed: true,
        height:300,
        esc: true,
        opacity:0.4,
        drag: true
    });

}

function dismissJoinDialog() {
    $.dialog({
        id:'join',
        title: false
        // content:'<img src="src/image/img_scan_code.png">'
    }).hide();
}

function knowMore() {

}