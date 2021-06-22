function t() {
    if (document.getElementById('myText').value == '') {
        return
    }
    var text = document.getElementById('myText').value

    $("#vaporwave").html(`<textarea>${vaporwaveText(text)[0]}</textarea>`)
    $("#vaporwave2").html(`<textarea>${vaporwaveText(text)[1]}</textarea>`)
    $("#vaporwave3").html(`<textarea>${vaporwaveText(text)[2]}</textarea>`)
    $("#flowrish").html(`<textarea>${wrapInFlourish(text)}</textarea>`)
    $("#wrapin").html(`<textarea>${wrapInSymbols(text, 2)}</textarea>`)
    $("#firework").html(`<textarea>${firework(text)}</textarea>`)
    $("#weirdbox").html(`<textarea>${weirdBox(text)}</textarea>`)
    $("#littlesparks").html(`<textarea>${littleSparkles(text)}</textarea>`)
    $("#kirbyhug").html(`<textarea>${kirbyHug(text)}</textarea>`)
    $("#dottyjoiner").html(`<textarea>${dottyJoiner(text)}</textarea>`)
    $("#wazyjoiner").html(`<textarea>${wavyJoiner(text)}</textarea>`)
    $("#diametricAngleFrame").html(`<textarea>${diametricAngleFrame(text)}</textarea>`)
    $("#thickBlockFramed").html(`<textarea>${thickBlockFramed(text)}</textarea>`)
    $("#cutesentence").html(`<textarea>${cuteSentence(text)}</textarea>`)
    $("#cutetext").html(`<textarea>${cuteText(text)}</textarea>`)
    $("#crazytext").html(`<textarea>${crazifyText(text)}</textarea>`)
    $("#fullcrazy").html(`<textarea>${fullCrazy(text)}</textarea>`)
    $("#strikethrough").html(`<textarea>${strikeThrough(text)}</textarea>`)
    $("#tildeStrikeThrough").html(`<textarea>${tildeStrikeThrough(text)}</textarea>`)
    $("#underline").html(`<textarea>${underline(text)}</textarea>`)
    $("#doubleunderline").html(`<textarea>${doubleUnderline(text)}</textarea>`)
    $("#slashThrough").html(`<textarea>${slashThrough(text)}</textarea>`)
    $("#stinky").html(`<textarea>${stinky(text)}</textarea>`)
    $("#hearts").html(`<textarea>${heartsBetween(text)}</textarea>`)
    $("#arrow").html(`<textarea>${arrowBelow(text)}</textarea>`)
    $("#crossarrow").html(`<textarea>${crossAboveBelow(text)}</textarea>`)


}