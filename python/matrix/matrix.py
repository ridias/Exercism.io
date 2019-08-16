class Matrix(object):
    def __init__(self, matrix_string):
        self.matrix = matrix_string.splitlines()
        self.matrixRows = [[int(num) for num in row.split()] for row in self.matrix]
        self.matrixColumns  = [list(col) for col in zip(*self.matrixRows)]

    def row(self, index):
        return list(self.matrixRows[index-1])

    def column(self, index):
        return list(self.matrixColumns[index-1])
