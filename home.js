function MyButton() {
  return <button> Home </button>;
}

export default function Home() {
  return (
    <div>
      <h1>Yolanda Wang</h1>
      <MyButton />
      <img
        src={"profile_1.jpeg"}
        alt={"Photo of Yolanda Wang"}
        style={{
          width: 200,
          height: 200,
        }}
      />
    </div>
  );
}


