#include<bits/stdc++.h>

using namespace std;

#define R 3
#define C 3

int minCost(int mat[R][C])
{
	int dp[R][C];
	dp[0][0] = mat[0][0];
	for(int i=1;i<R;i++)
		dp[0][i] = dp[0][i-1] + mat[0][i];
	for(int i=1;i<C;i++)
		dp[i][0] = dp[i-1][0] + mat[i][0];

	for(int i=1;i<R;i++)
	{
		for(int j=1;j<C;j++)
		{
			dp[i][j] = mat[i][j] + min(dp[i-1][j],min(dp[i-1][j-1],dp[i][j-1])); 
		} 
	}

	return dp[R-1][C-1];
}

int main()
{
	int cost[R][C]  = { {1, 2, 3}, 
                      {4, 8, 2}, 
                      {1, 5, 3} };
	cout << minCost(cost);
}
