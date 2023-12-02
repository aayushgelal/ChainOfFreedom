// Interface definitions
export interface Reply {
  id: number;
  text: string;
  commentSenderUsername: string;  // Added property
  commentSenderProfileImage: string; 
  replies: Reply[];
}

export interface CommentType {
  id: number;
  text: string;
  commentSenderUsername: string;  // Added property
  commentSenderProfileImage: string;  // You can replace this with the actual image data type
  replies: Reply[];
}

export interface Post {
  id: number;
  title: string;
  content: string;
  comments: CommentType[];
  username: string;
  name: string;
  image?:string;
}

export interface User {
  id: number;
  username: string;
  name: string;
  posts: Post[];
}

export interface UserData {
  users: User[];
}

// Example posts data
const posts: Post[] = [
  {
    id: 101,
    username: "aayushgelal",
    name: "aayush",
    title: "First Post",
    image:"https://cdn.pixabay.com/photo/2023/03/16/16/49/watercolor-7857103_640.png",

    content: "This is the content of the first post.",
    comments: [
      {
        id: 1001,
        
        text: "Great post!",
        commentSenderUsername: "adesh",
        commentSenderProfileImage: "path/to/adesh/profile/image.jpg",
        replies: [
          {
            id: 10001,
            // Assuming the user has a 'name' property
            text: "Thanks!",
            commentSenderUsername: "aayus",
            commentSenderProfileImage: "path/to/aayus/profile/image.jpg",
            replies: [],
          },
        ],
      },
      {
        id: 1002,
        text: "Nice work!",
        commentSenderUsername: "aayushgelal",
        commentSenderProfileImage: "path/to/aayushgelal/profile/image.jpg",
        replies: [],
      },
    ],
  },
  {
    id: 102,
    username: "aayushgelal",
    name: "aayush",
    title: "Second Post",
    content: "This is the content of the second post.",
    comments: [],
  },
  {
    id: 201,
    username: "user2",
    name: "User Two",
    title: "Another Post",
    content: "This is another post by User Two.",
    comments: [],
  },
];

export default posts;
