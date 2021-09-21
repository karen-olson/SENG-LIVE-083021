const books = [
    {
        title: 'Eloquent JavaScript: A Modern Introduction to Programming',
        author: 'Marjin Haverbeke',

        reviews: [{user_id: 1, content:'Good book, but not great for new coders'}],
    
    },
    {
        title: 'JavaScript & JQuery: Interactive Front-End Web Development',
        author: 'Jon Duckett',
        likes: 45,
        reviews: [{user_id: 15, content:'good way to learn JQuery'}],
        inventory: 2
    },
    {
        title: 'JavaScript: The Good Parts',
        author: 'Douglas Crockford',
        likes: 36,
        reviews: [{user_id: 25, content:'I disagree with everything in this book'}, {user_id: 250, content:'Only JS book anyone needs'}],
        
    },
    {
        title: 'JavaScript: The Definitive Guide',
        author: 'David Flanagan',
        likes: 25,
        reviews: [{user_id: 44, content:'Great intro to js book'}, {user_id: 350, content:'It really is the Definitive guide'}],
   
    },
    {
        title: 'You Don’t Know JS',
        author: 'David Flanagan',
        likes: 6,
        reviews: [{user_id: 76, content:'You can find this for free online, no need to pay for it!'}],
     
    }

]
export default books