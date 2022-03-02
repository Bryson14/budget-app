export default function Card({ icon, name, amount }) {
  return (
    <div className="flex flex-row bg-white rounded-lg my-2 p-4">
      <div className="flex-none mr-2">{icon}</div>
      <div className="flex-1 mx-4">{name}</div>
      <div className="flex-initial">${amount}</div>
    </div>
  );
}
