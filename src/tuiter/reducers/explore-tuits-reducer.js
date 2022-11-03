import { createSlice } from "@reduxjs/toolkit";
import posts from '../post-summary-list/posts.json';

const postsSlice = createSlice({
    name: 'posts',
    initialState: posts
});

export default postsSlice.reducer;