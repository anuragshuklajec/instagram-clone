import PostCard from "../components/posts/PostCard";

function HomePage() {
  return (
    <>
      <div className="flex justify-evenly">
        <div className="hidden md:block">Left Bar</div>
        <div className="ml-2 mr-2">
          <PostCard />
          
        </div>

        <div className="hidden md:block">Right Bar</div>
      </div>
    </>
  );
}

export default HomePage;
