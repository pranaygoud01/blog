import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
function Home() {
  const [posts, setPosts] = useState([]);
  const cat = useLocation().search;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`/posts${cat}`);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [cat]);
  /*const posts = [
    {
      id: 1,
      title: "ChatGPT Vs Bard: Which is better for coding?",
      desc: "The biggest difference between ChatGPT and Bard is the Large Language Models (LLMs) they are powered by. ChatGPT uses the Generative Pre-trained Transformer 4 (GPT-4), while Bard uses the Language Model for Dialogue Applications (LaMBDA). Also, ChatGPT is developed by OpenAI, while Bard was built by Google.",
      img: "https://www.pluralsight.com/content/dam/ps/images/resource-center/blog/header-hero-images/ChatGPT-vs-Bard-c.png",
    },
    {
      id: 2,
      title: "Meet the Next Generation of Doctors—and Their Surgical Robots",
      desc: "It was incredible, says Murillo, who is now a forth-year general surgery resident at the University of California, San Francisco. “You have a full 3D view, which is different from any other minimally invasive surgery technique.",
      img: "https://media.wired.com/photos/651f2d9f64c7733b7f681115/master/w_960,c_limit/Meet-the-Next-Generation-of-Surgeons,-and-the-Robots-They%E2%80%99ll-Use-W30.jpg",
    },
    {
      id: 3,
      title: "Chimichurri Chickpeas",
      desc: "Chimichurri verde hails from Argentina and is typically served on steak, though I love it in many other preparations. It’s a bright herbed sauce made with fresh parsley, garlic, red onion, red pepper flakes, red wine vinegar, and olive oil.",
      img: "https://cookieandkate.com/images/2023/10/chimichurri-chickpeas-recipe-550x824.jpg",
    },
    {
      id: 4,
      title: "Tomato & Chickpea Pasta with Goat Cheese",
      desc: "It’s bursting with Mediterranean flavors—roasted cherry tomatoes, hearty chickpeas, creamy goat cheese, pops of briny olives, and garlic. Each one benefits from the heat of the oven, and the end result is just fantastic.",
      img: "https://cookieandkate.com/images/2023/09/tomato-chickpea-pasta-recipe-550x824.jpg",
    },
    {
      id: 5,
      title: "French Colonial Architecture",
      desc: "French Colonial architecture encompasses many dreamy architecture styles used by the French during colonization. They are stunning and historical. While they have been around for hundreds of years, they have gone through significant periods of change and evolved into their own style unique from the architecture in France. ",
      img: "https://cdn.nazmiyalantiquerugs.com/wp-content/uploads/2020/06/french-colonial-architecture-example.jpg",
    },
  ];*/
  return (
    <div className="home">
      <div className="posts">
        {posts.map((post) => (
          <div className="post" key={posts.id}>
            <div className="img">
              <img src={post.img} alt="post-img" />
            </div>
            <div className="content">
              <Link className="link1" to={`/post/${post.id}`}>
                <h1>{post.title}</h1>
              </Link>
              <p>{post.desc}</p>
              <button className="bttn"> Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
