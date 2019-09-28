#include<stdio.h>
#include<stdlib.h>

struct node {
	int data;
	struct node *left;
	struct node *right;
};

void node_creator(struct node **);
int* level_order(struct node *);
int main()
{
	int i;
	struct node *root;
	node_creator(&root);
	root->data = 1;
	node_creator(&root->left);
	node_creator(&root->right);
	root->left->data = 2;
	root->right->data = 3;	
	node_creator(&root->left->left);
	node_creator(&root->left->right);
	node_creator(&root->right->left);
	node_creator(&root->right->right);
	root->left->left->data = 4;
	root->left->right->data = 5;
	root->right->left->data = 6;
	root->right->right->data = 7;

	node_creator(&root->left->left->left);
	node_creator(&root->left->left->right);
	node_creator(&root->left->right->left);
	node_creator(&root->left->right->right);
	node_creator(&root->right->left->left);
	node_creator(&root->right->left->right);
	node_creator(&root->right->right->left);
	node_creator(&root->right->right->right);
	
	root->left->left->left = NULL;
	root->left->left->right = NULL;
	root->left->right->left  = NULL;
	root->left->right->right  = NULL;
	root->right->left->left = NULL;
	root->right->left->right = NULL;
	root->right->right->left = NULL;
	root->right->right->right= NULL;
	/*
	 *	     1
	 *	   /   \
	 *	   2    3
	 *	  / \  / \
	 *	 4  5  6 7
	 *
	 *      step 1 : traverse through level order and store it in array.
	 *      strp 2 : using that array check for symmetricity.
	 *
	 *
	*/

	int *arr = level_order(root);
       	for(i=0;i<7;i++){
	printf(" %d ",arr[i]);
	}	
	return 0;
}


void node_creator(struct node **root)
{
	*root = (struct node*)malloc(sizeof(struct node));
}


int * level_order(struct node *root) {
	struct node *node_arr;
	int *arr;
	int flag = 0;
	int i=0,f=0,j=0;
	node_arr = (struct node*)malloc(7*sizeof(struct node));
	arr = (int *)malloc(7*sizeof(int));
	while(root != NULL || j != f){
		arr[i++] = root->data;
	
		if(root->left != NULL){
		node_arr[f++] = *(root->left);
		flag++;
		} 
		if(root->right != NULL){
		node_arr[f++] = *(root->right);
		flag++;	
		}
		if(flag > 0) {
		root = &node_arr[j++];
		flag = 0;
		}
		else 
		break;
	}
	return arr;
}
