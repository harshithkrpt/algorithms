# BIG O

## Rules -

- different steps gets added

```
function something() {        |
	doStep1(); // O(a)    | O(a+b)
	doStep2(); // O(b)    |
}			      |

```  

- drop constants 

```
function minMax1(array) {           |
	min,max = NULL		    |
	foreach e in array          |
		min = MIN(e,min)    | O(n)
	foreach e in array          |
		max = MAX(e,max)    |
}				    |


function minMax2(array) {           |
	min,max = NULL              |
	foreach e in array	    | O(n)
		min = MIN(e,min)    |
		max = MAX(e,max)    |
}				    |
```

- different inputs is different variables 

``` 
int intersectionSize(arrayA,arrayB){  |
	int count 0		      |
	for a in arrayA {	      | O(a+b) 
		for b in arrayB {     |
		if a == b {	      |
		count = count + 1     |
		}		      |
		}		      |
	}			      |
}				      
				
```
- drop non dominate terms 

```
function whywouldodothis(array) {
	max = NULL
	foreach a in array {     |
		max = MAX(a,max) | O(n)
	}			 |
	print max	
	foreach a in array {     |
	foreach b in array {     | O(n^2)
	print a,b		 |
	}			 |
	}			 |
}
// O(n^2) <= O(n+n^2) <= O(n^2+n^2)
```

## Time Complexity

- BIGO - describe the transfer of data 
- Electronic Transfer O(s) 
- Airplane Transfer O(1)
- Examples : O(log N) , O(N log N),O(N),O(N^2),O(2^N).

![img-3][img3]

[img3]: ./img_3.png

- above graph shows O(s) as size of file increases time increases O(1) for place time will be constant


> Example :
>	paint a fence with w width and h height -> O(wh)
> 	if you need to layer p layers of paint -> O(whp)

## Big O, Big Theta and Big Omega 

- O(big O)  : upper bound on the time.
- big omega : lower bound on the time.
- big theta : average bound on the time.  


## Best Case , Worst Case and Expected Case 

> Example : Quick Sort
> Best Case -> O(N) -> (all elements are equal).
> Worst Case -> O(N^2) -> (pivot is repeatedly largest element).
> Expected Case -> O(N log N).


- For Many or Most Algorithms worst case and expected case are simillar.


## Space Complexity 

- space required by an algorithm.
- array -> O(n) space
- matrix -> O(n^2) space.
- stack space in recursive calls counts too
```c
int sum(int n) {
	if(n <= 0) return 0;
	return n + sum(n-1);
}
```
- above program takes O(n) space and O(n) as calls stack up in the actual memory.

### Program to add adjacent elements 0 to n :

- takes O(1) space and O(n) time

```c
	int paitSumSequence(int n) {
	int sum = 0;
	for (int i=0;i<n;i++)
	{
		sum += pairSum(i,i+1);
	}
	return sum;
	}
	
	int pairSum(int a,int b) {
	return a+b;
	}
```

### Drop the Constants : 

- O(2N) is described as O(N).

### Drop the Non-Dominant Terms :

- O(N^2+N) is described as O(N^2).

![img-4][img4]

[img4]: ./img4.png

### Multi Part Algorithms : Add vs Multiply :

- Below Program : O(A+B)
```java
	for (int a : arrA) {
	print(a);
	}
	for (int b : arrB) {
	print(b);
	}
```
- Below Program : O(A * B) 
```java
	for(int a : arrA) {
	for(int b : arrB) {
		print(a + "," + b);
	}
	}
```

### Amortized Time  :

- time differs in dynamic array .
- X insertions take O(2X) and Amortized time for insertion is O(1).


### Log N Runtimes : 

- O(log N) is seen in Binary Search . 
- Runtime matter of many steps (dividing N by 2 each time) until N = 1
- 2^k = 16 -> log2(16) = 4
- base of log does not matter in Big O .


### Recursive Runtimes : 

```c

int f(int n) {
	if(n <= 1) {
		return 1;
	}
	return f(n-1) + f(n-2); 
}

```
- Time Complexity Often looks O(branches^depth).
- Time Complexity becomes O(2^n).

