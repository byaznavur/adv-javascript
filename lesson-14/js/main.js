// Map va WeakMap ga doir misollar

// Berilgan obj nomli Map objectining ichidagi bir nechta qiymatlarni kalitlari orqali o’chiruvchi deleteMany(key1, key2, …) nomli funksiya yozing.

// Input: let obj = new Map([
// 	['a', 1],
// 	['b', 2],
// 	['c', 3],
// 	['d', 4]
// ])
// obj.deleteMany('a', 'c')
// Output: Map {‘b’ => 1, ‘d’ => 4}

// obj nomli Map objektining qiymatlari yig’indisini qaytaruvchi mapSum(obj) nomli funksiya yozing.

// 	Input: obj = new Map([['a', 2], ['b', 5], ['c', 3]])
// 	mapSum(obj)
// 	Output: 10

// Berilgan map1 va map2 nomli Map objectlarining ikkalasida ham mavjud bo’lmagan kalitlardan tuzilgan Map objecti qaytaruvchi getMapIntersection nomli funksiya yozing.

// 	Input: let map1 = new Map([['apple', 1], ['banana', 2], ['orange', 3]])
// let map2 = new Map([['apple', 4], ['orange', 5], ['grape', 6]])
// getMapIntersection(map1, map2)
// Output: Map { 'banana' => 2, 'grape' => 6 }

// WeakMap objectining uzunligini qaytaruvchi size nomli getter yozing.

// Input: let obj = new WeakMap([[{id: 1}, 'John'], [{id: 2}, 'Jane'], [{id: 3}, 'Alice']]))
// obj.size
// Output: 3

// Set va WeakSet ga doir misollar

// Berilgan set1 va set2 nomli Set objectlaridan yagonalarini birlashtirib, yangi Set object qaytaruvchi setUnion(set1, set2) nomli funksiya yozing.

// 	Input: let set1 = new Set([1, 2, 3])
// let set2 = new Set([2, 3, 4])
// setUnion(set1, set2)
// Output: Set { 1, 2, 3, 4 }

// Berilgan set1 va set2 nomli Set objectlarining ikkalasida ham mavjud bo’lgan qiymatlardan tashkil topgan yangi Set object qaytaruvchi setIntersection(set1, set2) nomli funksiya yozing.

// 	Input: let set1 = new Set([1, 2, 3])
// let set2 = new Set([2, 3, 4])
// setIntersection(set1, set2)
// Output: Set { 2, 3 }

// Berilgan set1 nomli Set objecti set2 nomli Set objectining qismi yoki emasligini aniqlovchi checkSetSubset(set1, set2) nomli funksiya yozing.

// 	Input: let set1 = new Set([1, 2])
// 	let set2 = new Set([1, 2, 3, 4])
// 	checkSetSubset(set1, set2)
// 	Output: true

// Spread operatoriga oid misollar

// arr nomli massiv ichidagi takrorlangan qiymatlardan yagonalarini qaytaruvchi removeDuplicates(arr) nomli funksiya yozing.

// 	Input: let arr = [1, 2, 2, 3, 4, 4, 5]
// 	removeDuplicates(arr)
// 	Output: [1, 2, 3, 4, 5]

// arr1 va arr2 nomli massivlarni birlashtiruvchi mergeArr(arr1, arr2) nomli funksiya yozing.

// 	Input: let arr1 = [1, 5, 8];
// 	let arr2 = [7, 9, 10];
// 	mergeArr(arr1, arr2)
// 	Output: [1, 5, 8, 7, 9, 10]

// Argument sifatida berilgan bir nechta massivlarni birlashtirib yangi massiv qaytaruvchi concatArrays nomli funksiya yozing.

// Input: concatArrays([1, 2], [3, 4], [5, 6])
// Output: [1, 2, 3, 4, 5, 6]
