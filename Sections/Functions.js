Function.prototype.getNamesParameters = function() {
    return getNamesParameters(this);
};


var getNamesParameters = (function() {
    
    var regex_parameters = /\((.*?)\)/;
    var regex_spaces = /\s*/g;

    return function(fn) {
        return regex_parameters.exec(fn.toString())[1].split(",");
    };
    
})();
