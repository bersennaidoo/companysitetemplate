
export const metadata = {
  title: "Home Deep Blue Diving Club",
  description: "The diving club",
};

export default function HomePage() {
  return (
    <>
      <div id="bodycontent">
        <h2>Welcome to our super-dooper Scuba site</h2>
        <p>
          <img
            src="/images/divers-circle.jpg"
            width="200"
            height="162"
            alt="A circle of divers practice their skills"
          />
        </p>
        <p>
          Glad you could drop in and share some air with us! You've passed your
          underwater navigation skills and successfully found your way to the
          start point - or in this case, our home page.
        </p>
      </div>
    </>
  );
}
