#!/usr/bin/env python3
""" Provides some stats about Nginx logs stored in MongoDB """
from pymongo import MongoClient


def log_stats():
    """ Provides some stats about Nginx logs stored in MongoDB """
    client = MongoClient('mongodb://127.0.0.1:27017')
    collection = client.logs.nginx

    # Ümumi loqların sayı
    total_logs = collection.count_documents({})
    print("{} logs".format(total_logs))

    # Metodlar üzrə statistika
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print("\tmethod {}: {}".format(method, count))

    # Status check (method=GET, path=/status) sayı
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print("{} status check".format(status_check))


if __name__ == "__main__":
    log_stats()
