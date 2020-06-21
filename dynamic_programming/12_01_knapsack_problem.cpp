#include<bits/stdc++.h>
// O(nW) time and space
using namespace std;

int knapSack(int W,int wt[],int val[],int n)
{
	// dp[n+1][weight+1]
	int dp[n+1][W+1];

	for(int i=0;i<=n;i++)
	{
	  for(int w = 0;w <= W;w++)
	  {
	  	if(i==0||w==0)
	 	  dp[i][w] = 0;
		else if(wt[i-1] <= w)
			// this is the crutial
			// step
			// checks for the maximum 
			// that can be taken
		  dp[i][w] = max(val[i-1]+dp[i-1][w-wt[i-1]],dp[i-1][w]);
		else
		 dp[i][w] = dp[i-1][w];
	  }
	}
	
	int sz = W;
	cout << "Selected Items : ";
	for(int i=n;i>0;i--)
	{
		if(dp[i][sz] != dp[i-1][sz])
		{
			cout << wt[i-1] << " " << val[i-1] << "\n";
			sz -= wt[i-1];
		}
	}

	cout << "\nAns : ";
	return dp[n][W];
}

int main()
{	
	int val[] = {60,100,120};
	int wt[] = {10,20,30};
	int W = 50;
	int n = sizeof(val) / sizeof(val[0]);
	cout << knapSack(W,wt,val,n);
	return 0;
}
