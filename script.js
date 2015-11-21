

$(function () {
    $(document).keyup(function (e) {
        if (e.which == 8) {
            backspace();
        }
    });
    $(document).keypress(function (e) {
        $(".editing").append(String.fromCharCode(e.which));
        if (e.which == 32) {
            // Finalize the block.
            finalize();
        } else if(e.which == 13) {
            // Enter.
            finalize();
            $("<br>").insertBefore(".editing")
        }
    });
    $("#downloadtxt").click(function() {
        download("Untitled Document.txt", $(".document").text());
    })
});

function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function backspace() {

    editing = $(".editing");
    text = editing.html();
    if (text == "") {
        strikeOut();
    } else {
        editing.html(text.slice(0, -1));
    }
}
function strikeOut() {
    $(".document").find("span:not([class])").last().addClass('strike');
}
function finalize() {
    editing = $(".editing");
    text = editing.text();
    editing.remove();
    $(".document").append("<span>" + text + "</span><span class='editing'></span>");

}
function newParagraph() {

}