# What is a Hash Table

A hash table is used to store key-value pairs

They are like arrays, but the keys are not ordered

Unlike arrays, hash tables are FAST for all of the following operations: Finding Values, adding new Values, and removing Values

Because of their speed they are used very commonly.

## BIG O of HASH TABLES (average case)

Insert: O(1)

Deletion: O(1)

Access: O(1)

## Hash Tables in the wild

_Python_ has Dictionaries

_JavaScript_ has Objects and Maps

_Java_, _Go_, and _Scala_ have Maps

_Ruby_ has Hashes

## How would we write our own

imagine we want to store some colors

we could use an array/list: [ "#ff69b4", "#ff4500", etc etc]

It would be nice if instead of using incides to access the colors, we could use more human-readable keys.

Pink ----------> #ff69b4
orangered -----> #ff4500

colors["pink"] is way better than colors[2]

## The HASH Part

To implement a hash table, we'll be using an array/list

In order to look up values by key, we need a way to 'convert keys into valid array indices.'

a fuction that performs this task is called a Hash Function

## What makes a good Hash

1. Fast (i.e. constant time)

2. Doesn't cluster outputs at specific indices, but distributes uniformly

3. Deterministic (same input yields same output)

## Dealing with Collisions

Even with a large array and a great hash function, collisions are inevitable.

There are many strategies for dealing with collisions, but we'll focus on two:

1. Separate Chaining

With separate chaning, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list).

This allows us to store multiple key-value pairs at the same index

2. Linear Probing

With linear probing, when we find a collision, we search through the array to find the next empty slot.

Unlike with separate chaining, this allows us to store a single key-value at each index.
