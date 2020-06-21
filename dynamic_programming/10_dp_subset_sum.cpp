/*
 *	DP[size+1][target+1]
 *	
 *	if(A[i] > j)
 *	 DP[i][j] = DP[i-1][j]
 *	else
 *	 DP[i][j] = DP[i-1][j] or DP[i-1][sum-A[i]]
 * */
// O(sum*n) time and space
#include<bits/stdc++.h>

using namespace std;

bool isSubsetSum(int set[],int n,int sum)
{
	bool dp[n+1][sum+1];

	for(int i=0;i<=n;i++)
	     dp[i][0] = true;
	for(int i=1;i<=sum;i++)
	     dp[0][i] = false;

	for(int i=1;i<=n;i++)
	{
	   for(int j=1;j<=sum;j++)
	   {
	   	if(j < set[i-1])
		{
			dp[i][j] = dp[i-1][j];
		}
		else
			dp[i][j] = dp[i-1][j] || dp[i-1][j-set[i-1]];
	   }
	}

	for(int i=0;i<=n;i++)
	{
	  for(int j=0;j<=sum;j++)
	  {
	  	cout << dp[i][j] << " ";
	  }
	  cout << "\n";
	}

	return dp[n][sum];
}

int main()
{
	int set[] = {3,34,4,12,5,2};
	int sum = 9;
	int n = sizeof(set)/sizeof(set[0]);

	if(isSubsetSum(set,n,sum) == true)
		printf("Found a subset with given sum");
	else
		printf("Not Found with given sum");	
	return 0;
}
