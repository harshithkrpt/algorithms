#include<stdio.h>
int p[N];
int cache[N][N];

int profit(int year,int be,int en)
{
	if(be > en)
		return 0;
	if(cache[be][en] != -1)
		return cache[be][en];
	int year = N - (be - en+1) + 1;
	return cache[be][en] = max(profit(year+1,be+1,en) + year * p[be],profit(year+1,be,en-1)+year*p[en]);
}
