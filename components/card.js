import Link from "next/link";

export default function DashboardCard({ icon, name, amount }) {
  return (
    <div className="bg-white rounded-lg my-2 p-4">
      <div className="flex flex-row ">
        <div className="flex-none mr-2">{icon}</div>
        <div className="flex-1 mx-4">{name}</div>
        <div className="flex-initial">${amount}</div>
        <div className="flex-none mx-2">
          <Link
            href={{
              pathname: "/add",
              query: { category: name },
            }}
          >
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 0 24 24"
                width="24px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              </svg>
            </a>
          </Link>
        </div>
      </div>
      <div className="text-sm">money line graph here</div>
    </div>
  );
}
