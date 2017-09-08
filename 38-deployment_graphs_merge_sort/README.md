![cf](http://i.imgur.com/7v5ASc8.png) 38: Frontend Deployment
====

## Learning Objectives
* students will learn about Content Distribution Networks (CDN's)
* students will be able to setup AWS CloudFront to host their static assets

## Resources
* read [AWS CloudFront](https://aws.amazon.com/cloudfront/)

## Overview
#### Transport Layer Security (TLS / SSL)
* the Transport Layer Security (TLS) was previously the Secure Socket Layer (SSL)
* TLS is a cryptographic protocol that provides secure communication over a computer network
* TLS enables communication between computers to be private
  * it does this by using asymmetric cyphers to encrypt data before sending it across the network

* when a client and server make a TLS connection they negotiate a stateful connection using the following handshake:

0. the client connects to the TLS enabled server and provides a list of supported ciphers
0. the server picks a cipher that it supports and notifies the client
0. the server sends it's public encryption key or a digital certificate
0. the client confirms the validity digital certificate
0. the client generates and sends sessions keys used for the connection

###### Asymmetric Cypher
* an asymmetric cypher is a cryptographic algorithm that uses separate keys for encrypting and decrypting data
* these keys are often referred to as public and private keys
* the public key is used to encrypt the data
* the private key is used to decrypt the data
* an analogy for this might be:
  * if a store owner had two types of keys to her store, several for locking it up (copies of a public key), and one for opening it (a private key), then all her employees could have access to the key that locks the store, but once the store was locked she would be the only one that could open it

###### Digital Certificate
* a digital certificate is an document used to prove the ownership of a public key
* the certificate contains the servers name, the trusted certificate authority, and the public encryption key
* a certification authority is an entity that both issues and verifies digital certificates

#### HTTPS
* HTTPS is an HTTP connection encrypted by TLS or SSL
* HTTPS is supported by browsers and is used to authenticate the visited website and protect the privacy/integrity of the exchanged data

#### Content Delivery Network (CDN)
* A CDN is a geographically distributed network of proxy servers and data centers
* it's job is to distribute static assets to spatially relative end users
  * this provides high availability and better performance
