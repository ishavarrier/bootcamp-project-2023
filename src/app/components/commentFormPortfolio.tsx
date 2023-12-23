"use client";

import { FormEvent, SetStateAction, useState,useTransition } from "react";
import { useParams,useRouter } from "next/navigation";


export default function CommentForm() {
  const [comment, setComment] = useState('');
  const [user, setUser] = useState('');

  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();


  const params = useParams();

  const submitComment = async (e: FormEvent) => {
    console.log("Inside the submitComment"); // Fix typo here
    console.log('The params are ' + JSON.stringify(params));
    // const comments = { comment, user }
    e.preventDefault();
    console.log(" client fetc URL /api/comments/${params.slug}");

    const response = await fetch(`/api/portfolio`, {
      method: 'POST',
      body: JSON.stringify({ comment, user }),
      headers: { 'Content-Type': 'application/json' },
    });
    setIsFetching(false);

    startTransition(() => {
      // Refresh the current route and fetch new data from the server without
      // losing client-side browser or React state.
      router.refresh();
    });
  }


  return (
    <form onSubmit={submitComment}>
      <div style={{ display: "flex", flexDirection: "column",  alignItems: "center", padding: "40px", border: "1px solid #ccc", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <label style={{ marginBottom: "10px" }}>Input Your Comment: </label>
        <h4>User:</h4>
        <div  style={{ marginBottom: "10px" }}>
          <input
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <h4>Comment:</h4>
        <div style={{ marginBottom: "10px" }}>
          <textarea
            rows={4} 
            cols={30}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            style={{ padding: "8px", borderRadius: "4px", border: "1px solid #ccc" }}
          />
        </div>
        <button style={{ padding: "8px 16px", borderRadius: "4px", background: "#0070f3", color: "#fff", border: "none", cursor: "pointer" }}> Submit Here</button>
      </div>
    </form>
  );
}
