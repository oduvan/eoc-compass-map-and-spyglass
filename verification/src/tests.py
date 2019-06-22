"""
TESTS is a dict with all of your tests.
Keys for this will be the categories' names.
Each test is a dict with
    "input" -- input data for a user function
    "answer" -- your right answer
    "explanation" -- not necessarily a key, it's used for an additional info in animation.
"""


TESTS = {
    "Basics": [
        {
            "input": [['Y', 0, 0, 0, 'C'],
                      [ 0,  0, 0, 0,  0],
                      [ 0,  0, 0, 0,  0],
                      ['M', 0, 0, 0, 'S']],
            "answer": 11
        },
        {
            "input": [['Y', 'S', 0, 0, 0],
                      ['C', 'M', 0, 0, 0],
                      [ 0,   0,  0, 0, 0],
                      [ 0,   0,  0, 0, 0]],
            "answer": 3
        }
    ],
    "Extra": [
        {
            "input": [['Y', 0,  0, 'S', 0],
                      [ 0, 'M', 0,  0,  0],
                      [ 0,  0,  0, 'C', 0],
                      [ 0,  0,  0,  0,  0]],
            "answer": 7
        },
        {
            "input": [['Y',  0, 'C'],
                      [ 0,  'S', 0],
                      ['M',  0,  0]],
            "answer": 5
        },
        {
            "input": [['Y', 0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'M', 0, 'S', 0],
                      [ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'C', 0,  0,  0],
                      [ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0,  0,  0,  0,  0]],
            "answer": 11
        },
        {
            "input": [[ 0,  0,  0, 'S', 0],
                      [ 0, 'M', 0,  0,  0],
                      [ 0,  0, 'Y','C', 0],
                      [ 0,  0,  0,  0,  0]],
            "answer": 4
        },
        {
            "input": [[ 0,   0, 'C'],
                      [ 0,  'S', 0],
                      ['M', 'Y', 0]],
            "answer": 4
        },
        {
            "input": [[ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'M', 0, 'S', 0],
                      [ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'C', 0,  0,  0],
                      [ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0,  0,  0,  0, 'Y']],
            "answer": 11
        },
        {
            "input": [[ 0,  0,  0, 'S'],
                      [ 0, 'M', 0,  0],
                      [ 0,  0,  0, 'C'],
                      [ 0, 'Y', 0,  0]],
            "answer": 7
        },
        {
            "input": [['Y',  'C'],
                      [ 0,  'S'],
                      ['M',  0]],
            "answer": 4
        },
        {
            "input": [[ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'M', 0, 'S', 0],
                      [ 0,  0, 0,  0,  0,  0,  0],
                      [ 0,  0, 0, 'C', 0,  0,  0],
                      [ 0, 'Y',0,  0,  0,  0,  0],
                      [ 0,  0, 0,  0,  0,  0,  0]],
            "answer": 9
        }

    ]
}
