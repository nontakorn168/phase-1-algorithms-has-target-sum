function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = new Set();

  // วนลูปผ่านทุกตัวเลขใน array
  for (const number of array) {
    const complement = target - number;
    
    // ถ้าเจอ complement ใน Set แปลว่ามีคู่ที่บวกกันได้ target
    if (seenNumbers.has(complement)) {
      return true;
    }
    
    // เก็บค่า number ลงใน Set เพื่อใช้ในการเปรียบเทียบกับตัวเลขตัวถัดไป
    seenNumbers.add(number);
  }

  // ถ้าไม่มีคู่ใด ๆ ที่บวกกันได้ target ก็คืนค่า false
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
for (let i = 0; )
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