> As you may recall, the base of a log doesn't matter for big O since logs of different bases are only different by a constant factor. However, this does not apply to exponents. The base of an exponent does matter. Compare 2" and 8". If you expand 8", you get (2 3 )", which equals 2 3 ", which equals 2 2 " * 2". As you can see, 8" and 2 ° are different by a factor of 2 2 ". That is very much not a constant factor!


### Examples and Exercises : 

```java
	void foo(int[] array) {
	int sum = 0;
	int product = 1;
	for(int i=0;i<array.length;i++){
	sum += array[i];
	}
	for(int i=0;i<array.length;i++){
	product *= array[i];
	}
	}
```
- Answer : O(N).

```java
void printPairs(int[] array) {
	 for (int i= 0; i < array.length; i++) {
		for (int j = 0; j < array.length; j++) {
			System.out.println(array[i] + "," + array[j]);
		}
	}
}

```

- O(N^2)


```java
void printUnorderedPairs(int[] array) {
	for (int i= 0; i < array.length; i++) {
		for (int j = i + 1; j < array.length; j++) {
		System.out.println(array[i] + "," + array[j]);
		}
	}
}
```

- (N-1) + (N-2) + (N-3) + ..... + 2 + 1 -> O(N^2)

```java
void printUnorderedPairs(int[] arrayA, int[] arrayB) {
for (int i= 0; i < arrayA.length; i++) {
	for (int j = 0; j < arrayB.length; j++) {
		if (arrayA[i] < arrayB[j]) {
		System.out.println(arrayA[i] + "," + arrayB[j]);
			}
		}
	}
}
```

- O(a * b) , a = length of arrayA , b = length of arrayB


```java 
void printUnorderedPairs(int[] arrayA, int[] arrayB) {
for (int i= 0; i < arrayA.length; i++) {
		for(int j=0;j<arrayB;j++) {
		for(int k=0;k<100000;k++) {
			System.out.println(arrayA[i] + "," + arrayB[j]);
			}
		}
	}
}
```

- No change from above 100,000 is also a constant
- Timecomplexity is O(ab).

```java
void revsese(int[] array){
	for(int i=0;i<array.length/2;i++) {
	int other = array.length - i - 1;
	int temp = array[i];
	array[i] = array[other];
	array[other] = temp;
	}
}
```

- O(N) time 

> Suppose we had an algorithm that took in an array of strings, sorted each string, and then sorted the full array. What would the runtime be?
> Many candidates will reason the following: sorting each string is O(N log N) and we have to do this for
each string, so that's O(N*N log N). We also have to sort this array, so that's an additional O(N log N)
work.Therefore,the total runtime isO(N 2 log N + N log N),which isjust0(N 2 log N).
> This is completely incorrect. Did you catch the error?
> The problem is that we used N in two different ways. In one case, it's the length of the string (which string?).
> And in another case, it's the length of the array.
> In your interviews, you can prevent this error by either not using the variable "N" at all, or by only using it when there is no ambiguity as to what N could represent.
> In fact, I wouldn't even use a and b here, or m and n. It's too easy to forget which is which and mix them up.
> An O(a 2 ) runtime is completely different from an O(a*b) runtime.
> Let's define new terms-and use names that are logical.
> Let s be the length of the longest string.
> Let a be the length of the array.
> Now we can work through this in parts:
> Sorting each string is 0( s log s).
> We have to do this for every string (and there are a strings), so that's 0( a* s log s).
> Now we have to sort all the strings. There are a strings, so you'll may be inclined to say that this takes O ( a log a) time. This is what most candidates would say. You should also take into account that you need to compare the strings. Each string comparison takes O(s) time. There are O(a log a) comparisons, therefore this will take 0( a*s log a) time.
> If you add up these two parts, you get 0( a* s ( log a + log s)).
> This is it. There is no way to reduce it further.


- Recursive Example : 

```java
	int sum(Node node) {
	if(node == null) return 0;
	return sum(node.left) + node.value + sum(node.right);
	}
```
- Answer : O(N)
-   
