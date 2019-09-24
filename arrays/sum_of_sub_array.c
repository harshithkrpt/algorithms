#include<stdio.h>

struct ans 
{
	int ans_arr[2];
};

int main()
{
	int i=0,T,curr_iter=0;
	scanf("%d",&T);
	struct ans struct_ans[T];
	while(curr_iter<T)
	{

		int N,S;
		scanf("%d %d",&N,&S);
		int arr[N];
		for(i=0;i<N;i++)
		scanf("%d",&arr[i]);
		int pre_sum = 0 , start = 0,end = 0;
		i = 0;
		while(i<=N)
		{
			if(S == pre_sum)
			{
                                struct_ans[curr_iter].ans_arr[0] = start;
				struct_ans[curr_iter].ans_arr[1] = end;
 				break;
			}
			if(i==0)
			{
				pre_sum = arr[0];
				start = 1;
				end = 1;
				i++;
				continue;
			}
			if(pre_sum<S)
			{
				end = end + 1;
				pre_sum = pre_sum + arr[i++];
				continue;
			}
			if(pre_sum > S)
			{
				pre_sum = pre_sum - arr[start-1];
				start = start + 1;
			}
		}	
		curr_iter++;
	}
	for(i=0;i<T;i++)
	{
		printf("\n%d %d",struct_ans[i].ans_arr[0],struct_ans[i].ans_arr[1]);
	}
}
