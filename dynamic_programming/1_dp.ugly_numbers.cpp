/*
 *	Time Complexity :
 *		O(n)		
 *	Space Complexity : 
 *		O(n)
 *	Idea is to find the multiples of 2 , 3 , 5 and merge the numbers 		and return the numbers
 *
 * */
#include<bits/stdc++.h>

using namespace std;

unsigned getNthUglyNo(unsigned n)
{
	unsigned ugly[n];
	unsigned i2 = 0,i3 = 0,i5 = 0;
	unsigned next_multiple_2 = 2;
	unsigned next_multiple_3 = 3;
	unsigned next_multiple_5 = 5;
	unsigned next_ugly_no = 1;
	ugly[0] = 1;
	for(int  i=1;i<n;i++)
	{
		next_ugly_no = min(next_multiple_2,min(next_multiple_3,next_multiple_5));
		ugly[i] = next_ugly_no;

		if(next_ugly_no == next_multiple_2)
		{
			i2++;
			next_multiple_2 = ugly[i2]*2;	
		}
		if(next_ugly_no == next_multiple_3)
		{
			i3++;
			next_multiple_3 = ugly[i3]*3;
		}
		if(next_ugly_no == next_multiple_5)
		{
			i5++;
			next_multiple_5 = ugly[i5]*5;
		}
	}
	return next_ugly_no;
}

int main()
{
	int n = 100000;
	cout << getNthUglyNo(n);
	return 0;
}

