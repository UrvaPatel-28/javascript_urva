for (let a = 0; a < 10; a++) {

    // if true, skip the remaining part of the body
    if (a == 3) break;
    console.log(a);
}

for (let i = 0; i < 10; i++) {

    // if true, skip the remaining part of the body
    if (i % 2 == 0) continue;
    console.log(i);
}
