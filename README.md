# GUSTO

1 - The technology that we used for frontend is React-Redux

2 - How to use Redux?

- To use Redux we have to use the store, that is the global state and it allows to access that store from anywhere inside of the app

3 - To fetch our data on frontend we have to use an action as api

- Actions creators are function that return an action

- What is an action ? An action is just an object that has the type and the payload

- Fetch all the posts, we are fetching the data from the api

- Sending the data through the action.payload

- We have to to dispatch an action

- Redux tank allows additional arrow functions and we have to add an async dispatch function, and instead to return an action we have to dispatch it

- What is reducer? It is a function that accepts the state and also it accepts the action

- We have to handle the logic of fetching all posts

- Return action.payload that are our actual posts

4 Where we are retrieving the data ?

- We go in the component that needs the posts and we fetch the data from that global redux store

- Using the selectors that we initialize as a Hook
