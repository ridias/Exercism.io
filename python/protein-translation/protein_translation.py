def proteins(strand):
    result = []
    i = 0
    while(i < len(strand)):
        p = strand[i:i+3]
        if p == "AUG":
            result.append("Methionine")
        elif p == "UUU" or p == "UUC":
            result.append("Phenylalanine")
        elif p == "UUA" or p == "UUG":
            result.append("Leucine")
        elif p == "UCU" or p == "UCC" or p == "UCA" or p == "UCG":
            result.append("Serine")
        elif p == "UAU" or p == "UAC":
            result.append("Tyrosine")
        elif p == "UGU" or p == "UGC":
            result.append("Cysteine")
        elif p == "UGG":
            result.append("Tryptophan")
        else:
            break
        i += 3
    
    return result
