def saddle_points(matrix):
    
    if len(matrix) == 0:
        return [{}]

    lenRow = len(matrix[-1])
    for i in range(0, len(matrix)):
        if len(matrix[i]) != lenRow:
            raise ValueError(".+")

    rows = [max(nums) for nums in matrix]
    columns = [min(nums) for nums in zip(*matrix)]

    result = []
    for i in range(0, len(matrix)):
        for j in range(0, len(matrix[i])):
            if matrix[i][j] == columns[j] and matrix[i][j] == rows[i]:
                result.append({"row": i+1, "column": j+1})

    return [{}] if len(result) == 0 else result
