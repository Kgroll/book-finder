const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    } 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, password: String!): Auth
        saveBook([authors]: String, description: String, title: String, BookId: Int, image: String, link: String): User
        removeBook(BookId: Int): User
    }

    type User {
        _id: ID
        username: String!
        email: String!
        password: String!
        bookCount: Int
        savedBooks: [savedBooks]
    }

    type Book {
        bookId: Int!
        authors: [String]
        description: String!
        title: String!
        image: String
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }`

module.exports = typeDefs;