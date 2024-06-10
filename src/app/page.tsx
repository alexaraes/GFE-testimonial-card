import Card from '../components/Card';

const data = {
    name: "Sarah Dole",
    username: "sarahdole",
    avatar: "/GFE-testimonial-card/profile-thumbnail.png",
    body: "I've been searching for high quality abstract images for my design projects, and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!"
  }

export default function Page() {
    const { name, username, avatar, body } = data;
    return (
        <div className="flex justify-center align-center h-screen">
            <Card
                avatar={avatar}
                body={body}
                username={username}
                name={name}
            />
        </div>
    )
  }