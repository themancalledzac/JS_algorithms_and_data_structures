# The included code stub will read an integer, , from STDIN.

# Without using any string methods, try to print the following:


# Note that "" represents the consecutive values in between.

# Example

# Print the string .
# we import print_function from the future
# Here, values is an array and *values means array is unpacked, you can add values separated by a comma too. The arguments sep, end, and file are optional, but they can prove helpful in formatting output without taking help from a string module.

# The argument definitions are below:
# sep defines the delimiter between the values.
# end defines what to print after the values.
# file defines the output stream.

# The Python 2 print_function is much faster than the default print.
from __future__ import print_function

if __name__ == '__main__':
    n = int(input())
    n = 5

y = str
for x in range(n):
    print((x+1), sep='', end='')
    # y += str(x)

# print(y)
