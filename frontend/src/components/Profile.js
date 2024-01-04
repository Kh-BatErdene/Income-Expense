import { useState } from "react";
import { useAll } from "./providers/AuthProvider";

export default function Profile(props) {
  const [isProfile, setIsProfile] = useState(false);
  const { SignOut } = useAll();

  return (
    <div>
      <div className="dropdown dropdown-end">
        <div tabIndex={0}>
          <div
            onClick={() => setIsProfile(!isProfile)}
            className="avatar mt-1 cursor-pointer"
          >
            <div className="w-10 items-center rounded-full hover:border-2 ">
              <img src="/profile.jpg" />
            </div>
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
        >
          <li>
            <a href="/profile">Your Profile</a>
          </li>
          <li>
            <a onClick={SignOut}>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
