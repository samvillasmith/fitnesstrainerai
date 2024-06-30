'use client';

import { useClerk } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const SignOutButton = () => {
  const { signOut } = useClerk();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <button
      onClick={handleSignOut}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >
      Sign Out
    </button>
  );
};

export default SignOutButton;