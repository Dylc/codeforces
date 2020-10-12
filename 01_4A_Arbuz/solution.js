// Simple solution # 1
const w = readline()
if (w <= 2){
    print('NO')
} else if ( w % 2 == 0){
    print('YES')
} else {
    print('NO')
}

// Simple solution # 2
const w = readline();
print(w%2===0 && w>2 ? "YES":"NO");

// Bit solution
a=readline();print(a&1|a<3?'NO':'YES')