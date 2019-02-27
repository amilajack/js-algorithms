int i, j, k = 0; 
for (i = n / 2; i <= n; i++) { 
    for (j = 2; j <= n; j = j * 2) { 
        k = k + n / 2; 
    } 
}

// ANSWER: O(nLogn)
