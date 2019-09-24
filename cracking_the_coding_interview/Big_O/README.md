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
