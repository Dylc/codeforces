// Simple solution # 1
var count = readline();

while(count){
    var word = readline()
    if (word.length <= 10){
        print(word)
    } else {
        print(word.slice(0,1) + (word.length-2) + word.slice(word.length-1))
    }
    count--;
}

// Simple solution # 2
var count = readline();

while(count){
    var word = readline()
    if (word.length <= 10){
        print(word)
    } else {
        print(word[0] + (word.length-2) + word[word.length-1])
    }
    count--;
}