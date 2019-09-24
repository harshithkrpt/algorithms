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
function minMax1(array) {
	min,max = NULL
	foreach e in array
		min = MIN(e,min)
	foreach e in array
		max = MAX(e,max)
{
function minMax2(array) {
	min,max = NULL
	foreach e in array
		min = MIN(e,min)
		max = MAX(e,max)
}
```
