
// Simple solution # 1
var count = readline()
var totalRightAnswers = 0;

while(count){
    var round = readline()
    var haveAnswers = round.split(" ")
    var accumulator = 0
    haveAnswers.forEach(element => {
        if (element == '1') accumulator++
    });
    if(accumulator >= 2){
        totalRightAnswers++
    }
    count--
}

print(totalRightAnswers)

// RegEx solution 

var n = readline()
 
var result = 0;
 
while(n--) if(readline().replace(new RegExp('0', 'g'), '').length >= 4) result++
 
print(result)

