const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        me: User
    } 
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]     
    }
    type Book {
        authors: [String]
        description: String
        bookId: String        
        image: String
        link: String
        title: String
    }
    type addBook {
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }
    type Mutation {
        login: (email: String, password: String): Auth
        addUser: (username: String, email: String, password: String): Auth
        saveBook: (book: addBook!): User
        removeBook: (bookId: String!): User
    }

    type Auth {
        token: ID!
        user: User
    }`

module.exports = typeDefs;