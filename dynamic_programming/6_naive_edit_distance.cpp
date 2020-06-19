/*	
 *	1. If Last Chars of str1 and str2 are same then go on
 *	2. If not recursively calculate minimum cost for all
 *	   three operations
 *	   	2.1 insert recur for m and n-1
 *	   	2.2 remove recur for m-1 and n
 *	   	2.3 replace recur for m-1 and n-1
 *
 *	 Time Complexity :
 *
 *	 	3 ^ m
 *	 We have overlapping subproblems
 * */


#include<bits/stdc++.h>

using namespace std;

int min(int x,int y,int z)
{
 return min(min(x,y),z);
}


int editDist(string str1,string str2,int m,int n)
{
	// if str1 empty only option is two insert all str2 elements
	if(m == 0)
		return n;

	// str2 is empty only option is two delete all m elements
	if(n==0)
		return m;

	if(str1[m-1]==str2[n-1])
		return editDist(str1,str2,m-1,n-1);

	return 1 + min(
			editDist(str1,str2,m,n-1), // insert
			editDist(str1,str2,m-1,n), // remove
			editDist(str1,str2,m-1,n-1) // replace
		      );
}


int main()
{
	string str1 = "sunday";
	string str2 = "saturday";

	cout << editDist(str1,str2,str1.length(),str2.length());
	return 0;
}
