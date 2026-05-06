#!/usr/bin/env python3
""" Returns the list of school having a specific topic """


def schools_by_topic(mongo_collection, topic):
    """
    Returns the list of school having a specific topic
    mongo_collection: pymongo collection object
    topic: topic searched (string)
    """
    return list(mongo_collection.find({"topics": topic}))
