let n = 4;

// Pattern 1.1 (left triangle) Char Row
// A
// BB
// CCC
// DDDD

{
    let pattern = "";
    let char = 65;
    let row = 1;
    while (row <= n) {
        let col = 1;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
        }
        pattern = pattern + "\n";
        row = row + 1;
        char = char + 1;
    }

    console.log("Pattern 1.1");
    console.log(pattern);
}

// Pattern 1.2 (left triangle reverse) Char Row
// AAAA
// BBB
// CC
// D

{
    let pattern = "";
    let char = 65 + n - 1;
    let row = n;
    while (row >= 1) {
        let col = 1;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
        }
        pattern = pattern + "\n";
        row = row - 1;
        char = char - 1;
    }

    console.log("Pattern 1.2");
    console.log(pattern);
}

// Pattern 1.3 (right triangle) Char Row
//    A
//   BB
//  CCC
// DDDD

{
    let pattern = "";
    let row = 1;
    let char = 65;
    while (row <= n) {
        let space = 1;
        let col = 1;
        while (space <= (n - row)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
        }
        row = row + 1;
        char = char + 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 1.3");
    console.log(pattern);
}

// Pattern 1.4 (reverse right triangle) Char Row
// DDDD
//  CCC
//   BB
//    A

{
    let pattern = "";
    let row = 1;
    let char = 65 + n - 1
    while (row <= n) {
        let space = 1;
        let col = 1;
        while (space <= (row - 1)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= (n - row + 1)){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
        }
        row = row + 1;
        char = char - 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 1.4");
    console.log(pattern);
}

// Pattern 2.1 (left triangle) Char Column
// A
// AB
// ABC
// ABCD

{
    let pattern = "";
    let row = 1;
    while (row <= n) {
        let col = 1;
        let char = 65;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        pattern = pattern + "\n";
        row = row + 1;
    }

    console.log("Pattern 2.1");
    console.log(pattern);
}

// Pattern 2.2 (left triangle reverse) Char Column
// ABCD
// ABC
// AB
// A

{
    let pattern = "";
    let row = n;
    while (row >= 1) {
        let col = 1;
        let char = 65;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        pattern = pattern + "\n";
        row = row - 1;
    }

    console.log("Pattern 2.2");
    console.log(pattern);
}

// Pattern 2.3 (right triangle) Char Column
//    A
//   AB
//  ABC
// ABCD

{
    let pattern = "";
    let row = 1;
    while (row <= n) {
        let space = 1;
        let col = 1;
        let char = 65;
        while (space <= (n - row)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        row = row + 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 2.3");
    console.log(pattern);
}

// Pattern 2.4 (reverse right triangle) Char Column
// ABCD
//  ABC
//   AB
//    A

{
    let pattern = "";
    let row = 1;
    while (row <= n) {
        let space = 1;
        let col = 1;
        let char = 65;
        while (space <= (row - 1)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= (n - row + 1)){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        row = row + 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 2.4");
    console.log(pattern);
}

// Pattern 3.1 (left triangle) Char Numbwr
// A
// BC
// DEF
// GHIJ

{
    let pattern = "";
    let row = 1;
    let char = 65;
    while (row <= n) {
        let col = 1;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        pattern = pattern + "\n";
        row = row + 1;
    }

    console.log("Pattern 3.1");
    console.log(pattern);
}

// Pattern 3.2 (left triangle reverse) Char Number
// JIHG
// FED
// CB
// A

{
    let pattern = "";
    let row = n;
    let char = 64 + (n * (n + 1) / 2);
    while (row >= 1) {
        let col = 1;
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char - 1;
        }
        pattern = pattern + "\n";
        row = row - 1;
    }

    console.log("Pattern 3.2");
    console.log(pattern);
}

// Pattern 3.3 (right triangle) Char Number
//    A
//   BC
//  DEF
// GHIJ

{
    let pattern = "";
    let row = 1;
    let char = 65;
    while (row <= n) {
        let space = 1;
        let col = 1;
        while (space <= (n - row)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= row){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char + 1;
        }
        row = row + 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 3.3");
    console.log(pattern);
}

// Pattern 3.4 (reverse right triangle) Char Number
// JIHG
//  FED
//   CB
//    A

{
    let pattern = "";
    let row = 1;
    let char = 64 + (n * (n + 1) / 2);
    while (row <= n) {
        let space = 1;
        let col = 1;
        while (space <= (row - 1)){
            pattern = pattern + " ";
            space = space + 1;
        }
        
        while (col <= (n - row + 1)){
            pattern = pattern + String.fromCharCode(char);
            col = col + 1;
            char = char - 1;
        }
        row = row + 1;
        pattern = pattern + "\n";
    }

    console.log("Pattern 3.4");
    console.log(pattern);
}