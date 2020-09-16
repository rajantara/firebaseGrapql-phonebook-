var GraphQLNonNull = require('graphql').GraphQLNonNull;
var GraphQLString = require('graphql').GraphQLString;
var GraphQLID = require('graphql').GraphQLID;
var UserType = require('../types/user');
var services = require('../../services');

exports.update = {
    type: UserType.userType,
    args: {
        Id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        Name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        Phone: {
            type: new GraphQLNonNull(GraphQLString),
        }
    },
    resolve(root, params) {
        return services.updateUser(params)
    }
}