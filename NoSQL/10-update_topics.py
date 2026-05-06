#!/usr/bin/env python3
""" Changes all topics of a school document based on the name """


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name
    mongo_collection: pymongo collection object
    name: school name to update (string)
    topics: list of topics approached in the school (list of strings)
    """
    mongo_collection.update_many(
        {"name": name},
        {"\$set": {"topics": topics}}
    )
