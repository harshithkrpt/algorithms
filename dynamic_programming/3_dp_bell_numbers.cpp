// TODO Understand Bell Number
/*
 *	Bell Numbers - Number of ways to partition a set
 *		n = 2
 *			{1,2} 
 *				=> {{1},{2}} 
 *				=> {{1,2}} 
 *			=> 2 Ways
 *		n = 3
 *			{1,2,3} => {{1},{2},{3}} 
 *				=> {{1,2},{3}}
 *				=> {{1},{2,3}}
 *				=> {{1,3},{2}}
 *				=> {{1,2,3}} 
 *			=> 5 Ways
 *
 *	Definition of bell number : 
 *		S(n,k) -> total partitions into k sets 
 *		
 *		Bell(n) => sum of ( s(n,k) ) range 1 to k
 *
 *		S(n+1,k) => k * S(n,k) + S(n,k-1)
 *			
 *			i.e S(n,k-1) => added as a single set to existing
 *					partition
 *			    k * S(n,k) => it is added to all sets of every
 *			    		partition
 *			   
 * */
