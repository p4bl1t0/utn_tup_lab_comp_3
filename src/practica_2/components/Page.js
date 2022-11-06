const Page = ({ children }) => {
  return (
    <div>
      {children}
      <footer>
        <p>Footer desde Page</p>
      </footer>
    </div>
  );
};

export default Page;
