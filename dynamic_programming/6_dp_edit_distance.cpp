/*
 *	TC : O(m*n)
 *	SC : O(m)
 *	// Space Optimized Model
 * */
#include<bits/stdc++.h>

using namespace std;

int min(int x,int y,int z)
{
	return min(min(x,y),z);
}

int num = 0;


void printGrid(vector<vector<int>> dp,int m,int n)
{
	
	cout << "----------------" << "State 0" << num++ <<"-------------------\n";
	for(int i=0;i<m;i++){
	 for(int j=0;j<n;j++)
	 {
	 	cout << dp[i][j] << " ";
	 }
	 cout << "\n";
	}
	cout << "-------------------------------------\n";
}

int editDistDP(string str1,string str2,int m,int n)
{
	vector<vector<int>> dp(m+1);
	
	for(int i=0;i<=m;i++)
	{
		dp[i] = vector<int>(n+1);
	}

	for(int i=0;i<=m;i++)
	{
		for(int j=0;j<=n;j++)
		{	
			printGrid(dp,m+1,n+1);

			if(i == 0)
				dp[i][j] = j;

			else if(j == 0)
				dp[i][j] = i;

			else if(str1[i-1] == str2[j-1])
				dp[i][j] = dp[i-1][j-1];
			else
				dp[i][j] = 1 + min(dp[i][j-1],dp[i-1][j],dp[i-1][j-1]);
		}
	}

	return dp[m][n];
}


int main()
{
	string str1 = "geek";
	string str2 = "gesek";

	cout << editDistDP(str1,str2,str1.length(),str2.length());

	return 0;
}
