// From: https://app.codility.com/demo/results/trainingVJ6D8T-ZWU/
// Score: 100% / 100% / 100%

function solution(A) {
    let expected_total = (A.length + 1) * (A.length + 2) / 2
    let actual_total = 0
    if(A.length > 0){
        actual_total = A.reduce((acc,ele)=> acc + ele)        
    }
    return expected_total - actual_total
}

/*
Task description
An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

function solution(A);

that, given an array A, returns the value of the missing element.

For example, given array A such that:

  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5
the function should return 4, as it is the missing element.

Assume that:

N is an integer within the range [0..100,000];
the elements of A are all distinct;
each element of array A is an integer within the range [1..(N + 1)].
Complexity:

expected worst-case time complexity is O(N);
expected worst-case space complexity is O(1) (not counting the storage required for input arguments).
*/
