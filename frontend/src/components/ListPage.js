import React from 'react';
import Post from "./Post";

const mockPostData = [
    {
        node: {
            __id: "1",
            title: "First post",
            content: "First post content"
        }
    },
    {
         node: {
            __id: "2",
            title: "Second post",
            content: "Second post content"
        }
    }
];

const ListPage = () => 
    <div style={styles.listPageWrapper}>
        <div style={styles.postButtonWrapper}>+ New Post</div>
        <div style={{ marginTop: 20 }}>
            {mockPostData.map(({ node }) => (
                <Post key={node.__id} post={node} />
            ))}
        </div>
    </div>;

const styles = { 
    listPageWrapper: { marginTop: 20, textAlign: "center" },
    postButtonWrapper: {
        padding: 10,
        background: "white",
        border: "2px solid indianred",
        color: "indianred",
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    }
}

export default ListPage;