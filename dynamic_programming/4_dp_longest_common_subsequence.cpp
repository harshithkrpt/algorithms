#include<bits/stdc++.h>

using namespace std;

// TC :  O(MN) and SC => 0(MN)
int lcs(string n,string m)
{
	int n1 = n.size();
	int n2 = m.size();
	int arr[n1+1][n2+1];
	
	for(int i=0;i<=n1;i++)
	{
		for(int j=0;j<=n2;j++)
		{
			if(i == 0 || j == 0)
			{
				arr[i][j] = 0;
			}
			else if(n[i-1] != m[j-1])
			{
				arr[i][j] = max(arr[i-1][j],arr[i][j-1]);
			}
			else
			{
				arr[i][j] = 1 + arr[i-1][j-1];
			}
		}
	}

	return arr[n1][n2];
}

int main()
{
	string n;
	string m;
	cin >> n >> m;
	cout << lcs(n,m);	
	return 0;
}
