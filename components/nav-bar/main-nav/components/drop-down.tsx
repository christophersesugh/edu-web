import React from "react";
import Link from "next/link";
import { MdOutlineLogout } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import { VscSettingsGear } from "react-icons/vsc";

export default function DropDown() {
  const user = {
    email: "christohybrid185@gmail.com",
  };
  return (
    <div className="flex flex-col gap-4 items-start px-12 pt-4 z-5 absolute z-5 bg-zinc-100 pb-4 rounded-bl-lg border-2 border-zinc-300 right-0">
      <span>{user.email}</span>
      <Link href="/profile">
        <button>
          <BsPersonCircle className="inline mr-2" />
          profile
        </button>
      </Link>
      <Link href="/settings">
        <button>
          <VscSettingsGear className="inline mr-2" />
          settings
        </button>
      </Link>
      <button>
        <MdOutlineLogout className="inline mr-2" />
        sign out
      </button>
    </div>
  );
}
