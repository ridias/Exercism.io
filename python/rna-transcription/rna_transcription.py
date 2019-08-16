def to_rna(dna_strand):
    rna = ""
    for x in range(0, len(dna_strand)):
        if dna_strand[x] == "G":
            rna += "C"
        elif dna_strand[x] == "C":
            rna += "G"
        elif dna_strand[x] == "T":
            rna += "A"
        elif dna_strand[x] == "A":
            rna += "U"
    return rna