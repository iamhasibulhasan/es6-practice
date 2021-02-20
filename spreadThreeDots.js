const ages = [22, 15, 16, 18, 22];
const ages2 = [55, 56, 66, 45];

// ! bullshit way for array concat
const allAges = ages.concat(ages2).concat([5]);

// ! proper way for concat array
const allAges2 = [...ages, ...ages2, 5]
console.log(allAges2);

// ? other uses spread syntax

const man1 = 650;
const man2 = 800;
const man3 = 1000;

const bdt = [650, 850, 520];
// const largeNum = Math.max(man1, man2, man3);
// ! using spread syntax
const largeNum = Math.max(...bdt)
console.log(largeNum);