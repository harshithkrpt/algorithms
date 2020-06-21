# Dynamic Programming

## Ugly Numbers

- numbers whose only prime factors are 2,3 or 5.
	ex : the first 11 ugly numbers are 1,2,3,4,5,6,8,9,10,12,15
- By Default 1 is Included as Ugly Number

```cpp
#include<stdio.h>
#include<stdlib.h>

int maxDivide(int a,int b)
{
	while(a % b == 0)
		a = a / b;
	return a;
}

int isUgly(int no)
{
	no = maxDivide(no,2);
	no = maxDivide(no,3);
	no = maxDivide(no,5);

	return (no == 1) ? 1 : 0;
}

int getNthUglyNo(int n)
{
	int i = 1;
	int count = 1;
	
	while(n > count)
	{
		i++;
		if(isUgly(i)
			count++;)
	}
	
	return i;
}


int main()
{
	unsigned no  = getNthUglyNo(150);
	printf("150 Ugly Numbers : %d",no);
	getchar();
	return 0;
}
```

## Nth Catalan Number

- C0 = 1 Cn+1 = Summationi=0 to n ( Ci * Cn-i) for n >= 0;


## Coin Change Problem

- Given N Value and Set of Coins Number of ways to make N Coins where Order Does not matter
	Ex : N = 4 S = {1,2,3} => {1,1,1,1} {1,1,2} {2,2} {1,3} so => 4  

- Solution :

	1 -> Optimal Substructure
					

## TODO PROBLEMS

- line of wines
- coin chage all versions
- stair case and stair case with k steps
- minimum path sum

