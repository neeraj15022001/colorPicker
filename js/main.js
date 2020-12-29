$(".color-picker").change((e) => {
    const currentColor = e.target.value;
    $(this).attr("value", currentColor);
    $(".main-container").css("backgroundColor", currentColor)
    $(".color-text").attr("value",currentColor);
})

$(".button-copy").click(() => copy())

function copy() {
    $(".color-text").removeAttr("disabled")
    $(".color-text").select();
    $(".color-text").attr("disabled", "true")
    document.execCommand("copy");
}