function thousands_separators(num) {
    var nums = buildNums(num);
    var text = buildText(nums);

    return text.join('');
}

function buildNums(num) {

    return num.toString().split('.');
}

function buildText(nums) {
    var text = [];
    var count = 0;

    var num = nums[0].split("");
    for (var i = num.length - 1; i >= 0; i--) {
        text.unshift(num[i]);
        count++;
        if (!(count % 3) && i != 0) {
            text.unshift(',');
        }
    }
    text = isHaveDecimal(nums, text);

    return text;
}

function isHaveDecimal(nums, text) {
    if (nums[1] != null) {
        text.push("." + nums[1]);
    }

    return text;
}

module.exports = thousands_separators;
