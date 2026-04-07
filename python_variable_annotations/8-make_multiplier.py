#!/usr/bin/env python3
"""Module that provides a make_multiplier function."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """Returns a function that multiplies a float by multiplier."""
    def multiplier_func(n: float) -> float:
        return n * multiplier

    return multiplier_func
