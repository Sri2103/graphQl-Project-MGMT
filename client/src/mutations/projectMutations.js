import {gql} from "@apollo/client"

export const ADD_PROJECT = gql`
    mutation addProject($name:String!,$status: ProjectStatus!,$description:String!,$clientId:ID!){
        addProject(name:$name,status:$status,clientId:$clientId,description:$description){
            id
            name
            description
            status
            client{
                id
                name
            }
        }
    }
`
export const DELETE_PROJECT = gql`
    mutation deleteProject($id:ID!){
        deleteProject(id:$id){
            id
            name
            description
            status
            client{
                id
                name
            }
        }
    }
`

export const UPDATE_PROJECT = gql`
    mutation updateProject($id:ID!,$name:String!,$description:String!,$status:ProjectStatusUpdate!){
        updateProject(id:$id, name:$name, description:$description, status:$status){
            id
            name
            description
            status
            client{
                id
                name
            }
        }
    }
`