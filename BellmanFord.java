import java.util.*;
import java.lang.*;
import java.io.*;

class BellmanFord 
{
	class Graph {

		class Edge {
			int from, to, distance;
			Edge()
			{
				from = 0;
				to = 0;
				distance = 0;
			}
		};

		Graph(int v, int e)
		{
			V = v;
			E = e;
			edge = new Edge[e];
			for (int i = 0; i < e; i++){
				edge[i] = new Edge();
			}
		}
	}
	public static void main(String args[]) 
    { 
    	Graph(1,2);
        System.out.println(Graph.V); 
    } 
} 