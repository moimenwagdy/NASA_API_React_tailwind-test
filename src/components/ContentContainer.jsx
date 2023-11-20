export default function ContentContainer({ children }) {
  return (
    <div className=" w-3/5 mx-auto bg-blue-100/10 rounded-[2%] flex justify-center items-center">
      {children}
    </div>
  );
}
