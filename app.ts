import express from "express";
import axios from "axios";
import { Posts } from "./models/posts";
import { getClient, getCollection, getCollection2} from "./utils/mongo";

export const app = express();
export const port = 3000;
// let memoizedDbUser = [];
// let memoizedDbPosts = [];
// let memoizedMergedPosts = [];

// const cacheData = async () => {
//   if (memoizedMergedPosts.length === 0) {
//     console.log("FETCHING API");
//     await axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => {
//         memoizedDbPosts = response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     await axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         memoizedDbUser = response.data;
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//     memoizedMergedPosts = memoizedDbPosts.map((onePost) => {
//       const author = memoizedDbUser.find(
//         (oneAuthor) => oneAuthor.id === onePost.userId
//       );
//       return {
//         ...onePost,
//         author,
//       };
//     });
//   }
// };
// app.get("/posts", async (req: express.Request, res: express.Response) => {
//   await cacheData();
//   try {
//     res.json(memoizedMergedPosts);
//   } catch (e) {
//     console.log("there was an error.");
//     console.log(e);
//   }
// });

// app.get("/posts/:id", async (req: express.Request, res: express.Response) => {
//   await cacheData();
//   const postId = req.params.id;
//   console.log(postId);
//   // console.log(memoizedMergedPosts)
//   const onePost = memoizedMergedPosts.find(
//     (oneMemoizedPost) => Number(oneMemoizedPost["id"]) === Number(postId)
//   );
//   console.log(onePost);
//   res.json(onePost);
// });

app.listen(port, async() => {
  const coll = await getCollection2('posts')
  const result = await (coll.find({})).toArray();
  console.log(result)
  await coll.deleteMany({})
  await coll.insertOne({name: "yari"})
  for (const one of result){
    const newName = one.name + 'i'
    await coll.updateOne({name: one.name}, {$set: {name: newName}})
  }
  console.log(result)
  console.log(`Example app listening at http://localhost:${port}`);
});
