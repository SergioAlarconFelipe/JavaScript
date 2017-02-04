function formatCeros (num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function uppercaseFirstLetter (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
