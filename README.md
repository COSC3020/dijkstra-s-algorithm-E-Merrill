# Dijkstra's Algorithm

Recall the pseudocode for Dijkstra's algorithm:
- initialize the dist to each vertex to $\infty$, source to 0
- while there are unmarked vertices left in the graph
    - select the unmarked vertex $v$ with the lowest dist
    - mark $v$ with distance dist
    - for each edge $(v,w)$
        - dist($w$) = min $\left(\textrm{dist}(w), \textrm{dist}(v) + \textrm{weight of }(v, w)\right)$

Implement Dijkstra's algorithm. Start with the template I provided in `code.js`
and test your new function.

I have not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The choice of data structures is up to you -- your implementation does not have
to be the most efficient one, but please make sure that it is not unnecessarily
inefficient.

## Runtime Analysis

What is the big $\Theta$ complexity of your implementation? Add your
answer, including your reasoning, to this markdown file.

**My implementation will have a final complexity of $\theta(|V|^2)$.  My implementation has a while loop (which can be dumbed down to a for loop of length |V|) that has two other for loops nested within it. Both of those for loops have a length equal to |V|. Regardless of how many edges are in the matrix, both of these loops will iterate |V| times. Those add up to $2|V|$, and are inside of the previously mentioned while loop, giving $|V| * (2|V|)$ which mutliplies to be $2|V|^2$. Since scalars don't have any bearing on asymptotic complexity, it simplifies down to just $\theta(|V|^2)$**


I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

Noah Vogt helped me get understand how to actually go through and start implementing Dijkstra's after I sat there doing nothing for about 30 minutes. 
