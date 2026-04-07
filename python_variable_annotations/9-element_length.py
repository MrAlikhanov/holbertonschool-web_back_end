#!/usr/bin/env python3
"""Module that calculates the length of elements in an iterable."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Takes an iterable of sequences and returns a list of tuples.
    """
    return [(i, len(i)) for i in lst]
