#!/usr/bin/env python3
"""
Main file testing the Server class
"""

Server = __import__('1-simple_pagination').Server

server = Server()

print(server.get_page(1, 3))
print(server.get_page(3, 2))
print(server.get_page(3000, 100))
