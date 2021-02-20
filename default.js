// jodi value pathai tahole kaj korbe na pathale default value hisabe 0 add hbe
function add(num1, num2 = 0){
        return num1 + num2;
}

const result = add(15, 1);
console.log(result);